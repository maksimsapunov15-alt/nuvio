"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";

type PriceProps = {
  usd: string;
  rub: string;
  className?: string;
};

export default function Price({ usd, rub, className }: PriceProps) {
  const { currency } = useLanguage();
  const value = currency === "RUB" ? rub : usd;

  return (
    <span className={`relative inline-flex overflow-hidden rounded-md ${className ?? ""}`}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block rounded-md px-1.5 py-0.5"
      >
        {value}
        <motion.span
          key={`${value}-flash`}
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 rounded-md bg-white"
          aria-hidden="true"
        />
      </motion.span>
    </span>
  );
}
