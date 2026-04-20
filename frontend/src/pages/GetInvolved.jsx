import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, HandHeart, Users, Megaphone, Building2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { MEDIA } from "../data/content";

const WAYS = [
  {
    icon: HandHeart,
    title: "Volunteer",
    body: "Join our field teams for humanitarian drives, civic forums and skills bootcamps.",
    cta: "Apply to volunteer",
    to: "/contact",
    color: "bg-brand-terracotta text-white",
  },
  {
    icon: Users,
    title: "Fundraise",
    body: "Run a peer-to-peer campaign for a CASNAGGI program and turn your network into impact.",
    cta: "Start a fundraiser",
    to: "/contact",
    color: "bg-brand-forest text-white",
  },
  {
    icon: Megaphone,
    title: "Advocate",
    body: "Amplify our civic education and accountability work in your community and online.",
    cta: "Get the advocacy kit",
    to: "/contact",
    color: "bg-brand-sand text-brand-ink",
  },
  {
    icon: Building2,
    title: "Partner",
    body: "Collaborate as a government, corporate, civil society or international development partner.",
    cta: "Partner with CASNAGGI",
    to: "/contact",
    color: "bg-brand-ink text-white",
  },
];

const GetInvolved = () => {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Four ways to move Nigeria forward."
        lede="Whether you have time, treasure, talent or reach—there's a meaningful way for you to stand with CASNAGGI."
        breadcrumbs={[{ label: "Get Involved" }]}
      />

      {/* Ways grid */}
      <section className="py-20" data-testid="ways-grid">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {WAYS.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal
                key={w.title}
                delay={i * 0.08}
                className={`rounded-2xl p-10 md:p-12 flex flex-col justify-between min-h-[340px] ${w.color}`}
                data-testid={`way-${w.title.toLowerCase()}`}
              >
                <div>
                  <div className="h-12 w-12 rounded-full bg-white/15 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mt-8 font-medium">
                    {w.title}
                  </h3>
                  <p className="mt-4 opacity-85 max-w-sm leading-relaxed">
                    {w.body}
                  </p>
                </div>
                <Link
                  to={w.to}
                  className="inline-flex items-center gap-2 mt-10 font-medium group"
                  data-testid={`way-${w.title.toLowerCase()}-cta`}
                >
                  {w.cta}
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Volunteer image band */}
      <section className="py-10" data-testid="volunteer-band">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-brand-ink">
            <img
              src={MEDIA.volunteer}
              alt="Volunteer sorting donations"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-x">
                <p className="overline text-brand-clay">Hope for Communities</p>
                <h2 className="display-xl mt-4 text-3xl md:text-5xl lg:text-6xl text-white max-w-2xl">
                  Strength for the Nation.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / pledge block */}
      <section
        className="py-24 md:py-32 bg-brand-sand/60 border-y border-brand-rule"
        data-testid="pledge-block"
      >
        <div className="container-x grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="overline">Stay in the loop</p>
            <h2 className="display-xl mt-4 text-3xl md:text-4xl">
              Field notes from CASNAGGI.
            </h2>
            <p className="mt-6 text-brand-ink/70 leading-relaxed">
              One honest email a month. Program updates, community stories,
              civic briefings—no fluff.
            </p>
          </div>
          <form
            className="md:col-span-7 card-tactile"
            onSubmit={(e) => e.preventDefault()}
            data-testid="newsletter-form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                data-testid="newsletter-name"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-full border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition"
                data-testid="newsletter-email"
              />
            </div>
            <textarea
              placeholder="Which cause matters most to you?"
              rows={3}
              className="mt-4 w-full px-5 py-4 rounded-2xl border border-brand-rule bg-brand-bg focus:outline-none focus:border-brand-terracotta transition resize-none"
              data-testid="newsletter-message"
            />
            <button
              type="submit"
              className="btn-primary mt-6"
              data-testid="newsletter-submit"
            >
              Count me in <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
