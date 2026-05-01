import Motif from '@/components/ui/Motif';

export default function HingeScene() {
  return (
    <>
      <Motif className="top-[30px] left-[30px]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 18 L4 11 Q1 8 4 5 Q7 2 11 6 Q15 2 18 5 Q21 8 18 11 Z"
            className="fill-pink-darker opacity-30"
          />
        </svg>
      </Motif>

      <Motif className="top-[50px] right-[30px]" delay="1.5s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <text
            x="10"
            y="15"
            textAnchor="middle"
            fontFamily="Lora,serif"
            fontSize="20"
            className="fill-pink-darker opacity-30"
          >
            ?
          </text>
        </svg>
      </Motif>

      <Motif className="bottom-[30px] left-[50px]" delay="3s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 14 L3 9 Q1 7 3 4 Q5 2 9 5 Q13 2 15 4 Q17 7 15 9 Z"
            className="fill-pink-darker opacity-25"
          />
        </svg>
      </Motif>

      <div className="w-[168px] h-[296px] bg-ink rounded-[26px] p-[5px] shadow-phone z-[2] relative overflow-hidden">
        <div className="w-full h-full rounded-[21px] bg-gradient-to-b from-pink-deep to-pink relative overflow-hidden">
          <div className="absolute top-[32px] left-[10%] w-[80%] bg-cream rounded-xl p-2 shadow-lg animate-hinge-swipe-1">
            <div className="w-full h-[92px] bg-gradient-to-br from-peach to-peach-deep rounded-md mb-1.5" />
            <div className="font-lora text-[11px] text-ink">Profile 01</div>
            <div className="text-[8px] text-ink-3">two truths and a lie</div>
          </div>
          <div className="absolute top-[60px] left-[10%] w-[80%] bg-cream rounded-xl p-2 -z-10 shadow-lg animate-hinge-swipe-2">
            <div className="w-full h-[92px] bg-gradient-to-br from-lilac to-lilac-deep rounded-md mb-1.5" />
            <div className="font-lora text-[11px] text-ink">Profile 02</div>
            <div className="text-[8px] text-ink-3">my simple pleasures</div>
          </div>
        </div>
      </div>

      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 bg-ink/80 text-cream font-mono text-[9px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full z-[5] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-pink-deep rounded-full animate-status-pulse" />
        video · auto
      </div>
    </>
  );
}
