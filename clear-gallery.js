import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Load environment variables from .env
const envPath = path.resolve(".env");
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
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("Error: MONGODB_URI is not defined in .env!");
  process.exit(1);
}

// Define the Schema matching db.server.ts
const GalleryPhotoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  uploadedAt: { type: String, required: true }
});

const GalleryPhotoModel = mongoose.models.GalleryPhoto || mongoose.model("GalleryPhoto", GalleryPhotoSchema);

const GallerySettingsSchema = new mongoose.Schema({
  hasSeeded: { type: Boolean, default: false }
});

const GallerySettingsModel = mongoose.models.GallerySettings || mongoose.model("GallerySettings", GallerySettingsSchema);

try {
  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(uri);
  console.log("Connected. Clearing all gallery photos and seeding status...");
  
  const result = await GalleryPhotoModel.deleteMany({});
  console.log(`Successfully deleted ${result.deletedCount} gallery photos.`);
  
  await GallerySettingsModel.deleteMany({});
  console.log("Successfully reset seeding settings lock.");
  
  await mongoose.disconnect();
  console.log("Disconnected from database.");
  process.exit(0);
} catch (error) {
  console.error("Failed to clear gallery photos:", error);
  process.exit(1);
}
