'use client'

import { useEffect, useRef, useState } from 'react'

// Hopper profit per offer by premium variant
// Data extracted from hopper_casestudy.pdf page 3 (Profit per Offer by Premium chart)
// 80% line (white in PDF) vs 90% line (red in PDF) across 10-20% premium

type ProfitPoint = {
  premium: number // % of fare
  p80: number // $/offer for 80% coverage
  p90: number // $/offer for 90% coverage
}

const DATA: ProfitPoint[] = [
  { premium: 10, p80: 0.05, p90: -1.10 },
  { premium: 11, p80: 0.30, p90: -0.20 },
  { premium: 12, p80: 0.55, p90: 0.30 },
  { premium: 13, p80: 0.75, p90: 0.50 },
  { premium: 14, p80: 0.90, p90: 0.85 },
  { premium: 15, p80: 1.07, p90: 0.75 },
  { premium: 16, p80: 0.92, p90: 0.80 },
  { premium: 17, p80: 1.05, p90: 1.39 },
  { premium: 18, p80: 0.92, p90: 1.20 },
  { premium: 19, p80: 1.00, p90: 1.15 },
  { premium: 20, p80: 0.82, p90: 1.18 },
]

// Geometry
const W = 720
const H = 380
const PAD_L = 56
const PAD_R = 24
const PAD_T = 30
const PAD_B = 56
const Y_MIN = -1.2
const Y_MAX = 1.6

const groupWidth = (W - PAD_L - PAD_R) / DATA.length
const barWidth = (groupWidth - 6) / 2.4
const groupCenter = (i: number) => PAD_L + (i + 0.5) * groupWidth

const yToPx = (y: number) =>
  PAD_T + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * (H - PAD_T - PAD_B)
const ZERO_Y = yToPx(0)

// Premium where 90% becomes the winner (per PDF: 17% is the crossover)
const SWITCH_PREMIUM = 17

export default function HopperProfitByPremiumChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 })

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

  // Helper to render a single bar (handles negative values cleanly)
  const renderBar = (
    value: number,
    cx: number,
    isLeft: boolean,
    fill: string,
    isHovered: boolean,
    delay: number
  ) => {
    const xOffset = isLeft ? -barWidth - 1.5 : 1.5
    const x = cx + xOffset
    const valueY = yToPx(value)
    const top = Math.min(valueY, ZERO_Y)
    const height = Math.abs(valueY - ZERO_Y)

    return (
      <rect
        x={x}
        y={hasAnimated ? top : ZERO_Y}
        width={barWidth}
        height={hasAnimated ? height : 0}
        fill={fill}
        rx={2}
        ry={2}
        style={{
          transition: `y 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, height 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 200ms ease`,
          filter: isHovered ? 'brightness(0.92) saturate(1.15)' : undefined,
        }}
      />
    )
  }

  return (
    <figure
      ref={containerRef}
      className="my-12 not-prose"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      <figcaption className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 mb-5">
        Profit per offer by premium · 80% vs 90% coverage
      </figcaption>

      {/* legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#94B294' }} />
          <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-2">
            80% coverage
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#D8A0A6' }} />
          <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-2">
            90% coverage
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: '#F0DAA8', opacity: 0.5 }}
          />
          <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-3">
            90% wins (17%+)
          </span>
        </div>
      </div>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-4 py-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* switchover zone background — light honey overlay where 90% wins */}
          {(() => {
            const switchIdx = DATA.findIndex((d) => d.premium === SWITCH_PREMIUM)
            if (switchIdx < 0) return null
            const x = PAD_L + switchIdx * groupWidth
            const width = (DATA.length - switchIdx) * groupWidth
            return (
              <rect
                x={x}
                y={PAD_T}
                width={width}
                height={H - PAD_T - PAD_B}
                fill="#F0DAA8"
                opacity={hasAnimated ? 0.22 : 0}
                style={{
                  transition: 'opacity 800ms ease 200ms',
                }}
              />
            )
          })()}

          {/* y-axis gridlines */}
          {[-1.0, -0.5, 0, 0.5, 1.0, 1.5].map((y) => (
            <g key={y}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={yToPx(y)}
                y2={yToPx(y)}
                stroke={y === 0 ? '#888780' : '#E0DCCF'}
                strokeWidth={y === 0 ? 1 : 1}
                strokeDasharray={y === 0 ? undefined : '2 4'}
                opacity={y === 0 ? 0.5 : 1}
              />
              <text
                x={PAD_L - 8}
                y={yToPx(y) + 4}
                textAnchor="end"
                fontFamily="JetBrains Mono, monospace"
                fontSize={10}
                fill="#888780"
              >
                ${y.toFixed(1)}
              </text>
            </g>
          ))}

          {/* bars + delta indicators per group */}
          {DATA.map((d, i) => {
            const cx = groupCenter(i)
            const isHovered = hoveredIdx === i
            const buildDelay = i * 80
            const delta = d.p90 - d.p80
            const ninetyWins = delta > 0 && d.premium >= SWITCH_PREMIUM

            return (
              <g key={i}>
                {/* hover catch — invisible rect over the whole column */}
                <rect
                  x={cx - groupWidth / 2}
                  y={PAD_T}
                  width={groupWidth}
                  height={H - PAD_T - PAD_B}
                  fill="transparent"
                  onMouseEnter={() => setHoveredIdx(i)}
                  style={{ cursor: 'pointer' }}
                />

                {/* 80% bar (left) */}
                {renderBar(d.p80, cx, true, '#94B294', isHovered, buildDelay)}
                {/* 90% bar (right) */}
                {renderBar(d.p90, cx, false, '#D8A0A6', isHovered, buildDelay + 60)}

                {/* delta indicator above bars (only when 90% wins meaningfully) */}
                {ninetyWins && (
                  <g
                    style={{
                      opacity: hasAnimated ? 1 : 0,
                      transition: `opacity 400ms ease ${buildDelay + 700}ms`,
                    }}
                  >
                    <text
                      x={cx}
                      y={yToPx(Math.max(d.p80, d.p90)) - 8}
                      textAnchor="middle"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize={9}
                      fill="#6E8E72"
                      fontWeight={600}
                    >
                      +${delta.toFixed(2)}
                    </text>
                  </g>
                )}

                {/* x-axis label */}
                <text
                  x={cx}
                  y={H - PAD_B + 18}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={10}
                  fill="#888780"
                >
                  {d.premium}%
                </text>
              </g>
            )
          })}

          {/* x-axis label */}
          <text
            x={(W + PAD_L - PAD_R) / 2}
            y={H - 6}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize={10}
            fill="#888780"
            letterSpacing="0.1em"
          >
            PREMIUM (% OF FARE)
          </text>

          {/* switchover marker — vertical dotted line at 17% */}
          {(() => {
            const switchIdx = DATA.findIndex((d) => d.premium === SWITCH_PREMIUM)
            if (switchIdx < 0) return null
            const x = PAD_L + switchIdx * groupWidth
            return (
              <g>
                <line
                  x1={x}
                  x2={x}
                  y1={PAD_T}
                  y2={H - PAD_B}
                  stroke="#A38B58"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  opacity={hasAnimated ? 0.65 : 0}
                  style={{
                    transition: 'opacity 600ms ease 1200ms',
                  }}
                />
                <text
                  x={x + 4}
                  y={PAD_T + 12}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={9}
                  fill="#A38B58"
                  letterSpacing="0.06em"
                  opacity={hasAnimated ? 1 : 0}
                  style={{
                    transition: 'opacity 600ms ease 1500ms',
                  }}
                >
                  90% TAKES OVER
                </text>
              </g>
            )
          })()}
        </svg>

        {/* hover pill */}
        {hoveredIdx !== null && (
          <div
            className="pointer-events-none absolute z-10 bg-ink text-cream font-mono text-[10px] uppercase tracking-mono-wider px-3 py-2 rounded-md whitespace-nowrap"
            style={{
              left: `${hoverPos.x + 14}px`,
              top: `${hoverPos.y - 6}px`,
              transform: 'translate(0, -100%)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            }}
          >
            <div className="text-ink-3 mb-1">Premium {DATA[hoveredIdx].premium}% of fare</div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="inline-block w-2 h-2 rounded-sm" style={{ backgroundColor: '#94B294' }} />
              <span>80%: ${DATA[hoveredIdx].p80.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-sm" style={{ backgroundColor: '#D8A0A6' }} />
              <span>90%: ${DATA[hoveredIdx].p90.toFixed(2)}</span>
            </div>
            {(() => {
              const delta = DATA[hoveredIdx].p90 - DATA[hoveredIdx].p80
              return (
                <div
                  className="mt-1"
                  style={{ color: delta > 0 ? '#B8CFB7' : '#D8A0A6' }}
                >
                  Δ {delta > 0 ? '+' : ''}${delta.toFixed(2)}
                </div>
              )
            })()}
          </div>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        90% only beats 80% above 17% premium. Below it, 90% bleeds money.
      </p>
    </figure>
  )
}
