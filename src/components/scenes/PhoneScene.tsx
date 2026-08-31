import Reveal from "../Reveal";
import DeviceMockup from "./DeviceMockup";

/**
 * Product scene — Phone. Same flat-black backdrop and device material as
 * the laptop scene, mirrored composition (offset left this time, opposite
 * tilt) so the two product beats rhyme without repeating.
 */
export default function PhoneScene() {
  return (
    <section id="phone" className="nv-field-void relative overflow-hidden py-28 lg:py-40">
      <div className="relative flex justify-center lg:justify-start">
        <Reveal y={32} className="w-[78%] sm:w-[55%] lg:w-[38%] lg:-translate-x-[4%]">
          <DeviceMockup device="phone" tilt="right" shadowSide="left" className="max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}
