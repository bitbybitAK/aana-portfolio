'use client'

import { useEffect, useRef, useState } from 'react'

// Cal AI ARR impact waterfall
// Data from CalAI.pdf page 6 — ARR Impact of Proposed Fixes
// Current $2.87M → +$0.39M (Fix Funnel) → +$0.22M (Fix Ghost Meals) → +$0.18M (Muscle Segment) → $3.66M Projected

type Step = {
  id: string
  label: string
  type: 'baseline' | 'increment' | 'total'
  // For baseline/total: the absolute value
  // For increment: the contribution
  value: number
  // The running total AFTER this step (used to position the bar top)
  cumulativeTop: number
}

const STEPS: Step[] = [
  { id: 'current', label: 'Current ARR', type: 'baseline', value: 2.87, cumulativeTop: 2.87 },
  { id: 'funnel', label: 'Fix funnel', type: 'increment', value: 0.39, cumulativeTop: 3.26 },
  { id: 'ghost', label: 'Fix ghost meals', type: 'increment', value: 0.22, cumulativeTop: 3.48 },
  { id: 'muscle', label: 'Muscle segment', type: 'increment', value: 0.18, cumulativeTop: 3.66 },
  { id: 'projected', label: 'Projected ARR', type: 'total', value: 3.66, cumulativeTop: 3.66 },
]

// Geometry
const W = 720
const H = 380
const PAD_L = 56
const PAD_R = 24
const PAD_T = 30
const PAD_B = 56
const Y_MAX = 4.0 // in millions, give some headroom above 3.66
const Y_MIN = 0

const yToPx = (y: number) =>
  PAD_T + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * (H - PAD_T - PAD_B)

const BAR_WIDTH = (W - PAD_L - PAD_R) / STEPS.length - 28
const xCenter = (i: number) =>
  PAD_L + (i + 0.5) * ((W - PAD_L - PAD_R) / STEPS.length)

// Color per step type
const barFill = (step: Step): string => {
  if (step.type === 'baseline') return '#888780' // ink-3
  if (step.type === 'total') return '#6E8E72' // sage-darker
  return '#94B294' // sage-deep for increments
}

export default function CalAiWaterfallChart() {
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

  // Compute bar geometry for each step
  const getBarGeometry = (step: Step, idx: number) => {
    const cx = xCenter(idx)
    const x = cx - BAR_WIDTH / 2

    if (step.type === 'baseline') {
      const top = yToPx(step.value)
      const bottom = yToPx(0)
      return { x, y: top, height: bottom - top, top, bottom }
    }

    if (step.type === 'total') {
      const top = yToPx(step.value)
      const bottom = yToPx(0)
      return { x, y: top, height: bottom - top, top, bottom }
    }

    // increment: bar goes from previous cumulative to new cumulative
    const prevCumulative = idx === 0 ? 0 : STEPS[idx - 1].cumulativeTop
    const top = yToPx(step.cumulativeTop)
    const bottom = yToPx(prevCumulative)
    return { x, y: top, height: bottom - top, top, bottom }
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
        ARR impact of proposed fixes
      </figcaption>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-4 py-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* y-axis gridlines */}
          {[0, 1.0, 2.0, 3.0, 4.0].map((y) => (
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
                ${y.toFixed(1)}M
              </text>
            </g>
          ))}

          {/* connecting dotted lines between bars (showing cumulative path) */}
          {STEPS.map((step, i) => {
            if (i === 0 || step.type === 'total') return null
            const prev = STEPS[i - 1]
            const prevGeom = getBarGeometry(prev, i - 1)
            const currGeom = getBarGeometry(step, i)
            // Connect from top of previous bar to top of current bar's bottom (where increment starts)
            const x1 = prevGeom.x + BAR_WIDTH
            const y1 = prevGeom.top
            const x2 = currGeom.x
            const y2 = currGeom.bottom

            return (
              <line
                key={`connector-${i}`}
                x1={x1}
                x2={x2}
                y1={y1}
                y2={y2}
                stroke="#A38B58"
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={hasAnimated ? 0.6 : 0}
                style={{
                  transition: `opacity 400ms ease ${i * 600 + 300}ms`,
                }}
              />
            )
          })}

          {/* connector from last increment to total */}
          {(() => {
            const lastIncIdx = 3 // muscle segment
            const totalIdx = 4
            const lastInc = getBarGeometry(STEPS[lastIncIdx], lastIncIdx)
            const total = getBarGeometry(STEPS[totalIdx], totalIdx)
            return (
              <line
                x1={lastInc.x + BAR_WIDTH}
                x2={total.x}
                y1={lastInc.top}
                y2={total.top}
                stroke="#A38B58"
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={hasAnimated ? 0.6 : 0}
                style={{
                  transition: `opacity 400ms ease 2700ms`,
                }}
              />
            )
          })()}

          {/* bars */}
          {STEPS.map((step, i) => {
            const geom = getBarGeometry(step, i)
            const fill = barFill(step)
            const isHovered = hoveredIdx === i
            const buildDelay = i * 600

            return (
              <g key={step.id}>
                {/* the bar */}
                <rect
                  x={geom.x}
                  y={hasAnimated ? geom.top : geom.bottom}
                  width={BAR_WIDTH}
                  height={hasAnimated ? geom.height : 0}
                  fill={fill}
                  rx={4}
                  ry={4}
                  style={{
                    transition: `y 700ms cubic-bezier(0.22, 1, 0.36, 1) ${buildDelay}ms, height 700ms cubic-bezier(0.22, 1, 0.36, 1) ${buildDelay}ms, filter 200ms ease`,
                    filter: isHovered ? 'brightness(0.92) saturate(1.1)' : undefined,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                />

                {/* value label above bar */}
                <text
                  x={xCenter(i)}
                  y={geom.top - 10}
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize={12}
                  fontWeight={600}
                  fill="#1A1A1A"
                  opacity={hasAnimated ? 1 : 0}
                  style={{
                    transition: `opacity 400ms ease ${buildDelay + 500}ms`,
                  }}
                >
                  {step.type === 'increment' ? '+' : ''}${step.value.toFixed(2)}M
                </text>

                {/* x-axis label */}
                <text
                  x={xCenter(i)}
                  y={H - PAD_B + 18}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={9.5}
                  fill="#888780"
                  letterSpacing="0.06em"
                >
                  {step.label.split(' ').map((word, j) => (
                    <tspan
                      key={j}
                      x={xCenter(i)}
                      dy={j === 0 ? 0 : 12}
                    >
                      {word.toUpperCase()}
                    </tspan>
                  ))}
                </text>
              </g>
            )
          })}
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
            <div className="text-ink-3 mb-1">{STEPS[hoveredIdx].label}</div>
            {STEPS[hoveredIdx].type === 'increment' ? (
              <>
                <div>+${STEPS[hoveredIdx].value.toFixed(2)}M contribution</div>
                <div className="text-ink-3 mt-1">running total: ${STEPS[hoveredIdx].cumulativeTop.toFixed(2)}M</div>
              </>
            ) : (
              <div>${STEPS[hoveredIdx].value.toFixed(2)}M ARR</div>
            )}
          </div>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        $0.79M projected lift across three workstreams. Funnel fix carries the largest single contribution.
      </p>
    </figure>
  )
}
