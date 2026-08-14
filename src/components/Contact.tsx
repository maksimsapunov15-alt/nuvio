"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim() ?? "";
    const contact = form.get("contact")?.toString().trim() ?? "";
    const type = form.get("type")?.toString() ?? "";
    const budget = form.get("budget")?.toString() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";
    const m = t.contact.telegramMessage;

    const lines = [
      m.title,
      name && `${m.name}: ${name}`,
      contact && `${m.contact}: ${contact}`,
      type && `${m.type}: ${type}`,
      budget && `${m.budget}: ${budget}`,
      message && `${m.message}: ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://t.me/NuvioIT?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="nv-divider" />
                <span className="nv-eyebrow">{t.contact.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-sm text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[40px]">
                {t.contact.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-500">
                {t.contact.sub}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-6 border-t nv-hairline pt-8">
                <a
                  href="https://t.me/NuvioIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <div className="text-[12px] tracking-widest text-gray-500">
                      {t.contact.telegramLabel}
                    </div>
                    <div className="mt-1 text-[18px] font-medium text-white">
                      @NuvioIT
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
                <div>
                  <div className="text-[12px] tracking-widest text-gray-500">
                    {t.contact.studioLabel}
                  </div>
                  <div className="mt-1 text-[18px] font-medium text-white">
                    NUVIO STUDIO
                  </div>
                  <div className="mt-0.5 text-[14px] text-gray-500">
                    nuvio.studio
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 rounded-2xl border nv-hairline bg-[#0a0a0a] p-7 sm:grid-cols-2 sm:p-9"
            >
              <label className="flex flex-col gap-2 text-[13px] text-gray-400">
                {t.contact.formName}
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.formNamePlaceholder}
                  className="rounded-lg border nv-hairline bg-transparent px-4 py-3 text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-gray-600 focus:border-white/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] text-gray-400">
                {t.contact.formContact}
                <input
                  name="contact"
                  type="text"
                  required
                  placeholder={t.contact.formContactPlaceholder}
                  className="rounded-lg border nv-hairline bg-transparent px-4 py-3 text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-gray-600 focus:border-white/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] text-gray-400">
                {t.contact.formType}
                <select
                  name="type"
                  defaultValue=""
                  className="rounded-lg border nv-hairline bg-transparent px-4 py-3 text-[14px] text-white outline-none transition-colors duration-300 focus:border-white/40"
                >
                  <option value="" disabled className="bg-black">
                    {t.contact.formTypePlaceholder}
                  </option>
                  {t.contact.projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] text-gray-400">
                {t.contact.formBudget}
                <select
                  name="budget"
                  defaultValue=""
                  className="rounded-lg border nv-hairline bg-transparent px-4 py-3 text-[14px] text-white outline-none transition-colors duration-300 focus:border-white/40"
                >
                  <option value="" disabled className="bg-black">
                    {t.contact.formBudgetPlaceholder}
                  </option>
                  {t.contact.budgets.map((budget) => (
                    <option key={budget} value={budget} className="bg-black">
                      {budget}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] text-gray-400 sm:col-span-2">
                {t.contact.formMessage}
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.formMessagePlaceholder}
                  className="resize-none rounded-lg border nv-hairline bg-transparent px-4 py-3 text-[14px] text-white outline-none transition-colors duration-300 placeholder:text-gray-600 focus:border-white/40"
                />
              </label>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t.contact.formSubmit}
                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>
                {sent && (
                  <span className="text-[13px] text-gray-400">
                    {t.contact.openingMessage}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
