import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const CLAMP_CHARS = 220;

const TrusteeCard = ({ trustee, index, variant = "small" }) => {
  const [open, setOpen] = useState(false);
  const bio = trustee.bioFull || [trustee.bio];
  const preview =
    bio[0].length > CLAMP_CHARS ? bio[0].slice(0, CLAMP_CHARS).trim() + "…" : bio[0];

  const toggle = () => setOpen((v) => !v);

  if (variant === "hero") {
    return (
      <Reveal>
        <div
          className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group"
          data-testid={`trustee-${index}`}
        >
          <div className="grid grid-cols-5">
            <div className="col-span-2 relative aspect-square md:aspect-auto bg-brand-forest">
              <img
                src={trustee.photo}
                alt={trustee.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
            </div>
            <div className="col-span-3 p-6 md:p-8 flex flex-col">
              <div className="overline text-brand-terracotta">{trustee.role}</div>
              <h3 className="font-display text-xl md:text-2xl mt-2 font-medium leading-snug">
                {trustee.name}
              </h3>

              <div className="mt-4 text-white/75 text-sm leading-relaxed">
                <AnimatePresence initial={false} mode="wait">
                  {open ? (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3">
                        {bio.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="closed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {preview}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={toggle}
                className="mt-5 inline-flex items-center gap-2 text-brand-terracotta hover:text-white font-medium text-sm transition-colors self-start"
                data-testid={`trustee-${index}-toggle`}
                aria-expanded={open}
              >
                {open ? "Show less" : "Read more"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  // Small card variant (3-up grid)
  return (
    <Reveal>
      <div data-testid={`trustee-${index}`}>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-forest">
          <img
            src={trustee.photo}
            alt={trustee.name}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/10 to-transparent" />
        </div>
        <div className="mt-6">
          <div className="overline text-brand-terracotta">{trustee.role}</div>
          <h3 className="font-display text-xl md:text-2xl mt-2 font-medium">
            {trustee.name}
          </h3>

          <div className="mt-3 text-white/70 text-sm leading-relaxed">
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3">
                    {bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {preview}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={toggle}
            className="mt-4 inline-flex items-center gap-2 text-brand-terracotta hover:text-white font-medium text-sm transition-colors"
            data-testid={`trustee-${index}-toggle`}
            aria-expanded={open}
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default TrusteeCard;
