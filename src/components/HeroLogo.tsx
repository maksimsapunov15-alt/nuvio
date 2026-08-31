"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION } from "@/lib/motion";

type HeroLogoProps = {
  className?: string;
};

/**
 * The Nuvio mark — a plain static image, centered, dominant. No rotation,
 * no drag, no parallax, no mouse-reaction, no scroll-linked movement. The
 * only motion anywhere near it is a single one-time fade-in on mount.
 */
export default function HeroLogo({ className }: HeroLogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div
        className="nv-logo-glow absolute inset-0 -z-10 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slow, ease: "easeOut" }}
      >
        <Image
          src="/nuvio-logo-metal.webp"
          alt="Nuvio"
          width={872}
          height={1066}
          priority
          className="h-[clamp(200px,34vh,320px)] w-auto select-none lg:h-[clamp(240px,38vh,380px)]"
        />
      </motion.div>
    </div>
  );
}
