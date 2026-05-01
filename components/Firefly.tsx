'use client';

import { useEffect, useRef } from 'react';

const PROMPTS = [
  "I'm so happy you're here.",
  'this is not a button.',
  'ooh, baited, you got me.',
  'okay, now actually stop it.',
  "you're really committed huh.",
  'fine. I keep flying.',
];

const BUBBLE_MS = 4000;

export default function Firefly() {
  const fireflyRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);
  const clickCountRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const firefly = fireflyRef.current;
    const msg = msgRef.current;
    if (!firefly || !msg) return;

    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      const idx = clickCountRef.current % PROMPTS.length;
      msg.textContent = PROMPTS[idx];

      const r = firefly.getBoundingClientRect();
      msg.style.left = `${r.left + r.width / 2}px`;
      msg.style.top = `${r.top - 50}px`;
      msg.style.transform = 'translateX(-50%) translateY(0)';

      msg.classList.add('show');
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        () => msg.classList.remove('show'),
        BUBBLE_MS,
      );
      clickCountRef.current += 1;
    };

    firefly.addEventListener('click', onClick);
    return () => {
      firefly.removeEventListener('click', onClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={fireflyRef}
        className="firefly"
        data-cursor=""
        data-cursor-text="click me"
        role="button"
        aria-label="firefly"
      >
        <svg width="52" height="42" viewBox="0 0 40 32" fill="none">
          <ellipse className="firefly-wing" cx="14" cy="16" rx="7.5" ry="4.5" opacity="0.65" />
          <ellipse className="firefly-wing" cx="14" cy="22" rx="6.5" ry="3.5" opacity="0.55" />
          <ellipse className="firefly-wing" cx="27" cy="16" rx="7" ry="4" opacity="0.65" />
          <ellipse className="firefly-wing" cx="27" cy="22" rx="6" ry="3.2" opacity="0.55" />
          <ellipse className="firefly-body" cx="20" cy="18" rx="7.5" ry="6" />
          <ellipse className="firefly-glow" cx="28" cy="20" rx="5" ry="3.8" />
          <line className="firefly-antenna" x1="20" y1="13" x2="17" y2="6" strokeWidth="0.8" />
          <line className="firefly-antenna" x1="20" y1="13" x2="23" y2="6" strokeWidth="0.8" />
          <circle className="firefly-body" cx="17" cy="6" r="1.1" />
          <circle className="firefly-body" cx="23" cy="6" r="1.1" />
        </svg>
      </div>
      <div ref={msgRef} className="firefly-msg" aria-live="polite" />
    </>
  );
}
