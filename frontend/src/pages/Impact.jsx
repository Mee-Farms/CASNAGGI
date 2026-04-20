import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { IMPACT_STATS, MEDIA } from "../data/content";

const STORIES = [
  {
    title: "Clean water returns to Bayelsa villages",
    excerpt:
      "Three riverside communities in Bayelsa now have direct access to safe water, cutting waterborne illness and freeing women from 4-hour daily treks.",
    tag: "Humanitarian Care",
    image: MEDIA.humanitarian,
  },
  {
    title: "Young women launch first cohort of digital entrepreneurs",
    excerpt:
      "A 12-week ICT and entrepreneurship bootcamp graduated 48 young women, 21 of whom have already launched income-generating micro-businesses.",
    tag: "Youth Empowerment",
    image: MEDIA.story,
  },
  {
    title: "Civic accountability forums reach 3 states",
    excerpt:
      "Constituents and legislators meet face-to-face at quarterly town halls co-hosted by CASNAGGI—driving an open conversation about service delivery.",
    tag: "Good Governance",
    image: MEDIA.governance,
  },
];

const TIMELINE = [
  {
    date: "Aug 2025",
    title: "CASNAGGI founded",
    body: "Organization registered as an NGO with a dual humanitarian + governance mandate.",
  },
  {
    date: "Sep 2025",
    title: "Grassroots partnerships",
    body: "First 18 community-based partners onboarded across Nigeria's South-South and South-East.",
  },
  {
    date: "Nov 2025",
    title: "First humanitarian drive",
    body: "Food, clothing and hygiene kits distributed to 600 households in Bayelsa State.",
  },
  {
    date: "Dec 2025",
    title: "Public unveiling",
    body: "National unveiling event introducing the Board of Trustees and 2026 strategy.",
  },
];

const Impact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Impact · 2025"
        title="A young movement. Real momentum."
        lede="Although CASNAGGI was only established in August 2025, the organization has already laid a strong foundation for long-term impact by combining humanitarian support with civic engagement."
        breadcrumbs={[{ label: "Impact" }]}
      />

      {/* Stats bento */}
      <section className="py-20" data-testid="impact-stats-section">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMPACT_STATS.map((s, i) => {
            const palette = [
              "bg-brand-terracotta text-white",
              "bg-brand-forest text-white",
              "bg-brand-sand text-brand-ink",
              "bg-brand-ink text-white",
            ];
            return (
              <Reveal
                key={i}
                delay={i * 0.08}
                className={`rounded-2xl p-8 md:p-10 ${palette[i]}`}
                data-testid={`impact-stat-${i}`}
              >
                <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-4 opacity-80 text-sm leading-snug">
                  {s.label}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section
        className="py-24 md:py-32 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="success-stories"
      >
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="overline">Success Stories</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl">
                Stories from the field.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {STORIES.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="card-tactile h-full flex flex-col" data-testid={`story-${i}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden -mx-2 -mt-2 mb-6">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="overline">{s.tag}</p>
                  <h3 className="font-display text-xl md:text-2xl mt-3 font-medium leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-brand-ink/70 text-sm leading-relaxed flex-1">
                    {s.excerpt}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 md:py-32" data-testid="impact-quote">
        <div className="container-x max-w-4xl">
          <Quote className="h-12 w-12 text-brand-terracotta" />
          <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight mt-6">
            "Within a few months, CASNAGGI combined humanitarian relief with
            civic engagement—<span className="text-brand-terracotta">laying a foundation</span> that
            most NGOs take years to build."
          </blockquote>
          <div className="mt-8 text-sm text-brand-mute uppercase tracking-[0.22em]">
            — 2025 Annual Review
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24 md:py-32 bg-brand-ink text-white"
        data-testid="timeline"
      >
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="overline text-brand-clay">Timeline</p>
            <h2 className="display-xl mt-4 text-4xl md:text-5xl text-white">
              Our first six months.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {TIMELINE.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="relative pl-0 md:pl-0"
                data-testid={`timeline-${i}`}
              >
                <div className="h-px w-full bg-brand-terracotta mb-6" />
                <div className="overline text-brand-clay">{t.date}</div>
                <h3 className="font-display text-xl md:text-2xl mt-4 font-medium">
                  {t.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {t.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Link to="/donate" className="btn-primary" data-testid="impact-donate-btn">
              Power the next chapter <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
