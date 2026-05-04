'use client'

import { useEffect, useRef, useState } from 'react'

// Cal AI retention curves by activation behavior
// Data from CalAI.pdf page 2 (Retention by Activation Behavior)
type Cohort = {
  id: string
  label: string
  color: string
  // [day, retention%] pairs
  points: [number, number][]
}

const COHORTS: Cohort[] = [
  {
    id: 'three-plus',
    label: '3+ camera scans / 48hr',
    color: '#94B294', // sage-deep
    points: [
      [0, 100], [1, 82], [3, 76], [7, 72], [14, 68], [21, 64], [30, 61],
    ],
  },
  {
    id: 'one-two',
    label: '1-2 camera scans / 48hr',
    color: '#D4B97E', // honey-deep
    points: [
      [0, 100], [1, 55], [3, 44], [7, 38], [14, 30], [21, 23], [30, 19],
    ],
  },
  {
    id: 'manual',
    label: 'Manual entry only',
    color: '#A0B4C5', // powder-deep
    points: [
      [0, 100], [1, 31], [3, 24], [7, 19], [14, 13], [21, 9], [30, 6],
    ],
  },
  {
    id: 'none',
    label: 'No logging in 48hr',
    color: '#D8A0A6', // pink-deep
    points: [
      [0, 100], [1, 18], [3, 12], [7, 8], [14, 5], [21, 3], [30, 2],
    ],
  },
]

// chart geometry
const W = 720
const H = 360
const PAD_L = 48
const PAD_R = 24
const PAD_T = 16
const PAD_B = 40
const X_MAX = 30
const Y_MAX = 100

const xToPx = (x: number) => PAD_L + (x / X_MAX) * (W - PAD_L - PAD_R)
const yToPx = (y: number) => PAD_T + ((Y_MAX - y) / Y_MAX) * (H - PAD_T - PAD_B)

const buildPath = (points: [number, number][]): string =>
  points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${xToPx(x)} ${yToPx(y)}`)
    .join(' ')

export default function CalAiRetentionChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredDay, setHoveredDay] = useState<number | null>(null)
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
      setHoveredDay(null)
      return
    }
    const day = Math.round(((xPx - PAD_L) / (W - PAD_L - PAD_R)) * X_MAX)
    if (day < 0 || day > 30) {
      setHoveredDay(null)
      return
    }
    setHoveredDay(day)
    setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  // get retention at a given day for each cohort (linear interp between known points)
  const getRetention = (cohort: Cohort, day: number): number => {
    const pts = cohort.points
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i]
      const [x2, y2] = pts[i + 1]
      if (day >= x1 && day <= x2) {
        const t = (day - x1) / (x2 - x1)
        return Math.round(y1 + (y2 - y1) * t)
      }
    }
    return pts[pts.length - 1][1]
  }

  return (
    <figure ref={containerRef} className="my-12 not-prose">
      <figcaption className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 mb-5">
        Retention by activation behavior
      </figcaption>

      {/* legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
        {COHORTS.map((c) => (
          <div key={c.id} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: c.color }}
            />
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-ink-2">
              {c.label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-4 py-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredDay(null)}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* y-axis gridlines */}
          {[0, 20, 40, 60, 80, 100].map((y) => (
            <g key={y}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={yToPx(y)}
                y2={yToPx(y)}
                stroke="#E0DCCF"
                strokeWidth={1}
                strokeDasharray={y === 0 ? undefined : '2 4'}
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
          {[0, 7, 14, 21, 30].map((x) => (
            <text
              key={x}
              x={xToPx(x)}
              y={H - PAD_B + 18}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize={10}
              fill="#888780"
            >
              {x === 0 ? 'install' : `D${x}`}
            </text>
          ))}

          {/* hover guide line */}
          {hoveredDay !== null && (
            <line
              x1={xToPx(hoveredDay)}
              x2={xToPx(hoveredDay)}
              y1={PAD_T}
              y2={H - PAD_B}
              stroke="#888780"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.55}
            />
          )}

          {/* cohort lines — animated stroke-dashoffset for trace effect */}
          {COHORTS.map((c, i) => {
            const path = buildPath(c.points)
            // approximate path length for the dash trick (2x the chart width is plenty)
            const approxLen = (W - PAD_L - PAD_R) * 1.2

            return (
              <g key={c.id}>
                <path
                  d={path}
                  fill="none"
                  stroke={c.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={approxLen}
                  strokeDashoffset={hasAnimated ? 0 : approxLen}
                  style={{
                    transition: `stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 200}ms`,
                  }}
                />
                {/* end point dot */}
                <circle
                  cx={xToPx(c.points[c.points.length - 1][0])}
                  cy={yToPx(c.points[c.points.length - 1][1])}
                  r={4}
                  fill={c.color}
                  opacity={hasAnimated ? 1 : 0}
                  style={{
                    transition: `opacity 400ms ease ${1400 + i * 200}ms`,
                  }}
                />
                {/* hover dot at hovered day */}
                {hoveredDay !== null && hasAnimated && (
                  <circle
                    cx={xToPx(hoveredDay)}
                    cy={yToPx(getRetention(c, hoveredDay))}
                    r={5}
                    fill={c.color}
                    stroke="#FAFAF7"
                    strokeWidth={2}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* hover pill */}
        {hoveredDay !== null && (
          <div
            className="pointer-events-none absolute z-10 bg-ink text-cream font-mono text-[10px] uppercase tracking-mono-wider px-3 py-2 rounded-md whitespace-nowrap"
            style={{
              left: `${hoverPos.x + 12}px`,
              top: `${hoverPos.y + 14}px`,
              boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            }}
          >
            <div className="text-ink-3 mb-1">Day {hoveredDay}</div>
            {COHORTS.map((c) => (
              <div key={c.id} className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-sm"
                  style={{ backgroundColor: c.color }}
                />
                <span>{getRetention(c, hoveredDay)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        Lift flattens after 3 scans. The 48hr window holds even when controlling for demographics and install source.
      </p>
    </figure>
  )
}
