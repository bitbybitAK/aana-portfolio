import Motif from '@/components/ui/Motif';
import PhoneFrame from '@/components/ui/PhoneFrame';

export default function DuolingoScene() {
  return (
    <>
      <Motif className="top-[30px] left-[32px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            className="fill-honey-darker opacity-30"
          />
          <text
            x="10"
            y="14"
            textAnchor="middle"
            fontFamily="Lora,serif"
            fontSize="11"
            className="fill-cream opacity-[0.85]"
          >
            A
          </text>
        </svg>
      </Motif>

      <Motif className="top-[56px] right-[30px]" delay="1.5s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect
            x="3"
            y="3"
            width="12"
            height="12"
            rx="2"
            className="fill-honey-darker opacity-[0.28]"
          />
          <text
            x="9"
            y="13"
            textAnchor="middle"
            fontFamily="Lora,serif"
            fontSize="9"
            className="fill-cream opacity-[0.85]"
          >
            B
          </text>
        </svg>
      </Motif>

      <Motif className="bottom-[36px] left-[50px]" delay="3s">
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <line
            x1="2"
            y1="7"
            x2="20"
            y2="7"
            className="stroke-honey-darker opacity-50"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
        </svg>
      </Motif>

      <PhoneFrame size="lg">
        <div className="font-mono text-[9px] text-ink-3 text-center">9:41</div>
        <div className="h-2.5 bg-cream-2 rounded-full overflow-hidden mt-1">
          <div className="h-full w-[65%] bg-honey-deep rounded-full" />
        </div>
        <div className="bg-cream-2 rounded-lg px-2.5 py-2.5 font-lora text-[11px] text-ink text-center mt-2">
          Translate &quot;the rain in Spain&quot;
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-cream-2 rounded-md px-1.5 py-1.5 text-center text-[9px] font-medium">
            la lluvia en perú
          </div>
          <div className="bg-honey rounded-md px-1.5 py-1.5 text-center text-[9px] font-medium">
            la lluvia en españa
          </div>
          <div className="bg-cream-2 rounded-md px-1.5 py-1.5 text-center text-[9px] font-medium">
            el sol en méxico
          </div>
          <div className="bg-cream-2 rounded-md px-1.5 py-1.5 text-center text-[9px] font-medium">
            el viento en chile
          </div>
        </div>
        <div className="mt-auto bg-honey-darker text-cream text-center py-2 rounded-md text-[9px] font-medium">
          check
        </div>
      </PhoneFrame>
    </>
  );
}
