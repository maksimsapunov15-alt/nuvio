"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { technologies } from "@/data/technologies";

/**
 * Technologies — "the seam." Not a padded section like its neighbors: a
 * thin, full-bleed graphite-toned strip — a visible material change from
 * the near-black chapters around it — functioning as a structural divider
 * rather than another section.
 */
export default function Technologies() {
  const { t } = useLanguage();
  const doubled = [...technologies, ...technologies];

  return (
    <section
      id="technologies"
      className="nv-field-graphite group relative overflow-hidden border-y border-white/5 py-8"
    >
      <div className="nv-container mb-6 flex items-center justify-between">
        <span className="text-label font-mono tracking-[0.2em] text-gray-500">
          {t.technologies.eyebrow}
        </span>
        <span className="text-label hidden font-mono tracking-[0.2em] text-gray-600 sm:inline">
          {t.technologies.heading}
        </span>
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, var(--nv-graphite), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--nv-graphite), transparent)" }}
          aria-hidden="true"
        />
        <div className="nv-tech-track flex w-max gap-12">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-body whitespace-nowrap font-mono text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
