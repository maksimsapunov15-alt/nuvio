"use client";

import Reveal from "./Reveal";
import DeviceMockup from "./DeviceMockup";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Portfolio() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="nv-divider" />
            <span className="nv-eyebrow">{t.portfolio.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
            {t.portfolio.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border nv-hairline bg-[#0a0a0a] transition-colors duration-300 hover:border-white/25">
                <div className="flex h-64 items-center justify-center overflow-hidden bg-black/40 py-8 transition-transform duration-500 group-hover:scale-[1.03] sm:h-72">
                  <DeviceMockup device={project.device} label={project.name} />
                </div>
                <div className="border-t nv-hairline p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-semibold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <span className="text-[12px] tracking-wide text-gray-500">
                      {project.category[lang]}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {project.description[lang]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border nv-hairline px-3 py-1 text-[11px] text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
