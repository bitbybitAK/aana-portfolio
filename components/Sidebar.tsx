'use client';

import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { site } from '@/content/site';
import StatusRotator from '@/components/ui/StatusRotator';

const SCROLL_OFFSET = 200;

export default function Sidebar() {
  const navLinks = site.sidebar.navLinks;
  const [activeSection, setActiveSection] = useState(navLinks[0]?.sectionId ?? '');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);

    const updateActive = () => {
      const scrollPos = window.scrollY + SCROLL_OFFSET;
      let active = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollPos) active = id;
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, [navLinks]);

  const onNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="sticky top-0 h-screen px-9 pt-12 pb-10 flex flex-col bg-cream-2 border-r border-border z-50">
      <div className="font-lora text-[32px] font-normal leading-[1.05] tracking-display mb-1.5 text-ink">
        {site.sidebar.name}
      </div>
      <div className="font-lora italic text-[13px] text-ink-3 leading-[1.45] mb-12">
        {site.sidebar.taglinePlaceholder}
      </div>

      <div className="bg-cream-3 rounded-[14px] pt-[18px] pb-3.5 px-3.5 mb-14">
        <span className="block font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-ink-3 px-1 pb-3.5">
          {site.sidebar.exploreLabel}
        </span>
        <nav className="flex flex-col">
          {navLinks.map((link) => {
            const isActive = link.sectionId === activeSection;
            return (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => onNavClick(e, link.sectionId)}
                data-cursor=""
                data-cursor-text="jump"
                className={[
                  'flex items-baseline gap-3.5 py-3.5 px-3.5 rounded-[10px] no-underline',
                  'transition-all duration-[400ms] ease-out-soft',
                  isActive
                    ? 'bg-honey text-ink'
                    : 'text-ink-2 hover:bg-black/[0.04]',
                ].join(' ')}
              >
                <span
                  className={[
                    'font-mono text-[10px] tracking-[0.1em] w-[18px]',
                    'transition-colors duration-[400ms]',
                    isActive ? 'text-honey-darker' : 'text-ink-3',
                  ].join(' ')}
                >
                  {link.number}
                </span>
                <span className="font-inter text-[14px] font-medium tracking-[0.005em] flex-1">
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto pb-6">
        <div className="font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-3">
          {site.sidebar.findMeAtLabel}
        </div>
        <div className="flex gap-3.5 flex-wrap">
          {site.socials.map((social) => {
            const isExternal = !social.url.startsWith('mailto:');
            return (
              <a
                key={social.label}
                href={social.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                data-cursor=""
                data-cursor-text={social.label}
                className="text-[13px] text-ink no-underline border-b border-transparent hover:border-honey-deep hover:text-honey-deep transition-colors duration-300"
              >
                {social.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-cream-2 rounded-[10px] px-4 py-3.5 mb-[18px] min-h-[76px]">
        <div className="font-mono text-[9px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-deep animate-status-pulse" />
          {site.sidebar.currentlyWorkingOnLabel}
        </div>
        <StatusRotator
          messages={site.sidebar.status.messages}
          rotationMs={site.sidebar.status.rotationMs}
        />
      </div>
    </aside>
  );
}
