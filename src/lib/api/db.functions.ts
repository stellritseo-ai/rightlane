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

    // Send email notification to NOTIFY_EMAIL
    try {
      const { sendLeadNotificationEmail } = await import("../email.server");
      await sendLeadNotificationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.projectType || data.service,
        message: data.description || data.message,
        address: data.address,
        source: data.source || "contact form",
      });
    } catch (emailErr) {
      console.error("[Email] Failed to send lead notification:", emailErr);
    }

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

    const authorName = data.author || "Anonymous";
    const parts = authorName.trim().split(/\s+/);
    let computedInitials = "";
    if (parts.length > 0 && parts[0]) computedInitials += parts[0][0].toUpperCase();
    if (parts.length > 1 && parts[parts.length - 1]) computedInitials += parts[parts.length - 1][0].toUpperCase();
    if (!computedInitials) computedInitials = "U";

    const palette = ["#1D4ED8", "#7C3AED", "#065F46", "#B45309", "#BE185D", "#0F766E", "#9333EA", "#DC2626"];
    let hash = 0;
    for (let i = 0; i < authorName.length; i++) {
      hash = authorName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const computedColor = palette[Math.abs(hash) % palette.length];
    const computedRole = data.role || `Homeowner, ${data.location || "Clearwater"}`;

    const newReview = new ReviewModel({
      title: data.title,
      text: data.text,
      author: data.author,
      location: data.location,
      rating: data.rating,
      featured: true,
      createdAt: new Date().toISOString(),
      photos: photosList,
      role: computedRole,
      initials: computedInitials,
      avatarColor: computedColor
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
      clientCity: data.clientCity || "Clearwater",
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
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    await connectDB();

    const photos = await GalleryPhotoModel.find().lean();

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

    // Send email notification to rightlanehandymanservice@yahoo.com
    try {
      const { sendLeadNotificationEmail } = await import("../email.server");
      await sendLeadNotificationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        address: data.address,
        source: data.source,
      });
    } catch (emailErr) {
      console.error("[Email] Failed to send lead notification:", emailErr);
      // Do not throw — email failure should not break the form submission
    }

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
    
    // Delete jrm user if it exists in the database
    await AdminUserModel.deleteOne({ username: "jrm" });

    // Seed default admin 'right' if none exists
    let admin = await AdminUserModel.findOne({ username: "right" });
    if (!admin) {
      admin = new AdminUserModel({
        username: "right",
        password: "right123",
        role: "admin",
        sessionToken: ""
      });
      await admin.save();
      console.log("[Auth] Default admin user right seeded in database.");
    }
    
    // Check credentials dynamically against database records
    const user = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
    if (!user || user.password !== data.password) {
      throw new Error("Invalid username or password");
    }
    
    // Generate secure unique session token
    let sessionToken = "";
    if (typeof globalThis !== "undefined" && globalThis.crypto && globalThis.crypto.getRandomValues) {
      const array = new Uint8Array(32);
      globalThis.crypto.getRandomValues(array);
      sessionToken = Array.from(array)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } else {
      sessionToken = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    }
    
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
    
    // Prevent self-deletion or default admin right deletion
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.username === "right") {
      throw new Error("Cannot delete primary administrator account");
    }
    
    await AdminUserModel.findByIdAndDelete(data.userId);
    return { success: true };
  });



