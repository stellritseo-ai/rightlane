import { useState, useEffect } from "react";
import { useTranslation } from "@/context/translation-context";
import { X, ZoomIn } from "lucide-react";
import faqPavilion from "@/assets/faq-pavilion.jpg";
import heroPatio from "@/assets/hero-patio.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";
import svcArtificialTurf from "@/assets/svc-artificial-turf.jpg";
import svcFencing from "@/assets/svc-fencing.jpg";
import svcFireplace from "@/assets/svc-fireplace.jpg";
import svcHardscapes from "@/assets/svc-hardscapes.jpg";
import svcHouseRemodeling from "@/assets/svc-house-remodeling.jpg";
import svcNewConstruction from "@/assets/svc-new-construction.jpg";
import svcOutdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import svcSoftscapes from "@/assets/svc-softscapes.jpg";
import welcomePavilion from "@/assets/welcome-pavilion.jpg";
import welcomePool from "@/assets/welcome-pool.jpg";

import { getGalleryPhotos } from "@/lib/leads-store";

const DEFAULT_PHOTOS = [
  svcOutdoorKitchens,
  welcomePavilion,
  svcOutdoorKitchens,
  faqPavilion,
  welcomePavilion,
  welcomePool,
  welcomePool,
  heroPatio,
  statsJobsite,
  svcSoftscapes,
  svcArtificialTurf,
  svcSoftscapes,
  svcHardscapes,
  svcFireplace,
  svcSoftscapes,
  svcFencing,
  svcNewConstruction,
  svcOutdoorKitchens,
  svcHouseRemodeling
];

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const photos = await getGalleryPhotos();
        if (photos && photos.length > 0) {
          setGalleryPhotos(photos.map(p => p.url));
        } else {
          setGalleryPhotos(DEFAULT_PHOTOS);
        }
      } catch (error) {
        console.error("Failed to load gallery photos from DB, falling back to defaults:", error);
        setGalleryPhotos(DEFAULT_PHOTOS);
      }
    };
    fetchGallery();
  }, []);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section id="gallery" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#2d3f26] border border-[#23321e] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none">
          {t("gallery.badge")}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-8">
          {t("gallery.title")}
        </h2>

        {/* Justified Centered Flex Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
          {galleryPhotos.slice(0, 15).map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 aspect-[4/3] w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)] min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="JRM Construction Project Detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] md:max-h-[90vh] flex items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="JRM Construction Project Detail Large View"
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}

      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
