type DeviceMockupProps = {
  device: "laptop" | "phone";
  label: string;
};

export default function DeviceMockup({ device, label }: DeviceMockupProps) {
  if (device === "phone") {
    return (
      <div className="relative mx-auto h-full w-[62%] rounded-[28px] border border-white/15 bg-[#0d0d0d] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/15" />
        <div className="flex h-full flex-col rounded-[20px] bg-gradient-to-b from-[#151515] to-[#050505] p-4 pt-8">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-white/70">
            NUVIO
          </span>
          <div className="mt-6 flex flex-1 flex-col gap-2.5">
            <div className="h-3 w-3/4 rounded-full bg-white/10" />
            <div className="h-3 w-1/2 rounded-full bg-white/10" />
            <div className="mt-4 h-20 w-full rounded-xl border border-white/10" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg border border-white/10" />
              <div className="h-10 rounded-lg border border-white/10" />
            </div>
          </div>
          <span className="pt-3 text-[9px] text-white/30">{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[92%]">
      <div className="rounded-t-xl border border-white/15 bg-[#0d0d0d] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-1.5 rounded-t-md bg-[#151515] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex aspect-[16/10] flex-col bg-gradient-to-br from-[#161616] to-[#040404] p-6">
          <span className="text-[12px] font-semibold tracking-[0.25em] text-white/70">
            NUVIO
          </span>
          <div className="mt-6 flex flex-1 gap-4">
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-3 w-2/3 rounded-full bg-white/10" />
              <div className="h-3 w-1/2 rounded-full bg-white/10" />
              <div className="mt-3 h-full rounded-lg border border-white/10" />
            </div>
            <div className="hidden w-1/3 flex-col gap-3 sm:flex">
              <div className="h-full rounded-lg border border-white/10" />
            </div>
          </div>
          <span className="pt-4 text-[10px] text-white/30">{label}</span>
        </div>
      </div>
      <div className="mx-auto h-2 w-[70%] rounded-b-xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
      <div className="mx-auto h-1 w-[85%] rounded-b-md bg-[#0a0a0a]" />
    </div>
  );
}
