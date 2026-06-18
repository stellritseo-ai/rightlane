import { createServerFn } from "@tanstack/react-start";
import { INITIAL_LEADS, INITIAL_REVIEWS, INITIAL_CHATS } from "../leads-store";

// ── LEADS FUNCTIONS ──

export const getLeadsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    let leads = await LeadModel.find().lean();

    // Seed initial leads if DB is empty
    if (leads.length === 0) {
      console.log("Seeding initial leads to MongoDB Atlas...");
      // Map leads to remove client-side IDs to let MongoDB generate _id
      const seeded = INITIAL_LEADS.map(l => {
        const { id, ...rest } = l;
        return rest;
      });
      await LeadModel.insertMany(seeded);
      leads = await LeadModel.find().lean();
    }

    // Map _id to id for client compatibility
    return leads.map((l: any) => ({
      ...l,
      id: l._id.toString(),
      _id: undefined
    }));
  });

export const addCustomLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const newLead = new LeadModel({
      ...data,
      createdAt: new Date().toISOString(),
      photos: []
    });
    await newLead.save();
    return { ...newLead.toObject(), id: newLead._id.toString(), _id: undefined };
  });

export const deleteLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    await LeadModel.findByIdAndDelete(data.id);
    return { success: true };
  });

export const updateLeadStatusFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; status: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      { status: data.status },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const updateLeadDetailsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; details: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      {
        status: data.details.status,
        estimatedValue: data.details.estimatedValue,
        notes: data.details.notes
      },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const uploadLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; base64Photo: string } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    const imageUrl = await uploadImage(data.base64Photo);
    const updated = await LeadModel.findByIdAndUpdate(
      data.leadId,
      { $push: { photos: imageUrl } },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const removeLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; photoIndex: number } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();

    const lead = await LeadModel.findById(data.leadId);
    if (!lead || !lead.photos) return null;

    lead.photos.splice(data.photoIndex, 1);
    await lead.save();

    return { ...lead.toObject(), id: lead._id.toString(), _id: undefined };
  });


// ── REVIEWS FUNCTIONS ──

export const getReviewsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();
    let reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();

    // Seed initial reviews if DB is empty
    if (reviews.length === 0) {
      console.log("Seeding initial reviews to MongoDB Atlas...");
      const seeded = INITIAL_REVIEWS.map(r => {
        const { id, ...rest } = r;
        return rest;
      });
      await ReviewModel.insertMany(seeded);
      reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();
    }

    return reviews.map((r: any) => ({
      ...r,
      id: r._id.toString(),
      _id: undefined
    }));
  });

export const addReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    let photosList: string[] = [];
    if (data.newReviewPhoto) {
      const url = await uploadImage(data.newReviewPhoto);
      photosList.push(url);
    }

    const newReview = new ReviewModel({
      title: data.title,
      text: data.text,
      author: data.author,
      location: data.location,
      rating: data.rating,
      featured: true,
      createdAt: new Date().toISOString(),
      photos: photosList
    });

    await newReview.save();
    return { ...newReview.toObject(), id: newReview._id.toString(), _id: undefined };
  });

export const toggleReviewFeaturedFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const review = await ReviewModel.findById(data.id);
    if (!review) return null;

    review.featured = !review.featured;
    await review.save();

    return { ...review.toObject(), id: review._id.toString(), _id: undefined };
  });

export const replyToReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; replyText: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const updated = await ReviewModel.findByIdAndUpdate(
      data.id,
      { replyText: data.replyText },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });


// ── CHATS FUNCTIONS ──

export const getChatSessionsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    let chats = await ChatSessionModel.find().lean();

    // Seed initial chats if empty
    if (chats.length === 0) {
      console.log("Seeding initial chats to MongoDB Atlas...");
      const seeded = INITIAL_CHATS.map(c => {
        const { id, ...rest } = c;
        return rest;
      });
      await ChatSessionModel.insertMany(seeded);
      chats = await ChatSessionModel.find().lean();
    }

    return chats.map((c: any) => ({
      ...c,
      id: c._id.toString(),
      _id: undefined,
      messages: (c.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    }));
  });

export const getChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    const chat = await ChatSessionModel.findById(data.sessionId).lean();
    return chat ? {
      ...chat,
      id: chat._id.toString(),
      _id: undefined,
      messages: (chat.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const createChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { clientName: string; clientCity: string; clientEmail?: string; clientPhone?: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const newSession = new ChatSessionModel({
      clientName: data.clientName,
      clientCity: data.clientCity || "San Antonio",
      clientEmail: data.clientEmail || "",
      clientPhone: data.clientPhone || "",
      lastMessage: "Chat started",
      lastMessageTime: new Date().toISOString(),
      unread: false,
      messages: []
    });

    await newSession.save();
    const obj = newSession.toObject();
    return {
      ...obj,
      id: obj._id.toString(),
      _id: undefined,
      messages: (obj.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    };
  });

export const sendChatMessageFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string; sender: "client" | "admin"; text: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const isoTime = new Date().toISOString();
    const newMsg = {
      sender: data.sender,
      text: data.text,
      timestamp: isoTime
    };

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      {
        $push: { messages: newMsg },
        lastMessage: data.text,
        lastMessageTime: isoTime,
        unread: data.sender === "client"
      },
      { new: true }
    ).lean();

    return updated ? {
      ...updated,
      id: updated._id.toString(),
      _id: undefined,
      messages: (updated.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const markChatAsReadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      { unread: false },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });


// ── GALLERY FUNCTIONS ──

export const getGalleryPhotosFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, GalleryPhotoModel, GallerySettingsModel } = await import("../db.server");
    const { uploadLocalFile } = await import("../cloudinary.server");
    const path = await import("path");
    const fs = await import("fs");
    await connectDB();

    let photos = await GalleryPhotoModel.find().lean();

    // Check if we have already seeded in the past
    const settings = await GallerySettingsModel.findOne();
    const hasSeeded = settings?.hasSeeded ?? false;

    // Seed default photos ONLY if gallery collection is empty AND we have never seeded before
    if (photos.length === 0 && !hasSeeded) {
      console.log("Seeding default portfolio photos to MongoDB Atlas...");

      const defaults = [
        "/src/assets/svc-outdoor-kitchens.jpg",
        "/src/assets/welcome-pavilion.jpg",
        "/src/assets/svc-outdoor-kitchens.jpg",
        "/src/assets/faq-pavilion.jpg",
        "/src/assets/welcome-pavilion.jpg",
        "/src/assets/welcome-pool.jpg",
        "/src/assets/welcome-pool.jpg",
        "/src/assets/hero-patio.jpg",
        "/src/assets/stats-jobsite.jpg",
        "/src/assets/svc-softscapes.jpg",
        "/src/assets/svc-artificial-turf.jpg",
        "/src/assets/svc-softscapes.jpg",
        "/src/assets/svc-hardscapes.jpg",
        "/src/assets/svc-fireplace.jpg",
        "/src/assets/svc-softscapes.jpg",
        "/src/assets/svc-fencing.jpg",
        "/src/assets/svc-new-construction.jpg",
        "/src/assets/svc-outdoor-kitchens.jpg",
        "/src/assets/svc-house-remodeling.jpg"
      ];

      const seedData = [];
      for (const relPath of defaults) {
        let finalUrl = relPath;
        const localPath = path.join(process.cwd(), relPath);
        if (fs.existsSync(localPath)) {
          try {
            console.log(`Uploading seed asset to Cloudinary: ${relPath}`);
            const cloudinaryUrl = await uploadLocalFile(localPath);
            if (cloudinaryUrl) {
              finalUrl = cloudinaryUrl;
            }
          } catch (err) {
            console.error(`Failed to upload seed asset ${relPath} to Cloudinary:`, err);
          }
        }
        seedData.push({
          url: finalUrl,
          uploadedAt: new Date().toISOString()
        });
      }

      await GalleryPhotoModel.insertMany(seedData);

      // Save seeding status
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new GallerySettingsModel({ hasSeeded: true });
        await newSettings.save();
      }

      photos = await GalleryPhotoModel.find().lean();
    } else {
      // If there are already photos in the database and we haven't marked it as seeded, mark it now
      if (photos.length > 0 && !hasSeeded) {
        if (settings) {
          settings.hasSeeded = true;
          await settings.save();
        } else {
          const newSettings = new GallerySettingsModel({ hasSeeded: true });
          await newSettings.save();
        }
      }

      // Self-healing: migrate any existing local assets to Cloudinary
      let needsRefetch = false;
      for (const p of photos) {
        if (p.url && p.url.startsWith("/src/assets/")) {
          console.log(`Migrating existing database gallery photo to Cloudinary: ${p.url}`);
          const localPath = path.join(process.cwd(), p.url);
          if (fs.existsSync(localPath)) {
            try {
              const cloudinaryUrl = await uploadLocalFile(localPath);
              if (cloudinaryUrl) {
                await GalleryPhotoModel.findByIdAndUpdate(p._id, { url: cloudinaryUrl });
                needsRefetch = true;
              }
            } catch (err) {
              console.error(`Migration upload failed for ${p.url}:`, err);
            }
          }
        }
      }
      if (needsRefetch) {
        photos = await GalleryPhotoModel.find().lean();
      }
    }

    return photos.map((p: any) => ({
      id: p._id.toString(),
      url: p.url,
      uploadedAt: p.uploadedAt
    }));
  });

export const uploadGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { base64Photo: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    const imageUrl = await uploadImage(data.base64Photo);
    const newPhoto = new GalleryPhotoModel({
      url: imageUrl,
      uploadedAt: new Date().toISOString()
    });

    await newPhoto.save();
    return {
      id: newPhoto._id.toString(),
      url: newPhoto.url,
      uploadedAt: newPhoto.uploadedAt
    };
  });

export const removeGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, GalleryPhotoModel, GallerySettingsModel } = await import("../db.server");
    const { deleteImage } = await import("../cloudinary.server");
    await connectDB();

    // Find the photo first to get its URL for deletion from Cloudinary
    const photo = await GalleryPhotoModel.findById(data.id);
    if (photo && photo.url) {
      await deleteImage(photo.url);
    }

    await GalleryPhotoModel.findByIdAndDelete(data.id);

    // Unconditionally mark hasSeeded as true to prevent auto-seeding if the gallery becomes empty
    const settings = await GallerySettingsModel.findOne();
    if (settings) {
      settings.hasSeeded = true;
      await settings.save();
    } else {
      const newSettings = new GallerySettingsModel({ hasSeeded: true });
      await newSettings.save();
    }

    return { success: true };
  });

// ── WEB EMAILS FUNCTIONS ──

export const getWebEmailsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    const emails = await WebEmailModel.find().sort({ createdAt: -1 }).lean();
    return emails.map((e: any) => ({
      ...e,
      id: e._id.toString(),
      _id: undefined
    }));
  });

export const addWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    const newEmail = new WebEmailModel({
      ...data,
      createdAt: new Date().toISOString()
    });
    await newEmail.save();
    return { ...newEmail.toObject(), id: newEmail._id.toString(), _id: undefined };
  });

export const deleteWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    await WebEmailModel.findByIdAndDelete(data.id);
    return { success: true };
  });

export const loginAdminFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    // Seed default admin if none exists
    let admin = await AdminUserModel.findOne({ username: "jrm" });
    if (!admin) {
      admin = new AdminUserModel({
        username: "jrm",
        password: "jrm123",
        role: "admin",
        sessionToken: ""
      });
      await admin.save();
      console.log("[Auth] Default admin user jrm seeded in database.");
    }
    
    // Check credentials dynamically against database records
    const user = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
    if (!user || user.password !== data.password) {
      throw new Error("Invalid username or password");
    }
    
    // Generate secure unique session token
    const crypto = await import("crypto");
    const sessionToken = crypto.randomBytes(32).toString("hex");
    
    user.sessionToken = sessionToken;
    await user.save();
    
    return { success: true, token: sessionToken };
  });

export const verifyAdminTokenFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { token: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    if (!data.token) return { valid: false };
    
    const user = await AdminUserModel.findOne({ sessionToken: data.token });
    if (!user) return { valid: false };
    
    return { 
      valid: true, 
      id: user._id.toString(), 
      username: user.username, 
      role: user.role || "admin" 
    };
  });

export const updateUserCredentialsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string; username?: string; password?: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    
    if (data.username && data.username.trim()) {
      const existing = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
      if (existing && existing._id.toString() !== data.userId) {
        throw new Error("Username already taken");
      }
      user.username = data.username.toLowerCase().trim();
    }
    
    if (data.password && data.password.trim()) {
      user.password = data.password;
    }
    
    await user.save();
    return { success: true, username: user.username };
  });

export const getPortalUsersFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    const users = await AdminUserModel.find().sort({ username: 1 }).lean();
    return users.map((u: any) => ({
      id: u._id.toString(),
      username: u.username,
      role: u.role || "admin"
    }));
  });

export const createPortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string; role: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    const usernameClean = data.username.toLowerCase().trim();
    const existing = await AdminUserModel.findOne({ username: usernameClean });
    if (existing) {
      throw new Error("Username already exists");
    }
    
    const newUser = new AdminUserModel({
      username: usernameClean,
      password: data.password,
      role: data.role || "viewer",
      sessionToken: ""
    });
    
    await newUser.save();
    return { success: true, id: newUser._id.toString(), username: newUser.username, role: newUser.role };
  });

export const deletePortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    // Prevent self-deletion or default admin jrm deletion
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.username === "jrm") {
      throw new Error("Cannot delete primary administrator account");
    }
    
    await AdminUserModel.findByIdAndDelete(data.userId);
    return { success: true };
  });



