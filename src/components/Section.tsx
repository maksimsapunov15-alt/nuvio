import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "full-bleed" | "flush";

type SectionProps = {
  id?: string;
  /** "default" = bordered + padded + contained (the standard section shell).
   *  "full-bleed" = no container wrap, edge-to-edge — for large media/scenes.
   *  "flush" = no top hairline (keeps padding+container) — for a section that
   *  should read as a continuation of the one before it. */
  variant?: SectionVariant;
  /** Landmark element to render — defaults to <section>; pass "footer" for
   *  the page footer so the semantic/accessibility landmark is preserved. */
  as?: "section" | "footer" | "div";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  variant = "default",
  as = "section",
  className,
  containerClassName,
  children,
}: SectionProps) {
  const bordered = variant === "default";
  const padded = variant !== "full-bleed";
  const Comp = as;

  return (
    <Comp
      id={id}
      className={cn(
        "relative",
        bordered && "border-t nv-hairline",
        padded && "py-24 lg:py-32",
        className
      )}
    >
      {variant === "full-bleed" ? (
        children
      ) : (
        <div className={cn("nv-container", containerClassName)}>{children}</div>
      )}
    </Comp>
  );
}
