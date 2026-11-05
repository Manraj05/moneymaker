import { spawn } from "child_process";
import http from "http";

// Check if dev server is responding
function checkServer() {
  return new Promise((resolve) => {
    const req = http.get("http://localhost:3000", (res) => {
      resolve(res.statusCode);
    });
    req.on("error", () => resolve(null));
    req.end();
  });
}

async function main() {
  console.log("Checking localhost:3000...");
  const status = await checkServer();
  console.log("Status:", status);
}

main();
