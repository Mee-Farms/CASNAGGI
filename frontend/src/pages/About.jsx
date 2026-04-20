import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TrusteeCard from "../components/TrusteeCard";
import Seo from "../components/Seo";
import { ORG, MEDIA, TRUSTEES, ETHICS, OBJECTIVES } from "../data/content";

const About = () => {
  return (
    <>
      <Seo
        title="About CASNAGGI"
        description="Care Support for the Needy and Good Governance Initiative (CASNAGGI) — a registered Nigerian NGO (RC: 8722526) founded 21 August 2025. Meet the board, mission, vision and code of ethics."
        path="/about"
      />
      <PageHeader
        eyebrow="About CASNAGGI"
        title="A Nigerian NGO where compassion meets accountability."
        lede={`${ORG.name} is a registered non-governmental, non-profit organization founded on ${ORG.founded}. We advance human welfare while championing transparency, accountability, and good governance across Nigeria.`}
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Registration credentials strip */}
      <section className="bg-brand-sand/60 border-b border-brand-rule" data-testid="about-registration">
        <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div>
            <div className="overline text-brand-mute">Registrar</div>
            <div className="mt-1 font-display text-base text-brand-ink">{ORG.registrar}</div>
          </div>
          <div>
            <div className="overline text-brand-mute">RC Number</div>
            <div className="mt-1 font-display text-base text-brand-ink">{ORG.rc}</div>
          </div>
          <div>
            <div className="overline text-brand-mute">Registered</div>
            <div className="mt-1 font-display text-base text-brand-ink">{ORG.founded}</div>
          </div>
          <div>
            <div className="overline text-brand-mute">Head Office</div>
            <div className="mt-1 font-display text-base text-brand-ink">Bayelsa, Nigeria</div>
          </div>
        </div>
      </section>

      {/* Mission / Vision split */}
      <section className="py-20 md:py-28" data-testid="about-mission-vision">
        <div className="container-x grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <p className="overline">Our Foundation</p>
            <h2 className="display-xl mt-4 text-3xl md:text-4xl">
              Built on a dual mission.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <Reveal className="card-solid">
              <p className="overline text-brand-forest">Mission</p>
              <p className="mt-4 font-display text-2xl md:text-3xl leading-snug text-brand-ink">
                To promote care and support for vulnerable populations while
                advancing good governance, accountability, and social justice
                through advocacy, empowerment, and inclusive community
                development.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="card-solid bg-brand-forest text-white">
              <p className="overline text-brand-clay">Vision</p>
              <p className="mt-4 font-display text-2xl md:text-3xl leading-snug">
                To build a society where the needs of the vulnerable are met,
                and where transparency, equity, and good governance become the
                foundation of sustainable national development.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unveiling image band */}
      <section className="py-10" data-testid="about-unveiling">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-brand-sand">
            <img
              src={MEDIA.unveiling}
              alt="CASNAGGI Unveiling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-2 text-xs uppercase tracking-[0.22em] text-brand-mute">
            <span>CASNAGGI Unveiling · {ORG.founded}</span>
            <span>{ORG.address}</span>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section
        className="py-24 md:py-32 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="about-objectives"
      >
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="overline">Specific Objectives</p>
            <h2 className="display-xl mt-4 text-4xl md:text-5xl">
              What we commit to, every day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
            {Object.entries(OBJECTIVES).map(([key, items], idx) => (
              <Reveal key={key} delay={idx * 0.08} className="card-tactile">
                <div className="text-xs font-mono text-brand-mute">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-2xl mt-3 font-medium">
                  {key}
                </h3>
                <ul className="mt-6 space-y-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-brand-ink/75 text-sm leading-relaxed">
                      <Check className="h-5 w-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="py-24 md:py-32" data-testid="about-ethics">
        <div className="container-x grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="overline">Principal Code</p>
            <h2 className="display-xl mt-4 text-4xl md:text-5xl">
              Our Code of Ethics.
            </h2>
            <p className="mt-6 text-brand-ink/70 leading-relaxed max-w-md">
              Every trustee, staff member, volunteer, and partner is expected to
              uphold these values in all dealings with communities, institutions,
              and stakeholders.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-brand-rule">
              {ETHICS.map((e, i) => (
                <li
                  key={e.title}
                  className="py-6 group"
                  data-testid={`ethic-${i}`}
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-sm text-brand-mute pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl group-hover:text-brand-terracotta transition">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-brand-ink/70 text-sm leading-relaxed">
                        {e.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Board of Directors / Trustees — expanded */}
      <section
        className="py-24 md:py-32 bg-brand-ink text-white"
        data-testid="about-trustees"
      >
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-8">
              <p className="overline text-brand-clay">Board of Directors & Trustees</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl text-white">
                The people behind the mission.
              </h2>
              <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
                CASNAGGI is governed by a Board of Trustees responsible for
                strategic oversight, accountability and compliance with statutory
                regulations.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right text-xs uppercase tracking-[0.22em] text-white/50">
              5 Directors · 3 States · 2 Continents
            </div>
          </div>

          {/* First row: CEO + Chairman large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {TRUSTEES.slice(0, 2).map((t, i) => (
              <TrusteeCard key={t.name} trustee={t} index={i} variant="hero" />
            ))}
          </div>

          {/* Second row: 3 directors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-10">
            {TRUSTEES.slice(2).map((t, i) => (
              <TrusteeCard
                key={t.name}
                trustee={t}
                index={i + 2}
                variant="small"
              />
            ))}
          </div>

          <div className="mt-16">
            <Link to="/get-involved" className="btn-primary" data-testid="about-join-btn">
              Join Our Mission <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
