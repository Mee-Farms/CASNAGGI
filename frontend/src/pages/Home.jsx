import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  ArrowUpRight,
  HeartHandshake,
  GraduationCap,
  Users,
  Scale,
  Sprout,
  Shield,
  Star,
  Briefcase,
} from "lucide-react";
import Reveal from "../components/Reveal";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";
import {
  MEDIA,
  CORE_VALUES,
  PROGRAMS,
  IMPACT_STATS,
  TRUSTEES,
} from "../data/content";

const programIcons = {
  "humanitarian-care": HeartHandshake,
  "youth-empowerment": GraduationCap,
  "women-empowerment": Users,
  "good-governance": Scale,
  "public-service": Briefcase,
  peacebuilding: Shield,
  "community-development": Sprout,
};

const Home = () => {
  return (
    <>
      <Seo
        title="Compassion meets Governance"
        description="CASNAGGI — a registered Nigerian NGO empowering vulnerable communities and championing good governance across Nigeria. Real impact: 5,000+ lives reached in 2025."
        path="/"
      />
      <HeroCarousel />

      {/* ------------ VALUES MARQUEE ------------ */}
      <section
        className="bg-brand-sand border-y border-brand-rule py-6"
        data-testid="values-marquee"
      >
        <Marquee speed={40} gradient={false} pauseOnHover>
          {CORE_VALUES.concat(CORE_VALUES).map((v, i) => (
            <span
              key={i}
              className="mx-10 font-display text-2xl md:text-3xl tracking-tight text-brand-forest"
            >
              {v.title}
              <span className="mx-10 text-brand-terracotta">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ------------ MISSION BENTO ------------ */}
      <section
        className="py-24 md:py-32"
        data-testid="mission-section"
      >
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <Reveal className="md:col-span-7">
            <p className="overline">Our Mission</p>
            <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl">
              We care for the vulnerable, and we hold power accountable.
            </h2>
            <p className="mt-8 text-lg md:text-xl text-brand-ink/75 leading-relaxed max-w-2xl">
              CASNAGGI is a registered Nigerian non-governmental, non-profit
              organization committed to advancing human welfare while promoting
              the principles of transparency, accountability, and good
              governance.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <Link
                to="/about"
                className="btn-secondary"
                data-testid="mission-about-btn"
              >
                About CASNAGGI <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="btn-outline"
                data-testid="mission-programs-btn"
              >
                Our Programs
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5">
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden">
              <img
                src={MEDIA.publicService}
                alt="Hand planting a sapling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="overline text-brand-clay">Our Vision</p>
                <p className="mt-3 font-display text-2xl leading-tight">
                  A Nigeria where the needs of the vulnerable are met, and
                  transparency becomes the foundation of sustainable national
                  development.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------ CORE VALUES GRID ------------ */}
      <section
        className="py-24 md:py-32 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="values-section"
      >
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="overline">What guides us</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                Six values. One Nigeria.
              </h2>
            </div>
            <p className="max-w-sm text-brand-ink/70">
              Every partnership, program and policy we touch is shaped by these
              principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CORE_VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.06}
                className="card-tactile group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center">
                    <Star className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-brand-mute">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl mt-6 font-medium">
                  {v.title}
                </h3>
                <p className="mt-3 text-brand-ink/70 leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ PROGRAMS PREVIEW ------------ */}
      <section className="py-24 md:py-32" data-testid="programs-preview">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-7">
              <p className="overline">Thematic Areas</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl">
                Programs that reach the last mile.
              </h2>
            </div>
            <Link
              to="/programs"
              className="md:col-span-5 md:justify-self-end btn-ghost"
              data-testid="programs-see-all"
            >
              See all programs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROGRAMS.slice(0, 3).map((p, i) => {
              const Icon = programIcons[p.slug] || HeartHandshake;
              return (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    to="/programs"
                    className="group block"
                    data-testid={`program-card-${p.slug}`}
                  >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-sand">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent" />
                      <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-white text-brand-terracotta flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="overline text-brand-clay">
                          0{i + 1} / Program
                        </p>
                        <h3 className="font-display text-2xl mt-2 font-medium leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-white/80 text-sm leading-relaxed">
                          {p.short}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-brand-clay group-hover:text-white transition">
                          Learn more <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ IMPACT STATS ------------ */}
      <section
        className="relative bg-brand-forest text-white py-24 md:py-32 overflow-hidden noise"
        data-testid="impact-stats"
      >
        <div className="container-x relative">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-7">
              <p className="overline text-brand-clay">Impact So Far · 2025</p>
              <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl text-white">
                Caring for people.
                <br />
                <span className="italic font-light text-brand-clay">
                  Strengthening Nigeria.
                </span>
              </h2>
            </div>
            <Link
              to="/impact"
              className="md:col-span-5 md:justify-self-end inline-flex items-center gap-2 text-brand-clay hover:text-white"
              data-testid="impact-read-more"
            >
              Read our 2025 report <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {IMPACT_STATS.map((s, i) => (
              <div
                key={i}
                className="bg-brand-forest p-8 md:p-10"
                data-testid={`stat-${i}`}
              >
                <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-white">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-white/70 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ FOUNDER QUOTE ------------ */}
      <section className="py-24 md:py-32" data-testid="founder-quote">
        <div className="container-x grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={TRUSTEES[0].photo}
                alt={TRUSTEES[0].name}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-8">
            <p className="overline">From the Founder</p>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-6">
              "We refuse to choose between compassion and accountability.
              <span className="text-brand-terracotta"> Nigeria deserves both</span>
              —and CASNAGGI exists to deliver them, community by community."
            </blockquote>
            <div className="mt-8">
              <div className="font-display text-lg font-medium">
                {TRUSTEES[0].name}
              </div>
              <div className="text-sm text-brand-mute">{TRUSTEES[0].role}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------ CTA STRIP ------------ */}
      <section className="pb-0" data-testid="home-cta-strip">
        <div className="container-x">
          <div className="relative rounded-3xl overflow-hidden bg-brand-terracotta p-12 md:p-20 text-white">
            <div className="grid md:grid-cols-12 gap-10 items-center relative">
              <div className="md:col-span-7">
                <p className="overline text-white/80">Get Involved</p>
                <h2 className="display-xl mt-4 text-4xl md:text-5xl lg:text-6xl">
                  Let's create something great together.
                </h2>
              </div>
              <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-4">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-terracotta font-medium hover:bg-brand-ink hover:text-white transition-all duration-300"
                  data-testid="cta-volunteer"
                >
                  Volunteer <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-all duration-300"
                  data-testid="cta-donate"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
