import type { ReactNode } from 'react';

export type Tilt = 't1' | 't2' | 't3' | 't4';

interface StickyNoteProps {
  tilt: Tilt;
  cursorText: string;
  className?: string;
  children: ReactNode;
}

export default function StickyNote({
  tilt,
  cursorText,
  className,
  children,
}: StickyNoteProps) {
  const classes = ['sticky-note', tilt, className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-cursor="" data-cursor-text={cursorText}>
      {children}
    </div>
  );
}
