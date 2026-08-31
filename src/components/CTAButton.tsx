import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type CTAButtonVariant = "solid" | "outline" | "ghost";
type CTAButtonSize = "default" | "lg";

type CommonProps = {
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  /** Trailing arrow micro-interaction every CTA in the site already used —
   *  centralized here instead of hand-copied per call site. */
  icon?: boolean;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children"> & {
    href: string;
  };

type ButtonElProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type CTAButtonProps = AnchorProps | ButtonElProps;

const variantMap: Record<CTAButtonVariant, "default" | "outline" | "ghost"> = {
  solid: "default",
  outline: "outline",
  ghost: "ghost",
};

export default function CTAButton({
  variant = "solid",
  size = "default",
  icon = true,
  className,
  children,
  href,
  ...props
}: CTAButtonProps) {
  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const sharedClassName = cn(
    "group rounded-full text-[13.5px] font-semibold uppercase tracking-wide transition-transform duration-300 hover:-translate-y-0.5",
    size === "lg" ? "h-auto px-7 py-4" : "h-auto px-6 py-3.5",
    className
  );

  if (href) {
    return (
      <Button asChild variant={variantMap[variant]} className={sharedClassName}>
        <a href={href} {...(props as ComponentPropsWithoutRef<"a">)}>
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button
      variant={variantMap[variant]}
      className={sharedClassName}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {content}
    </Button>
  );
}
