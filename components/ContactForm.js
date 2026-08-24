"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    requirement: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        location: "",
        requirement: ""
      });
    }, 1200);
  };

  const eventTypes = [
    "Weddings",
    "Social & Private Events",
    "Government Events",
    "Concerts & Live Shows",
    "Conferences & Exhibitions"
  ];

  return (
    <section id="contact" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-gold/80" />
            <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
              Partner With Drona
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
            Get a Quote
          </h2>
          <div className="h-1 w-20 bg-gold mt-6 mx-auto mb-4" />
          <p className="text-zinc-500 text-xs font-light max-w-lg mx-auto">
            Tell us about your event. Our team will review your requirements and reach out 
            with a technical specification proposal.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-950/40 border border-zinc-900/80 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative glowing accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full filter blur-[70px] pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl">✓</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-light tracking-tight mb-3">
                Inquiry Received
              </h3>
              <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-sm mx-auto mb-8">
                Thank you for contacting Drona Productions. Our events production team will contact 
                you shortly at the email/phone provided.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="border border-zinc-800 hover:border-gold hover:text-gold text-zinc-400 transition-all duration-300 text-xs font-bold tracking-[0.15em] px-6 py-3 rounded-none uppercase"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    placeholder="Enter your name"
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white placeholder-zinc-700 text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    placeholder="Enter phone number"
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white placeholder-zinc-700 text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    placeholder="Enter email address"
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white placeholder-zinc-700 text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  />
                </div>

                {/* Event Type */}
                <div className="flex flex-col">
                  <label htmlFor="eventType" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  >
                    <option value="" disabled className="text-zinc-800">Select Event Category</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-black text-white">{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Date */}
                <div className="flex flex-col">
                  <label htmlFor="eventDate" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col">
                  <label htmlFor="location" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    suppressHydrationWarning={true}
                    placeholder="City, State or Venue"
                    className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white placeholder-zinc-700 text-xs p-3.5 outline-none transition-all duration-300 rounded-none"
                  />
                </div>
              </div>

              {/* Requirement */}
              <div className="flex flex-col">
                <label htmlFor="requirement" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">
                  Requirement Summary *
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  required
                  rows={4}
                  value={formData.requirement}
                  onChange={handleChange}
                  suppressHydrationWarning={true}
                  placeholder="Detail your event plans (scale, audio-video needs, staging, artists booking...)"
                  className="bg-black border border-zinc-850 focus:border-gold focus:ring-1 focus:ring-gold/30 text-white placeholder-zinc-700 text-xs p-3.5 outline-none transition-all duration-300 rounded-none resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning={true}
                className="w-full bg-gold hover:bg-gold-hover disabled:bg-zinc-800 disabled:text-zinc-600 text-black transition-all duration-300 text-[13px] font-semibold tracking-[0.12em] py-3.5 rounded-none uppercase"
              >
                {isSubmitting ? "Submitting specifications..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
        
        {/* Fast Contact details */}
        <div className="mt-8 flex justify-center text-center">
          <p className="text-zinc-500 text-xs font-light">
            Prefer direct channels? Email us at{" "}
            <a href="mailto:info@dronaproductions.in" className="text-gold hover:underline font-semibold">
              info@dronaproductions.in
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}


