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
const ReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  featured: { type: Boolean, default: true },
  replyText: { type: String },
  createdAt: { type: String, required: true },
  photos: { type: [String], default: [] },
  role: { type: String },
  initials: { type: String },
  avatarColor: { type: String }
});

const ReviewModel = mongoose.models.Review || mongoose.model("Review", ReviewSchema);

try {
  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(uri);
  console.log("Connected. Clearing all reviews...");
  
  const result = await ReviewModel.deleteMany({});
  console.log(`Successfully deleted ${result.deletedCount} reviews.`);
  
  await mongoose.disconnect();
  console.log("Disconnected from database.");
  process.exit(0);
} catch (error) {
  console.error("Failed to clear reviews:", error);
  process.exit(1);
}
