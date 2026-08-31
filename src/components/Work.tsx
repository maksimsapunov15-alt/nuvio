"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import DeviceMockup from "./scenes/DeviceMockup";

/**
 * Work — replaces Portfolio.tsx. A single column, one project at a time,
 * full-width device art bleeding without a bounding card border. All 10
 * real projects and their live/repo links, unchanged.
 */
export default function Work() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="nv-field-void relative">
      <div className="nv-container pt-24 lg:pt-32">
        <Reveal>
          <span className="text-label font-mono tracking-[0.2em] text-gray-600">07</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-statement lg:text-statement-lg mt-4 max-w-xl font-sans font-semibold tracking-tight text-white">
            {t.portfolio.heading}
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-6 px-3 pb-24 lg:gap-8 lg:pb-32">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={Math.min(i * 0.03, 0.24)}>
            <div className="group relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/25 lg:h-[28rem]">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
              >
                <span className="sr-only">
                  {project.name} — {t.portfolio.liveLabel}
                </span>
              </a>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.03]">
                <DeviceMockup device={project.device} label={project.name} />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-5 pt-14">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-body-lg font-medium text-white">{project.name}</h3>
                  <span className="text-small shrink-0 font-mono text-gray-500">
                    {project.category[lang]}
                  </span>
                </div>

                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-small mt-2 max-w-sm text-gray-400">
                      {project.description[lang]}
                    </p>
                    <div className="pointer-events-auto mt-3 flex items-center gap-5">
                      <span className="text-small inline-flex items-center gap-1.5 font-medium text-white">
                        {t.portfolio.liveLabel}
                        <ArrowUpRight size={13} />
                      </span>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-small relative z-10 inline-flex items-center gap-1.5 text-gray-400 transition-colors duration-300 hover:text-white"
                      >
                        <Code2 size={13} />
                        {t.portfolio.codeLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
