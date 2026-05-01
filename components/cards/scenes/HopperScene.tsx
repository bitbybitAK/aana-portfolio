import Motif from '@/components/ui/Motif';
import PhoneFrame from '@/components/ui/PhoneFrame';

export default function HopperScene() {
  return (
    <>
      <Motif variant="plane" className="top-[36px] left-[26px]">
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none">
          <path
            d="M2 12 L18 6 L30 6 L24 12 L30 18 L18 12 Z"
            className="fill-powder-darker opacity-55"
          />
        </svg>
      </Motif>

      <Motif variant="plane" className="top-[62%] right-[35px]" delay="3s" duration="13s">
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
          <path
            d="M2 10 L14 4 L24 4 L19 10 L24 14 L14 10 Z"
            className="fill-powder-darker opacity-50"
          />
        </svg>
      </Motif>

      <Motif variant="plane" className="bottom-[28px] left-[30%]" delay="6s" duration="12s">
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
          <path
            d="M2 8 L12 3 L20 3 L16 8 L20 12 L12 8 Z"
            className="fill-powder-darker opacity-[0.45]"
          />
        </svg>
      </Motif>

      <PhoneFrame size="lg">
        <div className="font-mono text-[9px] text-ink-3 text-center">9:41</div>
        <div className="font-lora text-[13px] text-ink leading-none mt-0.5">SFO → JFK</div>
        <div className="text-[9px] text-ink-3 mb-1">price watch · active</div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-powder shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Wed Apr 30</div>
            <div className="text-[8px] text-ink-3">$187 · ↓ from $241</div>
          </div>
        </div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-powder shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Sat May 03</div>
            <div className="text-[8px] text-ink-3">$203 · stable</div>
          </div>
        </div>
        <div className="bg-powder-darker text-cream rounded-[7px] py-2 font-mono text-[9px] tracking-[0.04em] text-center font-medium">
          price drop alert
        </div>
        <div className="mt-auto bg-ink text-cream text-center py-2 rounded-[7px] text-[9px] font-medium">
          view alert
        </div>
      </PhoneFrame>
    </>
  );
}
