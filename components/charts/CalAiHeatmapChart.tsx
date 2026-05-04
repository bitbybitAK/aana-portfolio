'use client'

import { useEffect, useRef, useState } from 'react'

// Cal AI activation threshold heatmap
// Data from CalAI.pdf page 2 — D30 Retention Lift (pp) by Activation Threshold
// Rows: scan count, Columns: time window
// Highlighted cell: 3 scans / 48hr (+50 = the activation threshold)

const ROWS = ['1 scan', '2 scans', '3 scans', '4 scans', '5 scans'] as const
const COLS = ['24hr', '48hr', '72hr', '7 days'] as const

// Lift in percentage points (matches PDF heatmap exactly)
const DATA: number[][] = [
  [30, 28, 25, 20], // 1 scan
  [38, 38, 34, 28], // 2 scans
  [45, 50, 43, 33], // 3 scans  ← +50 is the highlighted activation threshold
  [47, 52, 45, 35], // 4 scans
  [48, 52, 44, 34], // 5 scans
]

// Highlighted cell coordinates: row 2 (3 scans), col 1 (48hr)
const HIGHLIGHT = { row: 2, col: 1 }

// Min/max for color scaling
const VALUES = DATA.flat()
const MIN_VAL = Math.min(...VALUES) // 20
const MAX_VAL = Math.max(...VALUES) // 52

// Cell color: pastel sage scale, deeper for higher lift
const cellColor = (value: number): string => {
  const t = (value - MIN_VAL) / (MAX_VAL - MIN_VAL) // 0..1
  // Interpolate between cream-3 (low) and sage-darker (high)
  // Using HSL-like blend — cream-3 #ECE6D6 to sage-darker #6E8E72
  const r = Math.round(0xEC + (0x6E - 0xEC) * t)
  const g = Math.round(0xE6 + (0x8E - 0xE6) * t)
  const b = Math.round(0xD6 + (0x72 - 0xD6) * t)
  return `rgb(${r}, ${g}, ${b})`
}

// Text color: light text on dark cells, dark on light
const textColor = (value: number): string => {
  const t = (value - MIN_VAL) / (MAX_VAL - MIN_VAL)
  return t > 0.55 ? '#FAFAF7' : '#1A1A1A'
}

export default function CalAiHeatmapChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)
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

  return (
    <figure
      ref={containerRef}
      className="my-12 not-prose"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseLeave={() => setHoveredCell(null)}
    >
      <figcaption className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 mb-5">
        D30 retention lift (pp) by activation threshold
      </figcaption>

      <div className="relative bg-cream-2 border border-border-soft rounded-2xl px-7 py-7">
        {/* heatmap grid: row labels + cells + col labels */}
        <div className="grid" style={{ gridTemplateColumns: '90px repeat(4, 1fr)' }}>
          {/* empty top-left + col headers */}
          <div></div>
          {COLS.map((col) => (
            <div
              key={col}
              className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 text-center pb-3"
            >
              {col}
            </div>
          ))}

          {/* rows */}
          {DATA.map((row, rowIdx) => (
            <div className="contents" key={rowIdx}>
              {/* row label */}
              <div className="font-mono text-[10px] uppercase tracking-mono-wider text-ink-3 flex items-center justify-end pr-4">
                {ROWS[rowIdx]}
              </div>
              {/* cells */}
              {row.map((value, colIdx) => {
                const isHighlight = rowIdx === HIGHLIGHT.row && colIdx === HIGHLIGHT.col
                const isHovered =
                  hoveredCell?.row === rowIdx && hoveredCell?.col === colIdx
                const cellDelay = (rowIdx * 4 + colIdx) * 50 // stagger build-in

                return (
                  <div
                    key={colIdx}
                    className="relative aspect-[4/3] m-1 rounded-md cursor-pointer transition-transform duration-200"
                    style={{
                      backgroundColor: cellColor(value),
                      opacity: hasAnimated ? 1 : 0,
                      transform: hasAnimated
                        ? isHovered
                          ? 'scale(1.04)'
                          : 'scale(1)'
                        : 'scale(0.9)',
                      transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) ${cellDelay}ms, transform 250ms cubic-bezier(0.22, 1, 0.36, 1) ${
                        hasAnimated ? '0ms' : `${cellDelay}ms`
                      }`,
                    }}
                    onMouseEnter={() => setHoveredCell({ row: rowIdx, col: colIdx })}
                  >
                    {/* highlighted cell border */}
                    {isHighlight && (
                      <div
                        className="absolute inset-0 rounded-md pointer-events-none"
                        style={{
                          border: '2px solid #6E8E72',
                          opacity: hasAnimated ? 1 : 0,
                          transition: 'opacity 500ms ease 1500ms',
                        }}
                      />
                    )}
                    {/* highlighted cell pulse — slow, every 6s. Uses globals.css keyframe */}
                    {isHighlight && hasAnimated && (
                      <div
                        className="absolute inset-0 rounded-md pointer-events-none animate-cell-pulse"
                        style={{
                          border: '2px solid #6E8E72',
                          animationDelay: '2s',
                        }}
                      />
                    )}
                    {/* value */}
                    <div
                      className="absolute inset-0 flex items-center justify-center font-inter font-medium tabular-nums"
                      style={{
                        color: textColor(value),
                        fontSize: isHighlight ? '17px' : '15px',
                        fontWeight: isHighlight ? 600 : 500,
                      }}
                    >
                      +{value}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}

          {/* x-axis section label */}
          <div></div>
          <div
            className="col-span-4 text-center pt-4 font-mono text-[10px] uppercase tracking-mono-wider text-ink-3"
          >
            time window
          </div>
        </div>

        {/* hover pill */}
        {hoveredCell !== null && (
          <div
            className="pointer-events-none absolute z-10 bg-ink text-cream font-mono text-[10px] uppercase tracking-mono-wider px-3 py-2 rounded-md whitespace-nowrap"
            style={{
              left: `${hoverPos.x + 14}px`,
              top: `${hoverPos.y - 6}px`,
              transform: 'translate(0, -100%)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            }}
          >
            <div className="text-ink-3 mb-1">
              {ROWS[hoveredCell.row]} in {COLS[hoveredCell.col]}
            </div>
            <div>+{DATA[hoveredCell.row][hoveredCell.col]}pp D30 lift</div>
            {hoveredCell.row === HIGHLIGHT.row && hoveredCell.col === HIGHLIGHT.col && (
              <div className="text-honey-deep mt-1">activation threshold</div>
            )}
          </div>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-3 mt-3 italic">
        3 scans in 48hr is the inflection. Lift flattens past it.
      </p>
    </figure>
  )
}
