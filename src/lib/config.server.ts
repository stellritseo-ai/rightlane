import process from "node:process";
import fs from "node:fs";
import path from "node:path";

// Self-contained .env loader to populate process.env in all server environments
export function loadEnv() {
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const envConfig = fs.readFileSync(envPath, "utf-8");
      envConfig.split("\n").forEach((line) => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || "";
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
          process.env[key] = value;
        }
      });
      console.log("[Config] Loaded environment variables from .env file successfully.");
    }
  } catch (err) {
    console.error("[Config] Failed to load .env file:", err);
  }
}

// Auto-run loadEnv on load
loadEnv();

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
  };
}
