import type { Accent, Community } from '@/types/content';

const ICON_CLASS: Record<Accent, string> = {
  sage:   'bg-sage-deep/40   text-sage-darker',
  pink:   'bg-pink-deep/50   text-pink-darker',
  powder: 'bg-powder-deep/55 text-powder-darker',
  honey:  'bg-honey-deep/50  text-honey-darker',
  lilac:  'bg-lilac-deep/50  text-ink-2',
  peach:  'bg-peach-deep/50  text-ink-2',
};

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <div className="bg-paper rounded-[12px] px-6 py-5 flex flex-col gap-2.5 aspect-square">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-lg font-lora text-[18px] font-medium ${ICON_CLASS[community.accent]}`}
      >
        {community.icon}
      </div>
      <div className="font-lora text-[17px] leading-[1.2] font-medium text-ink">
        {community.name}
      </div>
      <div className="text-[12px] leading-[1.6] text-ink-2 flex-1">
        {community.body}
      </div>
    </div>
  );
}
