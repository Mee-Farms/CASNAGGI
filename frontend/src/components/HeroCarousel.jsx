import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, ORG } from "../data/content";

const AUTOPLAY_MS = 6000;

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 40,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

  const slide = HERO_SLIDES[selected];

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden bg-brand-ink"
      data-testid="home-hero"
    >
      {/* Carousel track with crossfade images */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] min-w-0 h-full"
              data-testid={`hero-slide-${i}`}
            >
              <img
                src={s.image}
                alt={s.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/55 to-brand-ink/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/60 via-transparent to-transparent pointer-events-none" />

      {/* Text overlay — animated per slide */}
      <div className="container-x relative z-10 min-h-[92vh] flex flex-col justify-end pt-40 pb-28 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl"
          >
            <p className="overline text-brand-clay">{slide.eyebrow}</p>
            <h1 className="display-xl mt-6 text-[13vw] md:text-[9vw] lg:text-[7.2vw]">
              {slide.headline}
              <br />
              <span className="italic font-light text-brand-clay">
                {slide.headlineAccent}
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-white/85 leading-relaxed">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/impact" className="btn-primary" data-testid="hero-impact-btn">
            Our Impact <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-brand-ink transition-all duration-300"
            data-testid="hero-donate-btn"
          >
            Donate Now <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Controls row */}
        <div className="mt-16 flex items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white hover:text-brand-ink transition"
              aria-label="Previous slide"
              data-testid="hero-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white hover:text-brand-ink transition"
              aria-label="Next slide"
              data-testid="hero-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                data-testid={`hero-dot-${i}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === selected
                    ? "w-12 bg-brand-terracotta"
                    : "w-6 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-white/60">
            <span>{String(selected + 1).padStart(2, "0")}</span>
            <div className="h-px w-10 bg-white/20" />
            <span>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.22em] text-white/55">
          <span>Bayelsa · Niger · Taraba · FCT</span>
          <div className="h-px flex-1 bg-white/15 max-w-40" />
          <span>{ORG.rc}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
