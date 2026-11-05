#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const clientsPath = path.join(rootDir, "src", "data", "clients.json");
const activeClientPath = path.join(rootDir, "src", "data", "active-client.json");

if (!fs.existsSync(clientsPath)) {
  console.error("❌ clients.json not found at:", clientsPath);
  process.exit(1);
}

const clients = JSON.parse(fs.readFileSync(clientsPath, "utf-8"));
const validSlugs = Object.keys(clients);

const requestedSlug = process.argv[2]?.trim().toLowerCase();

if (!requestedSlug) {
  console.log("\n=======================================================");
  console.log("  GTA CONTRACTOR CLIENT SWITCHER");
  console.log("=======================================================\n");
  console.log("Usage: npm run client -- <client-slug>\n");
  console.log("Available Pre-Loaded Clients:");
  validSlugs.forEach((slug) => {
    const c = clients[slug];
    console.log(`  • ${slug.padEnd(24)} [${c.niche.toUpperCase()}] ${c.businessName} (${c.primaryCity}, ${c.province})`);
  });
  console.log("\nExample: npm run client -- purest-epoxy\n");
  process.exit(0);
}

if (!clients[requestedSlug]) {
  console.error(`\n❌ Unknown client slug: "${requestedSlug}"`);
  console.log("\nValid client slugs are:");
  validSlugs.forEach((slug) => {
    console.log(`  - ${slug} (${clients[slug].businessName})`);
  });
  console.log("");
  process.exit(1);
}

const client = clients[requestedSlug];

// Update active-client.json
fs.writeFileSync(
  activeClientPath,
  JSON.stringify({ clientId: requestedSlug }, null, 2) + "\n"
);

console.log("\n=======================================================");
console.log(`  ✅ ACTIVE CLIENT SWITCHED TO: ${client.businessName}`);
console.log("=======================================================");
console.log(`  Slug:         ${client.slug}`);
console.log(`  Niche:        ${client.niche.toUpperCase()} (${client.nicheTitle})`);
console.log(`  Location:     ${client.primaryCity}, ${client.province} (${client.address})`);
console.log(`  Phone:        ${client.phone}`);
console.log(`  Google Rep:   ${client.rating} ★ (${client.reviewCount} verified reviews)`);
console.log(`  Tagline:      ${client.tagline}`);
console.log(`  Service Areas: ${client.serviceAreas.join(", ")}`);
console.log("-------------------------------------------------------");
console.log("  🚀 ACTIONS & DEPLOYMENT COMMANDS:");
console.log(`  • Local Dev:       npm run dev`);
console.log(`  • Build Check:     npm run build`);
console.log(`  • Git Branch:      git checkout -b client/${client.slug}`);
console.log(`  • Vercel Deploy:   vercel --env NEXT_PUBLIC_CLIENT_ID=${client.slug} --prod`);
console.log("=======================================================\n");
