import { about } from '@/content/about';
import type { CSSProperties } from 'react';
import type { HeroPhoto } from '@/types/content';

interface SlotConfig {
  width: string;
  height: string;
  top: string;
  left: string;
  rotate: string;
  z: number;
  delay: string;
}

const SLOTS: Record<HeroPhoto['slot'], SlotConfig> = {
  1: { width: '280px', height: '340px', top: '36px',  left: '0',     rotate: '-6deg', z: 2, delay: '0s'   },
  2: { width: '320px', height: '240px', top: '0',     left: '270px', rotate: '4deg',  z: 1, delay: '1.2s' },
  3: { width: '240px', height: '290px', top: '70px',  left: '600px', rotate: '-3deg', z: 3, delay: '2.4s' },
  4: { width: '200px', height: '200px', top: '220px', left: '320px', rotate: '8deg',  z: 2, delay: '3.6s' },
};

const ACCENT_GRADIENT: Record<HeroPhoto['accent'], string> = {
  sage:   'bg-gradient-to-br from-sage   to-sage-deep',
  pink:   'bg-gradient-to-br from-pink   to-pink-deep',
  powder: 'bg-gradient-to-br from-powder to-powder-deep',
  honey:  'bg-gradient-to-br from-honey  to-honey-deep',
  lilac:  'bg-gradient-to-br from-lilac  to-lilac-deep',
  peach:  'bg-gradient-to-br from-peach  to-peach-deep',
};

export default function HeroPhotos() {
  return (
    <div className="hero-photos relative h-[420px] mt-6 w-full min-w-[920px]">
      {about.heroPhotos.map((photo) => {
        const slot = SLOTS[photo.slot];
        const style: CSSProperties = {
          width: slot.width,
          height: slot.height,
          top: slot.top,
          left: slot.left,
          zIndex: slot.z,
          animationDelay: slot.delay,
          transform: `rotate(${slot.rotate})`,
          ['--r' as string]: `rotate(${slot.rotate})`,
        };
        return (
          <div
            key={photo.id}
            className={`hero-photo ${ACCENT_GRADIENT[photo.accent]}`}
            data-cursor=""
            data-cursor-text={photo.cursorText}
            style={style}
          >
            <img
              src={photo.photo}
              alt={photo.caption}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="hero-photo-caption">{photo.caption}</div>
          </div>
        );
      })}
    </div>
  );
}
