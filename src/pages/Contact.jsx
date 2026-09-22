import { useState } from "react";
import { site } from "../data/content.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", date: "", city: "", message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Hi Dancing Roamer! I'd like to enquire about choreography.`,
      form.name && `Name: ${form.name}`,
      form.date && `Wedding date: ${form.date}`,
      form.city && `City/Venue: ${form.city}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/919861001708?text=${text}`, "_blank", "noreferrer");
  }

  return (
    <>
      <section className="section contact-hero">
        <div className="container">
          <span className="eyebrow">Let&rsquo;s Talk</span>
          <h1>Plan your choreography with Dancing Roamer</h1>
          <p>
            Share a few details below — it opens a WhatsApp chat with {site.founderName}, pre-filled with
            what you tell us. Prefer to call or email instead? Details are alongside.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your name
              <input type="text" required value={form.name} onChange={update("name")} placeholder="Priya & Arjun" />
            </label>
            <label>
              Wedding date
              <input type="text" value={form.date} onChange={update("date")} placeholder="e.g. 14 Feb 2026" />
            </label>
            <label>
              City / venue
              <input type="text" value={form.city} onChange={update("city")} placeholder="e.g. Bhubaneswar" />
            </label>
            <label>
              Tell us about your celebration
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Sangeet for ~40 people, two family dances, one couple dance..."
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Continue on WhatsApp
            </button>
          </form>

          <aside className="contact-card">
            <h3>Reach us directly</h3>
            <ul>
              <li>
                <span className="contact-card__label">Phone / WhatsApp</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <span className="contact-card__label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span className="contact-card__label">Based in</span>
                <span>{site.city}</span>
              </li>
              <li>
                <span className="contact-card__label">Instagram</span>
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--ghost contact-card__cta">
              Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
