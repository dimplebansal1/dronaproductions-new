"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { COMPANY, EVENT_TYPES } from "@/lib/data";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  location: "",
  requirement: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Enquiry — ${form.eventType || "Event"}${
      form.name ? ` from ${form.name}` : ""
    }`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Event Type: ${form.eventType}`,
      `Event Date: ${form.eventDate}`,
      `Location: ${form.location}`,
      "",
      "Requirement:",
      form.requirement,
    ].join("\n");

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-sm border border-line bg-ink/60 px-4 py-3 text-sm text-fog placeholder:text-slate transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";
  const label =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-ash";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gold/30 bg-gold/5 p-12 text-center">
        <CheckCircle2 className="text-gold-soft" size={44} />
        <h3 className="font-display mt-5 text-2xl text-fog">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-md text-sm text-ash">
          Your email draft is ready to send. Our team will get back to you
          shortly. You can also reach us directly at{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-gold-soft underline-offset-4 hover:underline"
          >
            {COMPANY.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setSent(false);
          }}
          className="btn btn-outline mt-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-line bg-charcoal p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="eventType">
            Event Type
          </label>
          <select
            id="eventType"
            required
            value={form.eventType}
            onChange={update("eventType")}
            className={field}
          >
            <option value="" disabled>
              Select event type
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="eventDate">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={form.eventDate}
            onChange={update("eventDate")}
            className={`${field} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label className={label} htmlFor="location">
            Location
          </label>
          <input
            id="location"
            value={form.location}
            onChange={update("location")}
            placeholder="City / Venue"
            className={field}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="requirement">
          Requirement
        </label>
        <textarea
          id="requirement"
          rows={5}
          value={form.requirement}
          onChange={update("requirement")}
          placeholder="Tell us about your event, guest count, and what you need..."
          className={`${field} resize-none`}
        />
      </div>

      <button type="submit" className="btn btn-gold mt-6 w-full sm:w-auto">
        Send Enquiry <Send size={16} />
      </button>
      <p className="mt-4 text-xs text-slate">
        Prefer email? Write to us at{" "}
        <a
          href={`mailto:${COMPANY.email}`}
          className="text-gold-soft underline-offset-4 hover:underline"
        >
          {COMPANY.email}
        </a>
      </p>
    </form>
  );
}
