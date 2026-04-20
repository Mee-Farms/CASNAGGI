import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const PageHeader = ({ eyebrow, title, lede, breadcrumbs = [] }) => {
  return (
    <section
      className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-brand-rule bg-brand-bg overflow-hidden"
      data-testid="page-header"
    >
      <div className="container-x relative">
        {breadcrumbs.length > 0 && (
          <nav
            className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-mute mb-6"
            aria-label="Breadcrumbs"
          >
            <Link to="/" className="hover:text-brand-terracotta">Home</Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <span>/</span>
                {b.to ? (
                  <Link to={b.to} className="hover:text-brand-terracotta">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-brand-ink">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {eyebrow && <p className="overline">{eyebrow}</p>}
        <h1 className="display-xl mt-4 text-5xl md:text-7xl lg:text-[5.5rem] max-w-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-brand-ink/70 leading-relaxed">
            {lede}
          </p>
        )}
      </div>

      {/* decorative horizontal rule */}
      <div className="absolute left-0 right-0 bottom-0 flex items-center gap-1">
        <div className="h-1 w-1/3 bg-brand-terracotta" />
        <div className="h-1 w-1/6 bg-brand-forest" />
        <div className="h-1 flex-1 bg-brand-clay" />
      </div>
    </section>
  );
};

export default PageHeader;
