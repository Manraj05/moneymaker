#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync, spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const clientsPath = path.join(rootDir, "src", "data", "clients.json");
const activePath = path.join(rootDir, "src", "data", "active-client.json");

if (!fs.existsSync(clientsPath)) {
  console.error("❌ clients.json not found!");
  process.exit(1);
}

const clients = JSON.parse(fs.readFileSync(clientsPath, "utf-8"));
const activeData = fs.existsSync(activePath)
  ? JSON.parse(fs.readFileSync(activePath, "utf-8"))
  : { clientId: "layr-epoxy" };

const targetSlug = (process.argv[2] || activeData.clientId || "layr-epoxy").trim().toLowerCase();

const client = clients[targetSlug];
if (!client) {
  console.error(`❌ Client "${targetSlug}" not found in clients.json!`);
  console.log("Available clients:", Object.keys(clients).join(", "));
  process.exit(1);
}

// 1. Ensure vault folder exists
const vaultDir = path.join(rootDir, "outreach", targetSlug);
fs.mkdirSync(vaultDir, { recursive: true });

// 2. Save client data in vault
fs.writeFileSync(
  path.join(vaultDir, "client-data.json"),
  JSON.stringify(client, null, 2) + "\n"
);

// 3. Save tailored SMS outreach templates
const smsText = `=======================================================
  COLD TEXT SCRIPT FOR: ${client.businessName}
  Location: ${client.primaryCity}, ${client.province} (${client.address})
  Reputation: ${client.rating} ★ (${client.reviewCount} Google Reviews)
=======================================================

OPTION 1: The "Compliment + Teaser" (Recommended)
-------------------------------------------------------
"Hey team, saw you have a clean ${client.rating.toFixed(1)}★ on Google in ${client.primaryCity} for ${client.niche === "epoxy" ? "coatings and surface work" : "roofing"}. Noticed you didn't have a mobile site to capture quote requests, so I put together a quick preview for ${client.businessName} with a 60-second floor estimator (screenshot attached). Let me know what you think of the design!"

OPTION 2: The Short "No-Pitch" Curiosity Hook
-------------------------------------------------------
"Hey, was researching top ${client.niche === "epoxy" ? "concrete coating" : "exterior"} contractors in ${client.primaryCity} and saw your reviews. Put together a mobile quote calculator and preview for ${client.businessName} (attached). No pitch, just wanted to see if you liked the design?"

OPTION 3: Follow-Up / After Cold Call
-------------------------------------------------------
"Hey [Owner], great speaking briefly today. As promised, here is the mobile preview we built for ${client.businessName} with the instant price calculator. Let me know if you want the live demo link to test on your phone!"
`;

fs.writeFileSync(path.join(vaultDir, "sms-script.txt"), smsText);

// 4. Capture pixel-perfect mobile teaser screenshot
const teaserImgPath = path.join(vaultDir, "teaser-mobile.png");
console.log(`\n📸 Generating high-converting teaser screenshot for ${client.businessName}...`);

async function run() {
  const targetUrl = `http://localhost:3000/teaser/${targetSlug}`;
  let serverProcess = null;
  let needToKillServer = false;

  // Function to check if server responds
  async function checkServer() {
    try {
      const res = await fetch(targetUrl);
      return res.status === 200;
    } catch (_) {
      return false;
    }
  }

  const isAlreadyRunning = await checkServer();

  if (!isAlreadyRunning) {
    console.log("⚡ Starting background Next.js server on port 3000...");
    serverProcess = spawn("npx", ["next", "start", "-p", "3000"], {
      cwd: rootDir,
      stdio: "ignore",
      detached: true,
    });
    needToKillServer = true;

    // Poll until ready (up to 12s)
    let ready = false;
    for (let i = 0; i < 24; i++) {
      await new Promise((r) => setTimeout(r, 500));
      ready = await checkServer();
      if (ready) break;
    }

    if (!ready) {
      console.error("❌ Timed out waiting for Next.js server to become ready.");
      if (serverProcess) {
        try { process.kill(-serverProcess.pid); } catch (_) {}
      }
      process.exit(1);
    }
  }

  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (!fs.existsSync(chromePath)) {
    console.error("❌ Google Chrome not found at:", chromePath);
    process.exit(1);
  }

  try {
    execSync(
      `"${chromePath}" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=2000 --window-size=500,1000 --screenshot="${teaserImgPath}" "${targetUrl}"`,
      { stdio: "ignore" }
    );

    console.log(`✅ Teaser mobile image saved to: ${teaserImgPath}`);

    // Copy to artifact directory if available
    const artifactDir = process.env.ARTIFACT_DIR || "/Users/manrajshahi/.gemini/antigravity/brain/776645b0-1797-4a1b-8c31-d915bb857a74";
    if (fs.existsSync(artifactDir)) {
      fs.copyFileSync(teaserImgPath, path.join(artifactDir, `${targetSlug}_teaser_mobile.png`));
    }
  } catch (err) {
    console.error("❌ Failed to capture screenshot:", err.message);
  } finally {
    if (needToKillServer && serverProcess) {
      try {
        process.kill(-serverProcess.pid);
      } catch (_) {}
    }
  }

  console.log("\n=======================================================");
  console.log(`  🎉 OUTREACH ASSETS READY FOR: ${client.businessName}`);
  console.log("=======================================================");
  console.log(`  📁 Vault Folder:    outreach/${targetSlug}/`);
  console.log(`  🖼️  Screenshot:      outreach/${targetSlug}/teaser-mobile.png`);
  console.log(`  📝 SMS Script:      outreach/${targetSlug}/sms-script.txt`);
  console.log(`  🌐 Live Teaser URL:  ${targetUrl}`);
  console.log("=======================================================\n");
}

run();
