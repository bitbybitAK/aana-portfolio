'use client';

import { useEffect, useRef } from 'react';

const LERP = 0.18;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      dotX += (mouseX - dotX) * LERP;
      dotY += (mouseY - dotY) * LERP;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      dot.classList.add('expanded');
      dot.textContent = el.dataset.cursorText ?? 'view';
    };

    const onLeave = () => {
      dot.classList.remove('expanded');
      dot.textContent = '';
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>('[data-cursor]'),
    );
    triggers.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      triggers.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
