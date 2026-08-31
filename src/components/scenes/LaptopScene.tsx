import Reveal from "../Reveal";
import DeviceMockup from "./DeviceMockup";

/**
 * Product scene — Laptop. Full-bleed, mostly empty flat-black frame; the
 * device is large, offset toward one side and deliberately cropped by the
 * section edge (not centered, not boxed). The visual carries the chapter —
 * no copy competing with it, no background texture behind it.
 */
export default function LaptopScene() {
  return (
    <section id="laptop" className="nv-field-void relative overflow-hidden py-28 lg:py-40">
      <div className="relative flex justify-center lg:justify-end">
        <Reveal y={32} className="w-[92%] lg:w-[68%] lg:translate-x-[10%]">
          <DeviceMockup device="laptop" tilt="left" shadowSide="right" className="max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}
