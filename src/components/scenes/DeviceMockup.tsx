import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type DeviceMockupProps = {
  device: "laptop" | "phone";
  label?: string;
  /** When supplied, renders a real screenshot inside the bezel via
   *  next/image instead of the code-composed screen — a drop-in slot for
   *  future real product photography with zero markup changes. */
  screenshotSrc?: string;
  /** Fixed, static "shot at an angle" tilt — never scroll- or
   *  interaction-driven. */
  tilt?: "left" | "right" | "none";
  /** Cast a stronger shadow across the far side of the device, as if one
   *  edge is falling out of the key light. */
  shadowSide?: "left" | "right";
  className?: string;
};

/**
 * Shared premium device-scene renderer — one material/lighting language
 * (dark metallic body, soft directional studio key light, a rim-light edge,
 * deep layered cast shadow, a one-directional "falling into shadow" wash)
 * reused by the Laptop/Phone hero-adjacent scenes and by Work's project
 * previews, so every device on the site reads as one coherent, deliberately
 * photographed product family — never a generic bordered mockup card.
 */
export default function DeviceMockup({
  device,
  label,
  screenshotSrc,
  tilt = "none",
  shadowSide,
  className,
}: DeviceMockupProps) {
  const tiltDeg = tilt === "left" ? 8 : tilt === "right" ? -8 : 0;
  const tiltStyle: CSSProperties | undefined =
    tilt !== "none"
      ? { transform: `perspective(1600px) rotateY(${tiltDeg}deg) rotateX(2deg)` }
      : undefined;

  if (device === "phone") {
    return (
      <div className={cn("relative mx-auto w-full max-w-[280px]", className)} style={tiltStyle}>
        <CastShadow narrow />
        <div
          className="relative rounded-[40px] p-[3px]"
          style={{
            background:
              "linear-gradient(158deg, #55555b 0%, #2e2e32 22%, #1c1c1f 42%, #3d3d43 58%, #232327 78%, #18181b 100%)",
            boxShadow:
              "0 40px 90px -22px rgba(0,0,0,0.95), 0 8px 24px -8px rgba(0,0,0,0.6)",
          }}
        >
          <RimLight radius={40} />
          <div className="relative overflow-hidden rounded-[36px] bg-black">
            <div className="relative aspect-[9/19.3]">
              <div className="absolute left-1/2 top-2.5 z-10 h-5 w-[36%] -translate-x-1/2 rounded-full bg-black" />
              <ScreenContent screenshotSrc={screenshotSrc} label={label} />
              <SpecularSweep />
              <ShadowWash side={shadowSide} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative mx-auto w-full max-w-[960px]", className)} style={tiltStyle}>
      <CastShadow />
      <div
        className="relative rounded-[18px] p-[3px]"
        style={{
          background:
            "linear-gradient(152deg, #55555b 0%, #2a2a2e 20%, #1c1c1f 42%, #45454c 62%, #232327 82%, #18181b 100%)",
          boxShadow:
            "0 60px 130px -32px rgba(0,0,0,0.95), 0 16px 40px -14px rgba(0,0,0,0.7)",
        }}
      >
        <RimLight radius={18} />
        <div className="flex justify-center rounded-t-[15px] bg-[#1c1c1f] py-2.5">
          <span className="h-1 w-1 rounded-full bg-white/15" />
        </div>
        <div className="relative overflow-hidden rounded-b-[15px] bg-black">
          <div className="relative aspect-[16/10]">
            <ScreenContent screenshotSrc={screenshotSrc} label={label} />
            <SpecularSweep />
            <ShadowWash side={shadowSide} />
          </div>
        </div>
      </div>
      {/* hinge + base, grounding the device in the scene */}
      <div
        className="mx-auto h-[10px] w-[94%] rounded-b-[8px]"
        style={{ background: "linear-gradient(180deg,#2c2c30,#08080a)" }}
      />
      <div className="mx-auto h-[4px] w-[70%] rounded-b-full bg-black/70 blur-[1px]" />
    </div>
  );
}

function CastShadow({ narrow = false }: { narrow?: boolean }) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute rounded-[50%] blur-3xl",
          narrow ? "inset-x-[10%] -bottom-10 h-16" : "inset-x-[4%] -bottom-14 h-28"
        )}
        style={{ background: "rgba(0,0,0,0.7)" }}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute rounded-[50%] blur-xl",
          narrow ? "inset-x-[22%] -bottom-3 h-8" : "inset-x-[18%] -bottom-4 h-12"
        )}
        style={{ background: "rgba(0,0,0,0.6)" }}
        aria-hidden
      />
    </>
  );
}

function RimLight({ radius }: { radius: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        borderRadius: radius,
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.3), inset 2px 2px 2px rgba(255,255,255,0.32), inset -1.5px -1.5px 3px rgba(0,0,0,0.5)",
      }}
      aria-hidden
    />
  );
}

function SpecularSweep() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(122deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 16%, transparent 32%)",
      }}
      aria-hidden
    />
  );
}

function ShadowWash({ side }: { side?: "left" | "right" }) {
  if (!side) return null;
  const gradientDir = side === "left" ? "to right" : "to left";
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `linear-gradient(${gradientDir}, rgba(0,0,0,0.55) 0%, transparent 55%)`,
      }}
      aria-hidden
    />
  );
}

function ScreenContent({
  screenshotSrc,
  label,
}: {
  screenshotSrc?: string;
  label?: string;
}) {
  if (screenshotSrc) {
    return (
      <Image
        src={screenshotSrc}
        alt={label ?? "Nuvio"}
        fill
        className="object-cover object-top"
      />
    );
  }

  return <ScreenFallback />;
}

/** Placeholder screen until real product photography exists — just the
 *  Nuvio mark, centered, on black. Deliberately minimal, not a fake UI
 *  skeleton. */
function ScreenFallback() {
  return (
    <div className="flex h-full items-center justify-center bg-black">
      <span className="font-mono text-lg font-medium tracking-[0.35em] text-white/70 sm:text-2xl">
        NUVIO
      </span>
    </div>
  );
}
