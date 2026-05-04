import type { ReactNode } from 'react';

type Size = 'lg' | 'md';

interface PhoneFrameProps {
  size: Size;
  flush?: boolean;
  children: ReactNode;
}

const SIZE_CLASS: Record<Size, string> = {
  lg: 'w-[158px] h-[290px]',
  md: 'w-[140px] h-[250px]',
};

export default function PhoneFrame({ size, flush = false, children }: PhoneFrameProps) {
  const screenClass = flush
    ? 'bg-cream w-full h-full rounded-[21px] overflow-hidden relative'
    : 'bg-cream w-full h-full rounded-[21px] px-[11px] py-3.5 flex flex-col gap-1.5 overflow-hidden';

  return (
    <div
      className={`bg-ink rounded-[26px] p-1.5 shadow-phone z-[2] relative ${SIZE_CLASS[size]}`}
    >
      <div className={screenClass}>{children}</div>
    </div>
  );
}
