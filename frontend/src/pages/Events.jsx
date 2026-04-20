import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { EVENTS } from "../data/content";

const Events = () => {
  const categories = useMemo(() => {
    const set = new Set(EVENTS.map((e) => e.category));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  const featured = EVENTS[0];
  const showFeatured = filter === "All";

  return (
    <>
      <PageHeader
        eyebrow="Events & Outreaches"
        title="Field reports from the front line."
        lede="Every outreach, every community dialogue, every training — documented and shared. Browse CASNAGGI's humanitarian events and governance activities."
        breadcrumbs={[{ label: "Events" }]}
      />

      {/* Filter chips */}
      <section className="py-12" data-testid="events-filters">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all ${
                  filter === c
                    ? "bg-brand-ink text-white border border-brand-ink"
                    : "border border-brand-rule hover:bg-brand-sand hover:border-brand-clay"
                }`}
                data-testid={`events-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured event */}
      {showFeatured && (
        <section className="pb-20" data-testid="events-featured">
          <div className="container-x">
            <Reveal>
              <Link
                to={`/events/${featured.slug}`}
                className="grid md:grid-cols-12 gap-8 items-center group"
                data-testid="events-featured-link"
              >
                <div className="md:col-span-7">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-brand-terracotta text-white text-xs uppercase tracking-[0.2em]">
                      Latest · {featured.dateLabel}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="overline">{featured.category}</p>
                  <h2 className="display-xl mt-4 text-3xl md:text-4xl lg:text-5xl group-hover:text-brand-terracotta transition-colors">
                    {featured.title}
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-brand-mute">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-terracotta" />
                      {featured.dateLabel}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-terracotta" />
                      {featured.location}
                    </span>
                  </div>
                  <p className="mt-6 text-lg text-brand-ink/75 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-brand-sand text-xs text-brand-ink/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-brand-terracotta font-medium">
                    Read the field report <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Events grid */}
      <section
        className="py-16 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="events-grid"
      >
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="overline">Archive</p>
              <h2 className="display-xl mt-4 text-3xl md:text-4xl">
                {filter === "All" ? "All events" : filter}
              </h2>
            </div>
            <span className="text-sm text-brand-mute">
              {filtered.length} {filtered.length === 1 ? "event" : "events"} posted
            </span>
          </div>

          {(showFeatured ? filtered.slice(1) : filtered).length === 0 ? (
            <p className="text-brand-mute">No events in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {(showFeatured ? filtered.slice(1) : filtered).map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.05}>
                  <Link
                    to={`/events/${e.slug}`}
                    className="card-tactile h-full flex flex-col group"
                    data-testid={`event-${e.slug}`}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden -mx-2 -mt-2 mb-6">
                      <img
                        src={e.image}
                        alt={e.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-brand-ink">
                        {e.dateLabel}
                      </div>
                    </div>
                    <p className="overline">{e.category}</p>
                    <h3 className="font-display text-xl md:text-2xl mt-3 font-medium leading-snug group-hover:text-brand-terracotta transition-colors">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-brand-ink/70 text-sm leading-relaxed flex-1">
                      {e.excerpt}
                    </p>
                    <div className="mt-5 pt-5 border-t border-brand-rule flex items-center justify-between text-xs text-brand-mute">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" />
                        {e.location}
                      </span>
                      <span className="flex items-center gap-1 text-brand-terracotta">
                        Read report <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit-an-event CTA */}
      <section className="py-24" data-testid="events-cta">
        <div className="container-x grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="overline">Want to host a CASNAGGI outreach?</p>
            <h2 className="display-xl mt-4 text-3xl md:text-4xl lg:text-5xl">
              Partner with us on the next community event.
            </h2>
          </div>
          <div className="md:col-span-4 flex gap-3 md:justify-end">
            <Link to="/contact" className="btn-primary" data-testid="events-contact-btn">
              Propose a partnership <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
