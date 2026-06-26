export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  contactTime: string;
  status: "new" | "contacted" | "consultation_scheduled" | "proposal_sent" | "won" | "lost";
  estimatedValue: number;
  notes?: string;
  createdAt: string;
  photos?: string[];
}

export interface Review {
  id: string;
  title: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
  replyText?: string;
  createdAt: string;
  photos?: string[];
  role?: string;
  initials?: string;
  avatarColor?: string;
}

export interface WebEmail {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  createdAt: string;
}


// Initial leads pre-seeded
export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Robert Martinez",
    email: "rob.martinez@gmail.com",
    phone: "(210) 555-0192",
    address: "415 Vintage Way, Bulverde, TX 78163",
    projectType: "new-construction",
    description: "Looking to build a custom guest house on our ranch property. Needs to include a master suite, living area, kitchenette, and a covered porch matching the stone aesthetics of the main house.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 285000,
    createdAt: "2026-06-15T09:30:00Z"
  },
  {
    id: "lead-2",
    name: "Lisa Thompson",
    email: "lisa.thompson86@yahoo.com",
    phone: "(210) 555-8831",
    address: "812 Walnut Ave, Pinellas Park, TX 78155",
    projectType: "remodeling",
    description: "Interested in a full kitchen and master bath remodel. Our house was built in 1995 and needs a modern layout, new quartz countertops, custom cabinetry, and walk-in shower expansion.",
    contactTime: "afternoon",
    status: "contacted",
    estimatedValue: 78000,
    createdAt: "2026-06-14T14:15:00Z"
  },
  {
    id: "lead-3",
    name: "David Miller",
    email: "dmiller_sa@outlook.com",
    phone: "(830) 555-4421",
    address: "102 Echo Ridge, St. Petersburg, TX 78130",
    projectType: "outdoor-kitchen",
    description: "We want to install a high-end outdoor kitchen next to our pool. Need a built-in grill, under-counter fridge, granite bar seating for 6, and a stone accent column matching our pool coping.",
    contactTime: "evening",
    status: "proposal_sent",
    estimatedValue: 34500,
    createdAt: "2026-06-12T11:00:00Z"
  },
  {
    id: "lead-4",
    name: "Emily Rodriguez",
    email: "emily.rod@gmail.com",
    phone: "(210) 555-7729",
    address: "2209 Tarpon Springs Dr, Tarpon Springs, TX 78133",
    projectType: "fireplace",
    description: "Would love a custom floor-to-ceiling stone fireplace built in our double-height living room. Needs a rustic cedar mantel and built-in wood storage alcove.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 14500,
    createdAt: "2026-06-11T16:40:00Z"
  },
  {
    id: "lead-5",
    name: "Amanda Taylor",
    email: "amanda.taylor@comcast.net",
    phone: "(210) 555-1284",
    address: "7402 Crown Point, Clearwater, FL 78258",
    projectType: "turf",
    description: "Need artificial turf installed in our backyard (~1,200 sq ft). We have two large dogs and the grass keeps dying. Also want proper sub-base drainage so there's no odors.",
    contactTime: "morning",
    status: "won",
    notes: "Contract signed on June 10. Down payment received. Materials ordered, schedule set for June 22.",
    estimatedValue: 18500,
    createdAt: "2026-06-08T10:10:00Z"
  },
  {
    id: "lead-6",
    name: "James Wilson",
    email: "jwilson_eng@gmail.com",
    phone: "(830) 555-9012",
    address: "1405 Paris St, Castroville, TX 78009",
    projectType: "fencing",
    description: "Need cedar privacy fencing along our half-acre boundary line. About 350 linear feet total, including a 12-foot double gate for mower access.",
    contactTime: "evening",
    status: "lost",
    notes: "Client decided to go with a cheaper, standard chain-link fence instead of premium custom wood fencing.",
    estimatedValue: 9200,
    createdAt: "2026-06-05T15:20:00Z"
  },
  {
    id: "lead-7",
    name: "Michael Brown",
    email: "mbrown.farm@yahoo.com",
    phone: "(830) 555-3312",
    address: "202 Peach Orchard, Tampa, TX 78624",
    projectType: "softscapes",
    description: "Looking for planting design and softscape installation for our front entrance. Want drought-tolerant native Texas plants, landscape beds, mulch, and low-voltage drip irrigation.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 12000,
    createdAt: "2026-06-16T08:45:00Z"
  },
  {
    id: "lead-8",
    name: "Jessica Davis",
    email: "jdavis.law@gmail.com",
    phone: "(210) 555-8810",
    address: "1802 Meadow Trail, Schertz, TX 78154",
    projectType: "patio",
    description: "Requesting a quote for a flagstone patio extension (~600 sq ft) with a cedar pergola overhead to provide shade. Want to connect it seamlessly with our existing back door steps.",
    contactTime: "afternoon",
    status: "proposal_sent",
    estimatedValue: 24000,
    createdAt: "2026-06-13T13:30:00Z"
  },
  {
    id: "lead-9",
    name: "Kevin Thomas",
    email: "kthomas@thomasproperties.com",
    phone: "(210) 555-4040",
    address: "8300 Medical Dr, Clearwater, FL 78229",
    projectType: "commercial",
    description: "Commercial landscaping and hardscaping upgrades for our medical office center. Needs high-durability plants, masonry retaining walls, and custom stone walkways.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 115000,
    createdAt: "2026-06-10T11:50:00Z"
  },
  {
    id: "lead-10",
    name: "Ashley White",
    email: "ashley.white@gmail.com",
    phone: "(830) 555-6677",
    address: "405 Hilltop Dr, Hondo, TX 78861",
    projectType: "hardscapes",
    description: "Need a custom limestone retaining wall (~80 feet long, varying from 2 to 4 feet high) to correct a slope issue in our backyard and create a level lawn area.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 16500,
    createdAt: "2026-06-17T15:10:00Z"
  }
];

// Initial reviews pre-seeded from reviewsPage list and landing page
export const INITIAL_REVIEWS: Review[] = [
  {
    id: "review-1",
    title: "A Complete Home Transformation",
    text: "Ronnie and his team just finished a complete remodel and backyard overhaul for us. From the new kitchen to the covered patio and outdoor kitchen, the entire process was professional and seamless. His 25+ Years of experience showed at every turn—he anticipated issues we never would have thought of. The crew was respectful, the site was kept clean, and the quality is outstanding. Right Lane is a true design-build contractor.",
    author: "The Carter Family",
    location: "Clearwater",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z",
    initials: "CF",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Clearwater"
  },
  {
    id: "review-2",
    title: "An Outdoor Oasis Created",
    text: "Our backyard was just empty grass. Now, it's our favorite 'room' in the house! Right Lane built a stunning flagstone patio, a custom pergola, and a softscape garden that looks like it's always been there. Ronnie's design eye is incredible. We especially appreciated that they were licensed and insured; it gave us so much peace of mind. We recommend them to everyone.",
    author: "Melissa & Ben R.",
    location: "Largo",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z",
    initials: "MR",
    avatarColor: "#7C3AED",
    role: "Homeowner, Largo"
  },
  {
    id: "review-3",
    title: "Trustworthy & Honest Repair",
    text: "After a storm damaged our fence and part of our roof eaves, we needed emergency help. Ronnie answered his phone and had a crew out within hours for temporary protection. They scheduled the full repair promptly, provided a clear, fair quote, and did impeccable work. In a world of contractors who don't call back, Right Lane's 24/7 reliability and old-school integrity are priceless.",
    author: "David H.",
    location: "St. Petersburg",
    rating: 5,
    featured: true,
    replyText: "Thank you David! Storm damage is always stressful, so we make it a priority to respond quickly and secure your property. Glad we could help get things back to normal.",
    createdAt: "2026-05-24T08:15:00Z",
    initials: "DH",
    avatarColor: "#065F46",
    role: "Homeowner, St. Petersburg"
  },
  {
    id: "review-4",
    title: "Kitchen Remodel Perfection",
    text: "We interviewed several contractors for our kitchen remodel. Ronnie from Right Lane stood out immediately. He was knowledgeable, listened to our ideas, and his quote was detailed and transparent—no hidden fees. The craftsmanship on the custom cabinets and tilework is beautiful. They finished on time and on budget. A stress-free, fantastic experience.",
    author: "Sofia & Mark T.",
    location: "Clearwater",
    rating: 5,
    featured: true,
    createdAt: "2026-06-01T11:00:00Z",
    initials: "SM",
    avatarColor: "#B45309",
    role: "Homeowner, Clearwater"
  },
  {
    id: "review-5",
    title: "Custom Fencing & Pergola",
    text: "The backyard fencing and covered patio upgrade they did for our home was outstanding. Professional, clean, and finished ahead of schedule.",
    author: "Marcus T.",
    location: "Clearwater",
    rating: 5,
    featured: true,
    createdAt: "2026-06-02T10:00:00Z",
    initials: "MT",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Clearwater"
  },
  {
    id: "review-6",
    title: "Emergency Storm Cleanup",
    text: "Called them for emergency cleanup and debris removal after the storm — they arrived within 45 minutes and worked tirelessly. Truly 24/7 service.",
    author: "Priya S.",
    location: "Largo",
    rating: 5,
    featured: true,
    createdAt: "2026-06-03T11:15:00Z",
    initials: "PS",
    avatarColor: "#7C3AED",
    role: "Property Manager, Largo"
  },
  {
    id: "review-7",
    title: "Gorgeous Artificial Turf",
    text: "They installed a gorgeous artificial turf and paved walkway in our courtyard. Flawless execution. I'll never use another handyman company again.",
    author: "Jared W.",
    location: "St. Petersburg",
    rating: 5,
    featured: true,
    createdAt: "2026-06-04T12:00:00Z",
    initials: "JW",
    avatarColor: "#065F46",
    role: "Homeowner, St. Petersburg"
  },
  {
    id: "review-8",
    title: "Office Renovation Work",
    text: "Best remodeling contractor in Clearwater. They wired, painted, and finished our entire office renovation — on time, on budget, and zero issues.",
    author: "Diana L.",
    location: "Dunedin",
    rating: 5,
    featured: true,
    createdAt: "2026-06-05T14:30:00Z",
    initials: "DL",
    avatarColor: "#B45309",
    role: "Business Owner, Dunedin"
  },
  {
    id: "review-9",
    title: "Property Mulch & Landscaping",
    text: "Mulching, landscaping, and property maintenance was seamless. They set up Lutron outdoor lighting and fixed all our deck issues.",
    author: "Kenji M.",
    location: "Clearwater Beach",
    rating: 5,
    featured: true,
    createdAt: "2026-06-06T09:00:00Z",
    initials: "KM",
    avatarColor: "#BE185D",
    role: "Homeowner, Clearwater Beach"
  },
  {
    id: "review-10",
    title: "Bungalow Drywall & Paint",
    text: "Hired them for a complete drywall repair and painting of a 1970s bungalow. They passed every inspection. Excellent team.",
    author: "Rosa F.",
    location: "Pinellas Park",
    rating: 5,
    featured: true,
    createdAt: "2026-06-07T15:20:00Z",
    initials: "RF",
    avatarColor: "#0F766E",
    role: "Real Estate Investor, Pinellas Park"
  },
  {
    id: "review-11",
    title: "Limestone Pavement & Demo",
    text: "Pressure washing and concrete demolition was smooth and the team was incredibly knowledgeable. They left the site spotless.",
    author: "Tony B.",
    location: "Tarpon Springs",
    rating: 5,
    featured: true,
    createdAt: "2026-06-08T16:00:00Z",
    initials: "TB",
    avatarColor: "#9333EA",
    role: "Restaurant Owner, Tarpon Springs"
  },
  {
    id: "review-12",
    title: "Safety Harbor Remodel",
    text: "Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.",
    author: "Sandra K.",
    location: "Safety Harbor",
    rating: 5,
    featured: true,
    createdAt: "2026-06-09T10:45:00Z",
    initials: "SK",
    avatarColor: "#DC2626",
    role: "Property Manager, Safety Harbor"
  },
  {
    id: "review-13",
    title: "Fast Junk Hauling",
    text: "Ronnie hauled away two truckloads of old deck lumber and yard waste in less than an hour. Great prices and prompt service in Largo.",
    author: "Gary D.",
    location: "Largo",
    rating: 5,
    featured: true,
    createdAt: "2026-06-10T11:00:00Z",
    initials: "GD",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Largo"
  },
  {
    id: "review-14",
    title: "Driveway Looks Brand New",
    text: "Professional pressure washing for our entire driveway and pool deck. It looks brand new again. Highly recommend Right Lane!",
    author: "Linda K.",
    location: "Clearwater Beach",
    rating: 5,
    featured: true,
    createdAt: "2026-06-11T13:20:00Z",
    initials: "LK",
    avatarColor: "#7C3AED",
    role: "Homeowner, Clearwater Beach"
  },
  {
    id: "review-15",
    title: "Perfect Drywall Repair",
    text: "Right Lane repaired our drywall after a plumbing leak. They did the patching, texturing, and painting flawlessly. You can't even see where the hole was.",
    author: "Mark A.",
    location: "St. Petersburg",
    rating: 5,
    featured: true,
    createdAt: "2026-06-12T14:15:00Z",
    initials: "MA",
    avatarColor: "#065F46",
    role: "Homeowner, St. Petersburg"
  },
  {
    id: "review-16",
    title: "Excellent Garage Cleanout",
    text: "Fast debris removal after clearing out our garage. They took care of everything from old furniture to broken appliances. Excellent service.",
    author: "Sarah W.",
    location: "Dunedin",
    rating: 5,
    featured: true,
    createdAt: "2026-06-13T10:00:00Z",
    initials: "SW",
    avatarColor: "#B45309",
    role: "Homeowner, Dunedin"
  },
  {
    id: "review-17",
    title: "Stunning Curb Appeal",
    text: "Had our front yard mulched and garden beds bordered. Right Lane did a beautiful job. Our curb appeal has never looked better!",
    author: "Thomas H.",
    location: "Safety Harbor",
    rating: 5,
    featured: true,
    createdAt: "2026-06-14T09:30:00Z",
    initials: "TH",
    avatarColor: "#BE185D",
    role: "Homeowner, Safety Harbor"
  },
  {
    id: "review-18",
    title: "Sturdy Fence Repairs",
    text: "Repaired our wooden fence gates and replaced three rotting posts. Very sturdy work and fair pricing. Will definitely hire Ronnie again.",
    author: "Nancy P.",
    location: "Pinellas Park",
    rating: 5,
    featured: true,
    createdAt: "2026-06-15T16:00:00Z",
    initials: "NP",
    avatarColor: "#0F766E",
    role: "Homeowner, Pinellas Park"
  },
  {
    id: "review-19",
    title: "Quick & Handy Help",
    text: "Super responsive handyman service. They fixed our sticky doors, hung some heavy shelving, and replaced three light fixtures in one afternoon.",
    author: "Jason B.",
    location: "Clearwater",
    rating: 5,
    featured: true,
    createdAt: "2026-06-16T12:00:00Z",
    initials: "JB",
    avatarColor: "#9333EA",
    role: "Homeowner, Clearwater"
  },
  {
    id: "review-20",
    title: "Commercial Storm Cleanup",
    text: "Cleaned up our commercial property after storm damage. Cleared fallen branches, loose gravel, and trash. Excellent communication throughout.",
    author: "Robert T.",
    location: "Tampa",
    rating: 5,
    featured: true,
    createdAt: "2026-06-17T11:45:00Z",
    initials: "RT",
    avatarColor: "#DC2626",
    role: "Business Owner, Tampa"
  },
  {
    id: "review-21",
    title: "Deck Sealing & Wash",
    text: "Excellent deck pressure washing and sealing. Ronnie was professional, on time, and left our backyard spotless. 5 stars!",
    author: "Rachel S.",
    location: "Tarpon Springs",
    rating: 5,
    featured: true,
    createdAt: "2026-06-18T10:15:00Z",
    initials: "RS",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Tarpon Springs"
  },
  {
    id: "review-22",
    title: "Heavy Junk Removal",
    text: "They hauled away our old hot tub and concrete blocks. Very heavy work but the Right Lane crew handled it with ease. Outstanding service!",
    author: "Michael F.",
    location: "Largo",
    rating: 5,
    featured: true,
    createdAt: "2026-06-19T14:30:00Z",
    initials: "MF",
    avatarColor: "#7C3AED",
    role: "Homeowner, Largo"
  }
];

// Helper to initialize and retrieve data
import {
  getLeadsFn,
  addCustomLeadFn,
  deleteLeadFn,
  updateLeadStatusFn,
  updateLeadDetailsFn,
  uploadLeadPhotoFn,
  removeLeadPhotoFn,
  getReviewsFn,
  addReviewFn,
  toggleReviewFeaturedFn,
  replyToReviewFn,
  getChatSessionsFn,
  getChatSessionFn,
  createChatSessionFn,
  sendChatMessageFn,
  markChatAsReadFn,
  getGalleryPhotosFn,
  uploadGalleryPhotoFn,
  removeGalleryPhotoFn,
  getWebEmailsFn,
  addWebEmailFn,
  deleteWebEmailFn,
  loginAdminFn,
  verifyAdminTokenFn,
  updateUserCredentialsFn,
  getPortalUsersFn,
  createPortalUserFn,
  deletePortalUserFn
} from "./api/db.functions";

export const getLeads = async (): Promise<Lead[]> => {
  return getLeadsFn();
};

export const addLead = async (leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt">): Promise<Lead> => {
  let estimatedValue = 10000;
  switch (leadData.projectType) {
    case "remodeling":
      estimatedValue = 65000;
      break;
    case "new-construction":
      estimatedValue = 250000;
      break;
    case "outdoor-kitchen":
      estimatedValue = 35000;
      break;
    case "fireplace":
      estimatedValue = 12000;
      break;
    case "patio":
      estimatedValue = 18000;
      break;
    case "hardscapes":
      estimatedValue = 15000;
      break;
    case "softscapes":
      estimatedValue = 8500;
      break;
    case "fencing":
      estimatedValue = 7500;
      break;
    case "turf":
      estimatedValue = 12000;
      break;
    case "commercial":
      estimatedValue = 95000;
      break;
  }
  return addCustomLeadFn({
    data: {
      ...leadData,
      status: "new",
      estimatedValue
    }
  });
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  return addCustomLeadFn({ data: lead });
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  await updateLeadStatusFn({ data: { id, status } });
  return getLeadsFn();
};

export const updateLeadDetails = async (id: string, updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">>): Promise<Lead[] | null> => {
  await updateLeadDetailsFn({ data: { id, details: updates } });
  return getLeadsFn();
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  await deleteLeadFn({ data: { id } });
  return getLeadsFn();
};

export const getReviews = async (): Promise<Review[]> => {
  return getReviewsFn();
};

export const addReview = async (reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }): Promise<Review> => {
  return addReviewFn({ data: reviewData });
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  await toggleReviewFeaturedFn({ data: { id } });
  return getReviewsFn();
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  await replyToReviewFn({ data: { id, replyText } });
  return getReviewsFn();
};

export const getChatSessions = async (): Promise<ChatSession[]> => {
  return getChatSessionsFn();
};

export const getChatSessionById = async (sessionId: string): Promise<ChatSession | null> => {
  return getChatSessionFn({ data: { sessionId } });
};

export const createChatSession = async (
  clientName: string, 
  clientCity: string = "Clearwater",
  clientEmail?: string,
  clientPhone?: string
): Promise<ChatSession> => {
  return createChatSessionFn({ data: { clientName, clientCity, clientEmail, clientPhone } });
};

export const sendChatMessage = async (sessionId: string, sender: "client" | "admin", text: string): Promise<ChatSession | null> => {
  return sendChatMessageFn({ data: { sessionId, sender, text } });
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  await markChatAsReadFn({ data: { sessionId } });
  return getChatSessionsFn();
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  await uploadLeadPhotoFn({ data: { leadId, base64Photo } });
  return getLeadsFn();
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  await removeLeadPhotoFn({ data: { leadId, photoIndex } });
  return getLeadsFn();
};

// ── GALLERY PHOTOS FUNCTIONS ──
export interface GalleryPhoto {
  id: string;
  url: string;
  uploadedAt: string;
}

export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return getGalleryPhotosFn();
};

export const uploadGalleryPhoto = async (base64Photo: string): Promise<GalleryPhoto[]> => {
  await uploadGalleryPhotoFn({ data: { base64Photo } });
  return getGalleryPhotosFn();
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  await removeGalleryPhotoFn({ data: { id } });
  return getGalleryPhotosFn();
};

// Analytics calculator helper
export const getAnalyticsData = () => {
  const leads = getLeads(); // Note: This remains synchronous in local usage, if this needs to be async, adjust usage site
  const reviews = getReviews();

  const totalValue = leads.reduce((acc, curr) => curr.status !== "lost" ? acc + curr.estimatedValue : acc, 0);
  const activeCount = leads.filter(l => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length;
  
  const wonLeads = leads.filter(l => l.status === "won");
  const lostLeads = leads.filter(l => l.status === "lost");
  const wonValue = wonLeads.reduce((acc, curr) => acc + curr.estimatedValue, 0);
  const totalClosed = wonLeads.length + lostLeads.length;
  const winRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;
  
  const averageValue = leads.length > 0 ? Math.round(leads.reduce((acc, curr) => acc + curr.estimatedValue, 0) / leads.length) : 0;

  // 1. Project type distribution
  const typeCounts: Record<string, { count: number; value: number }> = {};
  leads.forEach(l => {
    if (!typeCounts[l.projectType]) {
      typeCounts[l.projectType] = { count: 0, value: 0 };
    }
    typeCounts[l.projectType].count += 1;
    typeCounts[l.projectType].value += l.estimatedValue;
  });

  const projectTypesChart = Object.entries(typeCounts).map(([name, data]) => ({
    name: name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    value: data.count,
    amount: data.value
  }));

  // 2. Status distribution
  const statusLabels: Record<Lead["status"], string> = {
    new: "New Lead",
    contacted: "Contacted",
    consultation_scheduled: "Consultation Scheduled",
    proposal_sent: "Proposal Sent",
    won: "Contract Won",
    lost: "Lost / Closed"
  };

  const statusCounts: Record<string, number> = {
    "New Lead": 0,
    "Contacted": 0,
    "Consultation Scheduled": 0,
    "Proposal Sent": 0,
    "Contract Won": 0,
    "Lost / Closed": 0
  };

  leads.forEach(l => {
    const label = statusLabels[l.status];
    statusCounts[label] = (statusCounts[label] || 0) + 1;
  });

  const statusChart = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value
  }));

  // 3. Regional distribution (cities)
  const cityCounts: Record<string, number> = {};
  leads.forEach(l => {
    // extract city from address: "..., <City>, TX ..."
    const parts = l.address.split(",");
    let city = "Clearwater";
    if (parts.length >= 2) {
      const cityPart = parts[parts.length - 2].trim();
      city = cityPart;
    }
    cityCounts[city] = (cityCounts[city] || 0) + 1;
  });

  const regionChart = Object.entries(cityCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // 4. Growth monthly timeline (mocking historical progression based on createdAt)
  // Let's bucket leads by month
  const monthlyData: Record<string, { count: number; value: number }> = {
    "Jan": { count: 4, value: 54000 },
    "Feb": { count: 6, value: 89000 },
    "Mar": { count: 8, value: 145000 },
    "Apr": { count: 9, value: 110000 },
    "May": { count: 12, value: 240000 },
    "Jun": { count: 0, value: 0 } // June leads will be populated dynamically from leads
  };

  leads.forEach(l => {
    const date = new Date(l.createdAt);
    const month = date.toLocaleString("en-US", { month: "short" });
    if (monthlyData[month]) {
      monthlyData[month].count += 1;
      monthlyData[month].value += l.estimatedValue;
    } else {
      // In case date is outside above, initialize
      monthlyData[month] = { count: 1, value: l.estimatedValue };
    }
  });

  const timelineChart = Object.entries(monthlyData).map(([month, data]) => ({
    name: month,
    leads: data.count,
    revenue: data.value
  }));

  return {
    totalValue,
    activeCount,
    winRate,
    wonValue,
    averageValue,
    totalLeads: leads.length,
    projectTypesChart,
    statusChart,
    regionChart,
    timelineChart
  };
};

// ── NEW CHAT DATA TYPES ──
export interface ChatMessage {
  id: string;
  sender: "client" | "admin";
  text: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  clientName: string;
  clientCity: string;
  clientEmail?: string;
  clientPhone?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  messages: ChatMessage[];
}

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: "session-1",
    clientName: "David Miller",
    clientCity: "St. Petersburg",
    lastMessage: "Hi Ronnie, when can you come out to estimate the outdoor kitchen?",
    lastMessageTime: new Date(Date.now() - 3600000 * 2).toISOString(),
    unread: true,
    messages: [
      {
        id: "msg-1",
        sender: "client",
        text: "Hi, I'm interested in an outdoor kitchen for my pool area.",
        timestamp: new Date(Date.now() - 3600000 * 2.2).toISOString()
      },
      {
        id: "msg-2",
        sender: "admin",
        text: "Hi David! I'd love to help. We do complete custom flagstone and granite outdoor kitchens. Do you have a rough size in mind?",
        timestamp: new Date(Date.now() - 3600000 * 2.1).toISOString()
      },
      {
        id: "msg-3",
        sender: "client",
        text: "Yes, about 12 feet long. Hi Ronnie, when can you come out to estimate the outdoor kitchen?",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
      }
    ]
  },
  {
    id: "session-2",
    clientName: "Anonymous Visitor",
    clientCity: "Largo",
    lastMessage: "Sounds good, thanks!",
    lastMessageTime: new Date(Date.now() - 3600000 * 5).toISOString(),
    unread: false,
    messages: [
      {
        id: "msg-4",
        sender: "client",
        text: "Do you serve the Largo area for turf installations?",
        timestamp: new Date(Date.now() - 3600000 * 5.2).toISOString()
      },
      {
        id: "msg-5",
        sender: "admin",
        text: "Yes we do! We serve Largo, Comfort, and all surrounding areas. Our artificial turf includes a premium 15-year warranty.",
        timestamp: new Date(Date.now() - 3600000 * 5.1).toISOString()
      },
      {
        id: "msg-6",
        sender: "client",
        text: "Sounds good, thanks!",
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString()
      }
    ]
  }
];

// Synchronous helpers removed, replaced by async exports above.

export const getWebEmails = async (): Promise<WebEmail[]> => {
  return getWebEmailsFn();
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  return addWebEmailFn({ data: emailData });
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  await deleteWebEmailFn({ data: { id } });
  return getWebEmailsFn();
};

export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token: string }> => {
  return loginAdminFn({ data: { username, password } });
};

export const verifyAdminToken = async (token: string): Promise<{ valid: boolean; id?: string; username?: string; role?: string }> => {
  return verifyAdminTokenFn({ data: { token } });
};

export interface PortalUser {
  id: string;
  username: string;
  role: string;
}

export const updateUserCredentials = async (userId: string, username?: string, password?: string): Promise<{ success: boolean; username: string }> => {
  return updateUserCredentialsFn({ data: { userId, username, password } });
};

export const getPortalUsers = async (): Promise<PortalUser[]> => {
  return getPortalUsersFn();
};

export const createPortalUser = async (username: string, password: string, role: string): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  return createPortalUserFn({ data: { username, password, role } });
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  return deletePortalUserFn({ data: { userId } });
};
