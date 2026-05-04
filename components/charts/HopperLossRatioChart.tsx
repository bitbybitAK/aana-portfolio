'use client'

import { useEffect, useRef, useState } from 'react'

// Hopper loss ratio by premium variant
// Data extracted from hopper_casestudy.pdf page 3 (Loss Ratio by Premium chart)
type Variant = {
  id: string
  label: string
  color: string
  // [premium %, loss ratio %] pairs
  points: [number, number][]
}

const VARIANTS: Variant[] = [
  {
    id: '80',
    label: '80% coverage',
    color: '#6E8E72', // sage-darker
    points: [
      [10, 96], [11, 93], [12, 86], [13, 78], [14, 73], [15, 66],
      [16, 73], [17, 60], [18, 64], [19, 58], [20, 60],
    ],
  },
  {
    id: '90',
    label: '90% coverage',
    color: '#B47C82', // pink-darker
    points: [
      [10, 134], [11, 108], [12, 92], [13, 86], [14, 81], [15, 78],
      [16, 79], [17, 60], [18, 62], [19, 63], [20, 61],
    ],
  },
]

// Healthy loss-ratio band: 65-75%
const HEALTHY_BAND_LOW = 65
const HEALTHY_BAND_HIGH = 75

// Geometry
const W = 720
const H = 380
const PAD_L = 56
const PAD_R = 24
const PAD_T = 24
const PAD_B = 44
const X_MIN = 10
const X_MAX = 20
const Y_MIN = 50
const Y_MAX = 140

const xToPx = (x: number) => PAD_L + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - PAD_L - PAD_R)
const yToPx = (y: number) => PAD_T + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * (H - PAD_T - PAD_B)

const buildPath = (points: [number, number][]): string =>
  points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${xToPx(x)} ${yToPx(y)}`)
    .join(' ')

export default function HopperLossRatioChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredPremium, setHoveredPremium] = useState<number | null>(null)
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

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget
    const rect = svg.getBoundingClientRect()
    const xPx = ((e.clientX - rect.left) / rect.width) * W
    if (xPx < PAD_L || xPx > W - PAD_R) {
      setHoveredPremium(null)
      return
    }
    const premium = Math.round(((xPx - PAD_L) / (W - PAD_L - PAD_R)) * (X_MAX - X_MIN) + X_MIN)
    if (premium < X_MIN || premium > X_MAX) {
      setHoveredPremium(null)
      return
    }
    setHoveredPremium(premium)
    setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  // get loss ratio at exact premium for a variant
  const getLossRatio = (variant: Variant, premium: number): number => {
    const pts = variant.points
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i]
      const [x2, y2] = pts[i + 1]
      if (premium >= x1 && premium <= x2) {
        const t = (premium - x1) / (x2 - x1)
        return Math.round(y1 + (y2 - y1) * t)
      }
    }
    return pts[pts.length - 1][1]
  }

  return (
    <figure ref={containerRef} className="my-12 not-prose">
      <figcaption className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 mb-5">
        Loss ratio by premium · 80% vs 90% coverage
      </figcaption>

      {/* legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
        {VARIANTS.map((v) => (
          <div key={v.id} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: v.color }}
            />
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-2">
              {v.label}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: '#F0DAA8', opacity: 0.5 }}
          />
          <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-3">
            healthy band (65–75%)
          </span>
        </div>
      </div>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-4 py-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredPremium(null)}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* healthy band overlay */}
          <rect
            x={PAD_L}
            y={yToPx(HEALTHY_BAND_HIGH)}
            width={W - PAD_L - PAD_R}
            height={yToPx(HEALTHY_BAND_LOW) - yToPx(HEALTHY_BAND_HIGH)}
            fill="#F0DAA8"
            opacity={hasAnimated ? 0.32 : 0}
            style={{
              transition: 'opacity 800ms ease 200ms',
            }}
          />
          <text
            x={W - PAD_R - 8}
            y={yToPx(HEALTHY_BAND_HIGH) - 6}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize={9}
            fill="#A38B58"
            opacity={hasAnimated ? 1 : 0}
            style={{
              transition: 'opacity 800ms ease 800ms',
            }}
          >
            HEALTHY BAND
          </text>

          {/* y-axis gridlines */}
          {[60, 80, 100, 120, 140].map((y) => (
            <g key={y}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={yToPx(y)}
                y2={yToPx(y)}
                stroke="#E0DCCF"
                strokeWidth={1}
                strokeDasharray="2 4"
              />
              <text
                x={PAD_L - 8}
                y={yToPx(y) + 4}
                textAnchor="end"
                fontFamily="JetBrains Mono, monospace"
                fontSize={10}
                fill="#888780"
              >
                {y}%
              </text>
            </g>
          ))}

          {/* x-axis tick labels */}
          {[10, 12, 14, 16, 18, 20].map((x) => (
            <text
              key={x}
              x={xToPx(x)}
              y={H - PAD_B + 20}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize={10}
              fill="#888780"
            >
              {x}%
            </text>
          ))}

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

          {/* hover guide line */}
          {hoveredPremium !== null && (
            <line
              x1={xToPx(hoveredPremium)}
              x2={xToPx(hoveredPremium)}
              y1={PAD_T}
              y2={H - PAD_B}
              stroke="#888780"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.5}
            />
          )}

          {/* variant lines with stroke-dashoffset trace */}
          {VARIANTS.map((v, i) => {
            const path = buildPath(v.points)
            const approxLen = (W - PAD_L - PAD_R) * 1.5

            return (
              <g key={v.id}>
                <path
                  d={path}
                  fill="none"
                  stroke={v.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={approxLen}
                  strokeDashoffset={hasAnimated ? 0 : approxLen}
                  style={{
                    transition: `stroke-dashoffset 1500ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 250 + 400}ms`,
                  }}
                />
                {/* point markers */}
                {v.points.map(([px, py], j) => (
                  <circle
                    key={j}
                    cx={xToPx(px)}
                    cy={yToPx(py)}
                    r={3}
                    fill={v.color}
                    opacity={hasAnimated ? 1 : 0}
                    style={{
                      transition: `opacity 300ms ease ${1500 + i * 250 + j * 60}ms`,
                    }}
                  />
                ))}
                {/* hover dot at hovered premium */}
                {hoveredPremium !== null && hasAnimated && (
                  <circle
                    cx={xToPx(hoveredPremium)}
                    cy={yToPx(getLossRatio(v, hoveredPremium))}
                    r={5.5}
                    fill={v.color}
                    stroke="#FAFAF7"
                    strokeWidth={2}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* hover pill */}
        {hoveredPremium !== null && (
          <div
            className="pointer-events-none absolute z-10 bg-ink text-cream font-mono text-[10px] uppercase tracking-mono-wider px-3 py-2 rounded-md whitespace-nowrap"
            style={{
              left: `${hoverPos.x + 12}px`,
              top: `${hoverPos.y + 14}px`,
              boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            }}
          >
            <div className="text-ink-3 mb-1">Premium {hoveredPremium}% of fare</div>
            {VARIANTS.map((v) => (
              <div key={v.id} className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-sm"
                  style={{ backgroundColor: v.color }}
                />
                <span>
                  {v.label.replace(' coverage', '')}: {getLossRatio(v, hoveredPremium)}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        80% stays inside the healthy 65–75% band. 90% only crosses into safe pricing past 17% premium.
      </p>
    </figure>
  )
}
