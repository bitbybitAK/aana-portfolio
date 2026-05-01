import Motif from '@/components/ui/Motif';
import PhoneFrame from '@/components/ui/PhoneFrame';

export default function CalAiScene() {
  return (
    <>
      <Motif className="top-[28px] left-[38px]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 6 C9 6 6 9 6 14 C6 19 9 24 14 24 C19 24 22 19 22 14 C22 9 19 6 14 6 Z"
            className="fill-sage-darker opacity-30"
          />
          <path d="M14 6 L15 4" className="stroke-sage-darker opacity-50" strokeWidth="1.5" />
          <path
            d="M16 7 Q18 5 20 7"
            className="stroke-sage-darker opacity-[0.45]"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </Motif>

      <Motif className="top-[55px] right-[44px]" delay="1.5s">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="6" className="fill-sage-darker opacity-20" />
          <circle cx="11" cy="11" r="3" className="fill-sage-darker opacity-30" />
        </svg>
      </Motif>

      <Motif className="bottom-[36px] left-[56px]" delay="3s">
        <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
          <rect
            x="6"
            y="6"
            width="20"
            height="13"
            rx="2"
            className="fill-sage-darker opacity-[0.22]"
          />
          <path
            d="M6 9 Q16 6 26 9"
            className="stroke-sage-darker opacity-40"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M6 12 Q16 9 26 12"
            className="stroke-sage-darker opacity-40"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </Motif>

      <Motif className="bottom-[50px] right-[32px]" delay="4.5s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
            className="fill-sage-darker opacity-[0.28]"
          />
        </svg>
      </Motif>

      <PhoneFrame size="lg">
        <div className="font-mono text-[9px] text-ink-3 text-center">9:41</div>
        <div className="font-lora text-[13px] text-ink leading-none mt-0.5">Today</div>
        <div className="text-[9px] text-ink-3 mb-1">1,840 cal · scan 3 of 3</div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-sage shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Avocado toast</div>
            <div className="text-[8px] text-ink-3">320 cal</div>
          </div>
        </div>
        <div className="bg-cream-2 rounded-[7px] p-[7px] flex gap-1.5 items-center">
          <div className="w-5 h-5 rounded bg-peach shrink-0" />
          <div>
            <div className="text-[9px] font-medium text-ink">Greek salad</div>
            <div className="text-[8px] text-ink-3">410 cal</div>
          </div>
        </div>
        <div className="bg-sage-darker text-cream rounded-[7px] py-2 font-mono text-[9px] tracking-[0.04em] text-center font-medium">
          streak unlocked · 3 scans
        </div>
        <div className="mt-auto bg-ink text-cream text-center py-2 rounded-[7px] text-[9px] font-medium">
          + scan meal
        </div>
      </PhoneFrame>
    </>
  );
}
