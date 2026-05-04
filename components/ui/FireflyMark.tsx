interface FireflyMarkProps {
  width?: number | string;
  height?: number | string;
}

export default function FireflyMark({
  width = 52,
  height = 42,
}: FireflyMarkProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 32" fill="none">
      <ellipse className="firefly-wing" cx="14" cy="16" rx="7.5" ry="4.5" opacity="0.65" />
      <ellipse className="firefly-wing" cx="14" cy="22" rx="6.5" ry="3.5" opacity="0.55" />
      <ellipse className="firefly-wing" cx="27" cy="16" rx="7" ry="4" opacity="0.65" />
      <ellipse className="firefly-wing" cx="27" cy="22" rx="6" ry="3.2" opacity="0.55" />
      <ellipse className="firefly-body" cx="20" cy="18" rx="7.5" ry="6" />
      <ellipse className="firefly-glow" cx="28" cy="20" rx="5" ry="3.8" />
      <line className="firefly-antenna" x1="20" y1="13" x2="17" y2="6" strokeWidth="0.8" />
      <line className="firefly-antenna" x1="20" y1="13" x2="23" y2="6" strokeWidth="0.8" />
      <circle className="firefly-body" cx="17" cy="6" r="1.1" />
      <circle className="firefly-body" cx="23" cy="6" r="1.1" />
    </svg>
  );
}
