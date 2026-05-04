'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/entry.css';

const DUST_TINTS = [
  'rgba(140,110,90,0.42)',
  'rgba(140,110,90,0.32)',
  'rgba(180,150,130,0.42)',
  'rgba(216,174,137,0.50)',
  'rgba(184,168,204,0.42)',
  'rgba(140,110,90,0.22)',
];

const PETAL_COLORS = ['#F2D5D2', '#F5D5BC', '#DCD3E8', '#F4E5C8'];

const petalSvg = (color: string) =>
  `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1 C 11 4, 13 9, 11 14 C 9.5 17, 4.5 17, 3 14 C 1 9, 3 4, 7 1 Z" fill="${color}" opacity="0.55"/></svg>`;

const HEADLINE_TEXT = 'Aana Khanduri';
const QUOTE_TEXT = 'Following quiet curiosities into thoughtful products.';

const DISPERSE_RADIUS = 130;
const DISPERSE_MAX = 18;
const BLUR_MAX = 1.6;

function splitInto(el: HTMLElement, text: string) {
  el.textContent = '';
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const span = document.createElement('span');
    span.className = 'ch' + (c === ' ' ? ' space' : '');
    span.textContent = c === ' ' ? ' ' : c;
    el.appendChild(span);
  }
}

export default function EntryPage() {
  const router = useRouter();
  const particlesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const charsRef = useRef<HTMLElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [clockText, setClockText] = useState('—:—:—');
  const [isExiting, setIsExiting] = useState(false);

  // Particle generation — runs once on mount, cleans up on unmount.
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 90; i++) {
      const d = document.createElement('div');
      d.className = 'dust';
      const size = Math.random() * 3 + 1.2;
      d.style.width = `${size}px`;
      d.style.height = `${size}px`;
      d.style.left = `${Math.random() * 100}vw`;
      d.style.top = `${Math.random() * 100}vh`;
      d.style.background = DUST_TINTS[Math.floor(Math.random() * DUST_TINTS.length)];
      d.style.setProperty('--opa', (0.3 + Math.random() * 0.55).toFixed(2));
      d.style.setProperty('--dx1', `${(Math.random() * 80 - 40).toFixed(0)}px`);
      d.style.setProperty('--dy1', `${(Math.random() * 80 - 40).toFixed(0)}px`);
      d.style.setProperty('--dx2', `${(Math.random() * 100 - 50).toFixed(0)}px`);
      d.style.setProperty('--dy2', `${(Math.random() * 100 - 50).toFixed(0)}px`);
      d.style.setProperty('--dx3', `${(Math.random() * 80 - 40).toFixed(0)}px`);
      d.style.setProperty('--dy3', `${(Math.random() * 80 - 40).toFixed(0)}px`);
      d.style.setProperty('--dur', `${(14 + Math.random() * 18).toFixed(0)}s`);
      d.style.setProperty('--delay', `${(Math.random() * 14).toFixed(1)}s`);
      container.appendChild(d);
    }

    for (let i = 0; i < 7; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      p.innerHTML = petalSvg(PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]);
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = '-40px';
      p.style.setProperty('--dx', `${(Math.random() * 200 - 100).toFixed(0)}px`);
      p.style.setProperty('--rot', `${(Math.random() * 540 - 270).toFixed(0)}deg`);
      p.style.setProperty('--dur', `${(24 + Math.random() * 18).toFixed(0)}s`);
      p.style.setProperty('--delay', `${(Math.random() * 30).toFixed(1)}s`);
      container.appendChild(p);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Letter splitting — runs once after mount, caches the dispersible NodeList.
  useEffect(() => {
    if (headlineRef.current) splitInto(headlineRef.current, HEADLINE_TEXT);
    if (quoteRef.current) splitInto(quoteRef.current, QUOTE_TEXT);

    const all: HTMLElement[] = [];
    const collect = (root: HTMLElement | null) => {
      if (!root) return;
      root.querySelectorAll<HTMLElement>('.ch:not(.space)').forEach((n) => all.push(n));
    };
    collect(headlineRef.current);
    collect(quoteRef.current);
    charsRef.current = all;
  }, []);

  // Cursor follow + letter dispersion — single RAF loop.
  useEffect(() => {
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dotX = mouseRef.current.x;
    let dotY = mouseRef.current.y;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const tick = () => {
      const { x: mx, y: my } = mouseRef.current;
      dotX += (mx - dotX) * 0.18;
      dotY += (my - dotY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      const chars = charsRef.current;
      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        const r = ch.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DISPERSE_RADIUS) {
          const strength = 1 - dist / DISPERSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          const offsetX = -Math.cos(angle) * DISPERSE_MAX * strength;
          const offsetY = -Math.sin(angle) * DISPERSE_MAX * strength;
          const blur = BLUR_MAX * strength;
          const fade = 1 - strength * 0.35;
          ch.style.transform = `translate(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px)`;
          ch.style.filter = `blur(${blur.toFixed(2)}px)`;
          ch.style.opacity = fade.toFixed(3);
        } else if (ch.style.transform) {
          ch.style.transform = '';
          ch.style.filter = '';
          ch.style.opacity = '';
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Real-time clock — initial state matches SSR; interval kicks in on mount.
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setClockText(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCtaEnter = () => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.add('expanded');
    cursorRef.current.textContent = 'enter';
  };

  const handleCtaLeave = () => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.remove('expanded');
    cursorRef.current.textContent = '';
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow middle-click / cmd-click / ctrl-click to open in a new tab naturally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      router.push('/home');
    }, 1100);
  };

  return (
    <div className={`entry-page${isExiting ? ' exiting' : ''}`}>
      <div className="orb-wrap">
        <div className="orb-halo" />
        <div className="orb-mid" />
        <div className="orb-core" />
      </div>
      <div className="orb-secondary" />

      <div className="particles" ref={particlesRef} />

      <div className="cursor-dot" ref={cursorRef} />

      <div className="stage">
        <div className="stack">
          <div className="eyebrow">the field notebook of</div>
          <h1 className="headline" ref={headlineRef}>
            {HEADLINE_TEXT}
          </h1>
          <p className="quote" ref={quoteRef}>
            {QUOTE_TEXT}
          </p>
          <div className="spacer-dot" />
          <a
            href="/home"
            className="cta"
            data-cursor=""
            data-cursor-text="enter"
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            onClick={handleCtaClick}
          >
            come on in
          </a>
        </div>
      </div>

      <div className="foot-l">
        <span className="clock">{clockText}</span>
        <span className="status">
          <span className="dot" />
          <span>writing notebook · vol. i</span>
        </span>
      </div>
      <div className="foot-r">
        san francisco
        <br />
        37.77° N · 122.42° W
      </div>
    </div>
  );
}
