import { useState } from "react";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { addLead, addWebEmail } from "@/lib/leads-store";
import welBg from "@/assets/wel-bg.png";

export function CTASection() {
  const { t } = useTranslation();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    try {
      await addLead({
        name,
        email,
        phone,
        address,
        projectType: service || "general",
        description: message,
        contactTime: "morning"
      });

      await addWebEmail({
        name,
        email,
        phone,
        service: service || "general",
        message: message + (address ? ` (Address: ${address})` : ""),
        source: "landing_page"
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit CTA contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-0 pt-[5px] pb-0 px-[15px]">
      <section id="contact" className="mx-auto max-w-[1400px] w-full rounded-t-[10px] rounded-b-none bg-[#2c241d] py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[150px] border border-neutral-800 shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden text-center">

        {/* Inner Card Container with textured linen background */}
        <div
          className="w-full rounded-[8px] bg-cover bg-center border border-[#eae8e1]/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative z-10 p-5 sm:p-8 md:p-10 lg:p-[40px_50px]"
          style={{ backgroundImage: "url(/src/assets/wel-bg.png)", backgroundColor: "#fbfaf7" }}
        >
          {/* Badge */}
          <div className="inline-block bg-[#3f4a1f] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-6 select-none shadow-sm">
            {t("cta.badge")}
          </div>

          {/* Title */}
          <h2
            className="text-2xl md:text-[32px] text-neutral-900 leading-tight tracking-tight"
            style={{
              marginTop: "-15px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {t("cta.title")}
          </h2>

          {/* Description */}
          <p
            className="text-neutral-700 leading-relaxed max-w-2xl mx-auto"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "22px",
            }}
          >
            {t("cta.desc")}
          </p>

          {isSubmitted ? (
            <div className="flex flex-col justify-center items-center text-center w-full py-12 space-y-4">
              <div className="bg-[#3f4a1f]/10 text-[#3f4a1f] p-4 rounded-full animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-serif">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-neutral-700 max-w-md">
                We have received your message and our team will get in touch with you within 24 hours.
              </p>
            </div>
          ) : (
            /* Contact Form */
            <form className="w-full space-y-4.5 text-left" onSubmit={handleSubmit}>

              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("cta.form.name")}
                  className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("cta.form.phone")}
                  className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                />
              </div>

              {/* Row 2: Email and Address with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("cta.form.email")}
                    className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#3f4a1f]/75" />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t("cta.form.address")}
                    className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                  />
                  <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#3f4a1f]/75" />
                </div>
              </div>

              {/* Row 3: Services select dropdown */}
              <div className="relative w-full">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>
                    {t("cta.form.services")}
                  </option>
                  <option value="landscape-design">{t("services.softscapes")}</option>
                  <option value="new-construction">{t("services.construction")}</option>
                  <option value="covered-patios">{t("services.coveredpatios")}</option>
                  <option value="outdoor-kitchens">{t("services.kitchens")}</option>
                  <option value="fireplace">{t("services.fireplace")}</option>
                  <option value="hardscapes">{t("services.hardscapes")}</option>
                  <option value="fencing">{t("services.fencing")}</option>
                  <option value="artificial-turf">{t("services.turf")}</option>
                  <option value="palm-trees">{t("services.palmtrees")}</option>
                  <option value="house-remodeling">{t("services.remodeling")}</option>
                </select>
                <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown className="h-4.5 w-4.5 text-[#3f4a1f]/75" />
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("cta.form.message")}
                className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all resize-none"
              />

              {/* Row 5: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2c241d] hover:bg-[#1a1511] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-[5px] py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer text-center disabled:opacity-75 disabled:pointer-events-none"
              >
                {isSubmitting ? "Submitting..." : t("cta.form.btn")}
              </button>

            </form>
          )}
        </div>

      </section>
    </div>
  );
}