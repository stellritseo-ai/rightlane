import { useState } from "react";
import { useTranslation } from "@/context/translation-context";
import { X } from "lucide-react";
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

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const row1 = [
    svcOutdoorKitchens,
    welcomePavilion,
    svcOutdoorKitchens,
    faqPavilion,
    welcomePavilion,
    welcomePool,
  ];

  const row2 = [
    welcomePool,
    heroPatio,
    statsJobsite,
    svcSoftscapes,
    svcArtificialTurf,
    svcSoftscapes,
    svcHardscapes,
  ];

  const row3 = [
    svcFireplace,
    svcSoftscapes,
    svcFencing,
    svcNewConstruction,
    svcOutdoorKitchens,
    svcHouseRemodeling,
  ];

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#2d3f26] border border-[#23321e] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none">
          {t("gallery.badge")}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-8">
          {t("gallery.title")}
        </h2>

        {/* Justified Grid Rows */}
        <div className="w-full flex flex-col gap-2">
          {/* Row 1: 6 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
            {row1.map((img, idx) => (
              <div
                key={`row1-${idx}`}
                className="overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="JRM Construction Project Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 7 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
            {row2.map((img, idx) => (
              <div
                key={`row2-${idx}`}
                className="overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="JRM Construction Project Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 3: 6 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
            {row3.map((img, idx) => (
              <div
                key={`row3-${idx}`}
                className="overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="JRM Construction Project Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
