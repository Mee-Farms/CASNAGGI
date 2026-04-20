import React, { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { ORG } from "../data/content";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        lede="Whether you're a funder, a partner, a journalist, or a volunteer—our team reads every message. Tell us how you'd like to engage."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 md:py-24" data-testid="contact-section">
        <div className="container-x grid md:grid-cols-12 gap-10 items-start">
          {/* Info column */}
          <Reveal className="md:col-span-5 space-y-10">
            <div>
              <p className="overline">Visit us</p>
              <div className="mt-4 flex items-start gap-4 text-lg">
                <MapPin className="h-5 w-5 mt-1 text-brand-terracotta flex-shrink-0" />
                <span className="font-display">{ORG.address}</span>
              </div>
            </div>
            <div>
              <p className="overline">Call</p>
              <a
                href={`tel:${ORG.phone}`}
                className="mt-4 flex items-start gap-4 text-lg hover:text-brand-terracotta transition"
                data-testid="contact-phone"
              >
                <Phone className="h-5 w-5 mt-1 text-brand-terracotta flex-shrink-0" />
                <span className="font-display">{ORG.phone}</span>
              </a>
            </div>
            <div>
              <p className="overline">Email</p>
              <a
                href={`mailto:${ORG.email}`}
                className="mt-4 flex items-start gap-4 text-lg break-all hover:text-brand-terracotta transition"
                data-testid="contact-email"
              >
                <Mail className="h-5 w-5 mt-1 text-brand-terracotta flex-shrink-0" />
                <span className="font-display">{ORG.email}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-brand-rule">
              <p className="overline">Follow the movement</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {ORG.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="px-4 py-2 text-xs uppercase tracking-[0.2em] rounded-full border border-brand-rule hover:border-brand-terracotta hover:text-brand-terracotta transition"
                    data-testid={`contact-social-${s.label.toLowerCase()}`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              className="card-tactile"
              data-testid="contact-form"
            >
              <h3 className="font-display text-2xl md:text-3xl font-medium">
                Send us a message
              </h3>
              <p className="mt-3 text-brand-ink/70">
                We'll respond within 2 business days.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <label className="overline text-brand-mute">First name</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                    data-testid="contact-first-name"
                  />
                </div>
                <div>
                  <label className="overline text-brand-mute">Last name</label>
                  <input
                    type="text"
                    className="mt-2 w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                    data-testid="contact-last-name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="overline text-brand-mute">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <label className="overline text-brand-mute">Phone</label>
                  <input
                    type="tel"
                    className="mt-2 w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                    data-testid="contact-phone-input"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="overline text-brand-mute">I'm reaching out as a…</label>
                <select
                  className="mt-2 w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition appearance-none"
                  data-testid="contact-role"
                >
                  <option>Donor / funder</option>
                  <option>Partner organization</option>
                  <option>Volunteer</option>
                  <option>Media / journalist</option>
                  <option>Community member</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="overline text-brand-mute">Your message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full px-5 py-4 rounded-2xl border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition resize-none"
                  data-testid="contact-message"
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6"
                data-testid="contact-submit"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    Send message <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
