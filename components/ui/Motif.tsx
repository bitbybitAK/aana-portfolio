import type { CSSProperties, ReactNode } from 'react';

type Variant = 'drift' | 'plane';

interface MotifProps {
  variant?: Variant;
  className?: string;
  delay?: string;
  duration?: string;
  children: ReactNode;
}

const VARIANT_CLASS: Record<Variant, string> = {
  drift: 'animate-motif-drift',
  plane: 'animate-plane-drift',
};

export default function Motif({
  variant = 'drift',
  className,
  delay,
  duration,
  children,
}: MotifProps) {
  const style: CSSProperties = {};
  if (delay) style.animationDelay = delay;
  if (duration) style.animationDuration = duration;

  const classes = ['absolute', VARIANT_CLASS[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
