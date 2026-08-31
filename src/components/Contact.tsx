"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useLanguage } from "@/i18n/LanguageProvider";

const selectClass =
  "h-9 w-full rounded-md border border-white/10 bg-transparent px-3 text-body text-white outline-none transition-colors focus-visible:border-white/40";

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
    <section id="contact" className="nv-field-floor relative">
      <div className="nv-container py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="text-label font-mono tracking-[0.2em] text-gray-600">
                {t.contact.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-heading lg:text-heading-lg mt-6 max-w-sm font-sans font-semibold tracking-tight text-white">
                {t.contact.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-body mt-6 max-w-sm text-gray-500">{t.contact.sub}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8">
                <a
                  href="https://t.me/NuvioIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <div className="text-small tracking-widest text-gray-500">
                      {t.contact.telegramLabel}
                    </div>
                    <div className="text-body-lg mt-1 font-medium text-white">@NuvioIT</div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
                <div>
                  <div className="text-small tracking-widest text-gray-500">
                    {t.contact.studioLabel}
                  </div>
                  <div className="text-body-lg mt-1 font-medium text-white">NUVIO STUDIO</div>
                  <div className="text-body mt-0.5 text-gray-500">nuvio.studio</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-2"
            >
              <Label className="flex flex-col items-stretch gap-2 text-small text-gray-400">
                {t.contact.formName}
                <Input
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.formNamePlaceholder}
                />
              </Label>
              <Label className="flex flex-col items-stretch gap-2 text-small text-gray-400">
                {t.contact.formContact}
                <Input
                  name="contact"
                  type="text"
                  required
                  placeholder={t.contact.formContactPlaceholder}
                />
              </Label>
              <Label className="flex flex-col items-stretch gap-2 text-small text-gray-400">
                {t.contact.formType}
                <select name="type" defaultValue="" className={selectClass}>
                  <option value="" disabled className="bg-black">
                    {t.contact.formTypePlaceholder}
                  </option>
                  {t.contact.projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </Label>
              <Label className="flex flex-col items-stretch gap-2 text-small text-gray-400">
                {t.contact.formBudget}
                <select name="budget" defaultValue="" className={selectClass}>
                  <option value="" disabled className="bg-black">
                    {t.contact.formBudgetPlaceholder}
                  </option>
                  {t.contact.budgets.map((budget) => (
                    <option key={budget} value={budget} className="bg-black">
                      {budget}
                    </option>
                  ))}
                </select>
              </Label>
              <Label className="flex flex-col items-stretch gap-2 text-small text-gray-400 sm:col-span-2">
                {t.contact.formMessage}
                <Textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.formMessagePlaceholder}
                  className="resize-none"
                />
              </Label>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <CTAButton type="submit" icon={false}>
                  {t.contact.formSubmit}
                  <Send size={15} />
                </CTAButton>
                {sent && (
                  <span className="text-small text-gray-400">{t.contact.openingMessage}</span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
