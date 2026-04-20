import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Quote, Target } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { IMPACT_STATS, MEDIA, STRATEGIC_PLAN, PROJECTED_2035 } from "../data/content";

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
      <Seo
        title="Our Impact & 10-Year Roadmap"
        description="CASNAGGI's 2025 impact: 5,000+ lives touched, 1,200 food packs, 650 medical beneficiaries, 15,000 reached. Plus our Strategic Action Plan 2025–2035 and targets for 2035."
        path="/impact"
      />
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

      {/* Strategic Plan 2025–2035 */}
      <section
        className="py-24 md:py-32 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="strategic-plan"
      >
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-8">
              <p className="overline">Strategic Action Plan · 2025–2035</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl">
                A decade, <span className="italic font-light text-brand-terracotta">mapped.</span>
              </h2>
              <p className="mt-6 text-brand-ink/70 leading-relaxed max-w-2xl">
                CASNAGGI's 10-year roadmap — from foundation to nationwide scale.
                Three phases, five strategic goals, one Nigeria.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right text-xs uppercase tracking-[0.22em] text-brand-mute">
              Mid-term eval 2030 · Final eval 2035
            </div>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-brand-rule" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
              {STRATEGIC_PLAN.map((phase, i) => (
                <Reveal
                  key={phase.phase}
                  delay={i * 0.1}
                  className="relative"
                  data-testid={`strategic-phase-${i}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-brand-terracotta text-white flex items-center justify-center font-display text-lg font-semibold relative z-10">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="overline">{phase.phase}</div>
                      <div className="font-display text-2xl font-medium mt-1">
                        {phase.label}
                      </div>
                    </div>
                  </div>

                  <div className="card-tactile">
                    <ul className="space-y-4">
                      {phase.goals.map((g, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-brand-ink/80 text-sm leading-relaxed"
                        >
                          <Check className="h-5 w-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projected 2035 — big number block */}
      <section
        className="relative py-24 md:py-32 bg-brand-terracotta text-white overflow-hidden"
        data-testid="projected-2035"
      >
        <div className="container-x relative">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
              <p className="overline text-white/80">By 2035</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl text-white">
                Where we're<br />
                <span className="italic font-light">headed.</span>
              </h2>
              <p className="mt-6 text-white/85 max-w-sm leading-relaxed">
                Our 10-year impact ambitions — the targets we are publicly
                committing to, so our donors, partners and communities can hold
                us accountable.
              </p>
            </div>

            <div className="md:col-span-7">
              <ul className="divide-y divide-white/15">
                {PROJECTED_2035.map((t, i) => (
                  <Reveal
                    key={i}
                    delay={i * 0.06}
                    as="li"
                    className="py-6 flex items-start gap-6"
                    data-testid={`projected-${i}`}
                  >
                    <span className="font-mono text-sm text-white/60 pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex items-start justify-between gap-4">
                      <span className="font-display text-xl md:text-2xl leading-snug">
                        {t}
                      </span>
                      <Target className="h-6 w-6 text-white/60 flex-shrink-0 mt-1" />
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-terracotta font-medium hover:bg-brand-ink hover:text-white transition-all duration-300"
                  data-testid="projected-donate-btn"
                >
                  Fund the roadmap <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-all duration-300"
                  data-testid="projected-partner-btn"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
