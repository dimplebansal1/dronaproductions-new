"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function QueryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Automatically open the popup on desktop screens when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 && window.scrollY > 30) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query Form Submitted Data:", formData);
    // Simulate API request
    setIsSubmitted(true);
    setTimeout(() => {
      // Reset form
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Floating Pill Button */}
      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full border border-gold-soft/50 bg-charcoal/95 px-6 py-3.5 text-xs sm:px-5 sm:py-3 sm:text-[0.72rem] font-bold uppercase tracking-[0.15em] text-gold-soft shadow-[0_4px_20px_rgba(212,175,55,0.15),0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold-soft hover:text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,175,55,0.28),0_12px_45px_rgba(0,0,0,0.9)] pointer-events-auto translate-y-0 opacity-100"
      >
        <MessageSquare size={14} className="animate-pulse" />
        <span>Any Query?</span>
      </button>

      {/* Modal Popup */}
      <div className={`fixed left-4 right-4 top-1/2 max-h-[85vh] sm:left-auto sm:right-4 sm:top-auto sm:bottom-18 sm:w-96 sm:max-h-[calc(100vh-6rem)] z-50 flex flex-col overflow-hidden rounded-sm border border-line bg-gradient-to-b from-charcoal/98 to-ink/98 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl popup-transition ${
        isOpen
          ? "opacity-100 [transform:perspective(1000px)_translateY(-50%)_scale(1)_rotateX(0deg)] sm:[transform:perspective(1000px)_translateY(0)_scale(1)_rotateX(0deg)] pointer-events-auto visible"
          : "opacity-0 [transform:perspective(1000px)_translateY(-40%)_scale(0.95)_rotateX(-12deg)] sm:[transform:perspective(1000px)_translateY(24px)_scale(0.95)_rotateX(-12deg)] pointer-events-none invisible"
      }`}>
          {/* Header Close Button */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 text-ash hover:text-gold-soft transition-colors duration-300"
            aria-label="Close form"
          >
            <X size={20} />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-y-auto p-5 sm:p-6 md:p-8">

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold-soft mb-6">
                <Send size={20} className="animate-bounce" />
              </div>
              <h3 className="font-display text-2xl font-medium text-fog">
                Thank You!
              </h3>
              <p className="mt-3 text-sm text-ash max-w-xs leading-relaxed">
                We have received your requirement. Our representative will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Header */}
              <div className="text-center pb-2">
                <h3 className="font-display text-2xl font-medium leading-tight text-fog">
                  Share Your <br />
                  <span className="text-gold-gradient font-semibold">Requirement</span>
                </h3>
              </div>

              {/* Fields */}
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink/50 px-4 py-3 text-sm text-fog placeholder-ash/40 outline-none focus:border-gold/40 focus:bg-ink/75 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink/50 px-4 py-3 text-sm text-fog placeholder-ash/40 outline-none focus:border-gold/40 focus:bg-ink/75 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink/50 px-4 py-3 text-sm text-fog placeholder-ash/40 outline-none focus:border-gold/40 focus:bg-ink/75 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (Optional)"
                    value={formData.phone}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, "");
                      setFormData((prev) => ({ ...prev, phone: onlyDigits }));
                    }}
                    className="w-full rounded-sm border border-line bg-ink/50 px-4 py-3 text-sm text-fog placeholder-ash/40 outline-none focus:border-gold/40 focus:bg-ink/75 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink/50 px-4 py-3 text-sm text-fog placeholder-ash/40 outline-none focus:border-gold/40 focus:bg-ink/75 transition-all duration-300 h-24 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-gold w-full py-3 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                Lets Talk
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
