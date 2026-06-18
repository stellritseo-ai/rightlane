import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || (import.meta.env as any).CLOUDINARY_CLOUD_NAME || "";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || (import.meta.env as any).CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || (import.meta.env as any).CLOUDINARY_API_SECRET || "";

// Configure Cloudinary SDK
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

/**
 * Upload base64 image string to Cloudinary
 * @param base64Image The image data URL (e.g. data:image/jpeg;base64,...)
 * @returns The secure URL of the uploaded image
 */
export async function uploadImage(base64Image: string): Promise<string> {
  if (!base64Image) {
    throw new Error("No image data provided for upload");
  }

  // Ensure Cloudinary is configured
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.warn("Cloudinary is not fully configured in env. Falling back to raw base64 string storage.");
    return base64Image;
  }

  try {
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "jrm_construction",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error(`Cloudinary upload failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Upload local file by system path to Cloudinary
 * @param filePath Absolute path to the local file
 * @returns The secure URL of the uploaded image, or empty string if not configured
 */
export async function uploadLocalFile(filePath: string): Promise<string> {
  if (!filePath) {
    throw new Error("No file path provided for upload");
  }

  // Ensure Cloudinary is configured
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.warn("Cloudinary is not fully configured in env. Cannot upload local file.");
    return "";
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "jrm_construction",
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Cloudinary upload failed for ${filePath}:`, error);
    throw new Error(`Cloudinary upload failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Delete image from Cloudinary by parsing the public ID from its secure URL
 * @param imageUrl The full secure URL of the image
 * @returns Boolean representing success or failure
 */
export async function deleteImage(imageUrl: string): Promise<boolean> {
  if (!imageUrl) return false;

  // Ensure Cloudinary is configured
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.warn("Cloudinary is not fully configured in env. Cannot delete file from Cloudinary.");
    return false;
  }

  try {
    const parts = imageUrl.split('/upload/');
    if (parts.length < 2) return false;

    let path = parts[1];
    // Remove the version segment if it starts with 'v' followed by digits
    if (path.startsWith('v')) {
      const match = path.match(/^v\d+\/(.+)$/);
      if (match) {
        path = match[1];
      }
    }

    // Strip file extension (e.g. '.jpg', '.png', '.webp')
    const publicId = path.replace(/\.[^/.]+$/, "");

    console.log(`Attempting to delete Cloudinary asset with public ID: ${publicId}`);
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(`Cloudinary destroy result:`, result);
    return result.result === "ok";
  } catch (error) {
    console.error("Cloudinary asset deletion failed:", error);
    return false;
  }
}

