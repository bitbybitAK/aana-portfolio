'use client'

import { useEffect, useRef, useState } from 'react'

// Cal AI activation funnel — first session onboarding
// Data from CalAI.pdf page 3 (First Session Onboarding Funnel)
type FunnelRow = {
  label: string
  value: number       // percentage retained at this step
  drop?: number       // drop-off from previous step, if notable
}

const FUNNEL_DATA: FunnelRow[] = [
  { label: 'Install', value: 100 },
  { label: 'Open app', value: 87 },
  { label: 'Complete profile', value: 72 },
  { label: 'Set goal', value: 64 },
  { label: 'Camera permission', value: 51, drop: 20 },
  { label: 'First scan', value: 38, drop: 25 },
  { label: 'See result', value: 34 },
  { label: 'Second meal', value: 16, drop: 53 },
]

export default function CalAiFunnelChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <figure
      ref={containerRef}
      className="my-12 not-prose"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      <figcaption className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 mb-5">
        First-session onboarding funnel
      </figcaption>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-7 py-7">
        {/* rows */}
        <div className="flex flex-col gap-3">
          {FUNNEL_DATA.map((row, i) => {
            const isPainful = !!row.drop
            const isHovered = hoveredIdx === i

            return (
              <div
                key={row.label}
                className="grid grid-cols-[140px_1fr_auto] gap-4 items-center"
                onMouseEnter={() => setHoveredIdx(i)}
              >
                {/* label */}
                <div
                  className="font-inter text-sm text-ink-2 text-right transition-colors duration-300"
                  style={{
                    color: isHovered ? '#1A1A1A' : undefined,
                  }}
                >
                  {row.label}
                </div>

                {/* bar track */}
                <div className="relative h-7 bg-cream-3 rounded-md overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-md transition-all"
                    style={{
                      width: hasAnimated ? `${row.value}%` : '0%',
                      backgroundColor: isPainful ? '#D8A0A6' : '#94B294',
                      transitionDuration: '900ms',
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: `${i * 90}ms`,
                      filter: isHovered ? 'brightness(0.94) saturate(1.1)' : undefined,
                    }}
                  />
                </div>

                {/* value + dropoff */}
                <div className="flex items-baseline gap-3 min-w-[110px] justify-end">
                  <span className="font-inter text-sm font-medium text-ink tabular-nums">
                    {row.value}%
                  </span>
                  {row.drop && (
                    <span
                      className="font-mono text-[11px] text-pink-darker tabular-nums"
                      style={{
                        opacity: hasAnimated ? 1 : 0,
                        transition: 'opacity 500ms ease',
                        transitionDelay: `${i * 90 + 600}ms`,
                      }}
                    >
                      −{row.drop}%
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* hover pill */}
        {hoveredIdx !== null && (
          <div
            className="pointer-events-none absolute z-10 bg-ink text-cream font-mono text-[10px] uppercase tracking-mono-wider px-3 py-2 rounded-md whitespace-nowrap"
            style={{
              left: `${mousePos.x + 14}px`,
              top: `${mousePos.y - 6}px`,
              transform: 'translate(0, -100%)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            }}
          >
            {FUNNEL_DATA[hoveredIdx].label}: {FUNNEL_DATA[hoveredIdx].value}% retained
            {FUNNEL_DATA[hoveredIdx].drop && (
              <> · {FUNNEL_DATA[hoveredIdx].drop}% drop</>
            )}
          </div>
        )}
      </div>

      {/* footnote */}
      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        Only 16% of installs log a second meal. The funnel kills users before activation.
      </p>
    </figure>
  )
}
