import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { PROGRAMS } from "../data/content";

const Programs = () => {
  return (
    <>
      <Seo
        title="Programs & Thematic Areas"
        description="Seven thematic areas from humanitarian care to good governance: Health on Wheels, She Leads, Youth in Governance, Transparency Watch, Clean Water for All, Peace Clubs and more."
        path="/programs"
      />
      <PageHeader
        eyebrow="Thematic Areas of Focus"
        title="Programs built for the last mile."
        lede="From humanitarian relief to civic accountability, our six thematic areas translate CASNAGGI's mission into tangible, measurable change across Nigerian communities."
        breadcrumbs={[{ label: "Programs" }]}
      />

      {/* Program Index */}
      <section className="py-16" data-testid="programs-index">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {PROGRAMS.map((p, i) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="px-5 py-2.5 rounded-full border border-brand-rule text-sm hover:bg-brand-ink hover:text-white hover:border-brand-ink transition-all"
                data-testid={`program-chip-${p.slug}`}
              >
                <span className="font-mono text-xs text-brand-mute mr-2">
                  0{i + 1}
                </span>
                {p.title.split(" & ")[0].split("and")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Program Showcase */}
      <section className="pb-24">
        <div className="container-x space-y-24 md:space-y-32">
          {PROGRAMS.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={p.slug}
                id={p.slug}
                as="section"
                className="scroll-mt-28"
              >
                <div
                  className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                    isEven ? "" : "md:[&>:first-child]:order-2"
                  }`}
                  data-testid={`program-${p.slug}`}
                >
                  <div className="md:col-span-7">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur text-xs font-mono text-brand-mute">
                        0{i + 1} / 0{PROGRAMS.length}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="overline">
                      Thematic Area 0{i + 1}
                    </p>
                    <h2 className="display-xl mt-4 text-3xl md:text-4xl lg:text-5xl">
                      {p.title}
                    </h2>
                    <p className="mt-6 text-lg text-brand-ink/75 leading-relaxed">
                      {p.short}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {p.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-brand-ink/80 leading-relaxed"
                        >
                          <Check className="h-5 w-5 text-brand-terracotta flex-shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/get-involved"
                      className="btn-ghost mt-8"
                      data-testid={`program-support-${p.slug}`}
                    >
                      Support this program <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-sand/60 border-y border-brand-rule">
        <div className="container-x flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
          <div>
            <p className="overline">Partner with CASNAGGI</p>
            <h2 className="display-xl mt-4 text-3xl md:text-4xl lg:text-5xl max-w-2xl">
              Fund a program. Change a community.
            </h2>
          </div>
          <div className="flex gap-4">
            <Link to="/donate" className="btn-primary" data-testid="programs-donate-btn">
              Donate
            </Link>
            <Link to="/contact" className="btn-outline" data-testid="programs-contact-btn">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
