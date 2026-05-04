'use client';

import { useEffect, useRef } from 'react';
import FireflyMark from '@/components/ui/FireflyMark';

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
        <FireflyMark />
      </div>
      <div ref={msgRef} className="firefly-msg" aria-live="polite" />
    </>
  );
}
