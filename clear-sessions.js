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
const ChatMessageSchema = new mongoose.Schema({
  sender: { type: String, enum: ["client", "admin"], required: true },
  text: { type: String, required: true },
  timestamp: { type: String, required: true }
});

const ChatSessionSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientEmail: { type: String, default: "" },
  clientPhone: { type: String, default: "" },
  lastMessage: { type: String, required: true },
  lastMessageTime: { type: String, required: true },
  unread: { type: Boolean, default: false },
  messages: { type: [ChatMessageSchema], default: [] }
});

const ChatSessionModel = mongoose.models.ChatSession || mongoose.model("ChatSession", ChatSessionSchema);

try {
  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(uri);
  console.log("Connected. Clearing all chat sessions...");
  
  const result = await ChatSessionModel.deleteMany({});
  console.log(`Successfully deleted ${result.deletedCount} chat sessions.`);
  
  await mongoose.disconnect();
  console.log("Disconnected from database.");
  process.exit(0);
} catch (error) {
  console.error("Failed to clear sessions:", error);
  process.exit(1);
}
