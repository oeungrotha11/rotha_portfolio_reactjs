import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Reveal from "../motion/Reveal.jsx";
import { certificates } from "../../data/portfolio.js";
import { section, eyebrow, heading, muted, itemVariants } from "../../constants/tailwind.js";
import React from "react";

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="certificates" className={`${section} border-t border-[var(--line)]`}>
        <div className="mb-[65px] grid grid-cols-2 items-end gap-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px]">
          <Reveal>
            <p className={eyebrow}>03 — CERTIFICATES</p>
            <h2 className={heading}>Learning milestones<br /><span className="font-serif text-[var(--accent-soft)]">that shaped my growth.</span></h2>
          </Reveal>
          <Reveal className={`max-w-[430px] justify-self-end leading-[1.8] ${muted} max-[800px]:justify-self-start`} delay={.12}>
            A collection of certifications and program completions that support my work in frontend, backend, and product development.
          </Reveal>
        </div>

        <div className="relative z-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

          <div className="relative z-20 mb-3 flex items-center justify-between text-[10px] uppercase tracking-[2px] text-[var(--muted)]">
            <span className="drop-shadow-[0_1px_0_rgba(0,0,0,0.65)]">Swipe to explore</span>
            <span className="rounded-full border border-[var(--button-border)] bg-[rgba(10,10,10,0.35)] px-2 py-1 backdrop-blur-[2px]">Drag</span>
          </div>

          <div className="relative z-20 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" aria-label="Certificate gallery">
            {certificates.map((certificate, index) => (
              <motion.article
                key={`${certificate.title}-${certificate.year}`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative min-w-[290px] max-w-[340px] flex-1 snap-start overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(22,22,22,0.9),rgba(10,10,10,0.96))] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-[480px]:min-w-[260px]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-soft)] to-transparent opacity-90" />

                <button
                  type="button"
                  onClick={() => setSelectedCert(certificate)}
                  className="group relative block w-full cursor-pointer text-left"
                  aria-label={`View ${certificate.title} certificate`}
                >
                  <div className="relative overflow-hidden rounded-[18px] border border-[var(--line)] bg-[radial-gradient(circle_at_top,_rgba(201,52,47,0.18),_rgba(11,11,11,1)_52%)]">
                    {certificate.image ? (
                      <>
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="h-[220px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.38)] opacity-0 transition duration-300 group-hover:opacity-100">
                          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-sm">
                            View certificate
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex h-[220px] flex-col justify-between bg-[radial-gradient(circle_at_top,_rgba(201,52,47,0.18),_rgba(17,17,17,1)_55%)] p-5">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[2px] text-[var(--muted)]">
                          <span>{certificate.category}</span>
                          <span>{certificate.year}</span>
                        </div>

                        <div className="rounded-[16px] border border-[rgba(201,52,47,0.35)] bg-[rgba(201,52,47,0.08)] p-4 backdrop-blur-sm">
                          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-[var(--accent-soft)]">Certificate</div>
                          <div className="text-[22px] font-semibold leading-tight text-[var(--text)]">{certificate.title}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-[2px] text-[var(--accent-soft)]">{certificate.category}</div>
                    <h3 className="text-[21px] font-semibold leading-tight text-[var(--text)]">{certificate.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{certificate.provider}</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--button-border)] bg-[var(--panel)] text-[var(--accent-soft)]">
                    {index + 1}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-3 text-[10px] uppercase tracking-[1.8px] text-[var(--tag-text)]">
                  <span>{certificate.issuer}</span>
                  <span className="text-[var(--accent-soft)]">Verified</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-5 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[900px] rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-[var(--button-border)] bg-[rgba(12,12,12,0.75)] text-xl text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[rgba(201,52,47,0.18)] hover:text-[var(--accent-soft)]"
                aria-label="Close certificate preview"
              >
                ×
              </button>

              <div className="overflow-hidden rounded-[18px]">
                <motion.img
                  initial={{ scale: 1.05, y: 12 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[80vh] w-full rounded-[18px] object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-[var(--accent-soft)]">{selectedCert.category}</div>
                  <h3 className="mt-2 text-[24px] font-semibold text-[var(--text)]">{selectedCert.title}</h3>
                </div>
                <span className="rounded-full border border-[var(--button-border)] bg-[var(--bg)] px-3 py-1 text-[10px] uppercase tracking-[1.8px] text-[var(--muted)]">
                  {selectedCert.year}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
