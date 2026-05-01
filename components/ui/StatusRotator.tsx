'use client';

import { useEffect, useState } from 'react';

interface StatusRotatorProps {
  messages: string[];
  rotationMs: number;
}

const FADE_MS = 500;

export default function StatusRotator({
  messages,
  rotationMs,
}: StatusRotatorProps) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (messages.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIdx((i) => (i + 1) % messages.length);
        setVisible(true);
      }, FADE_MS);
      return () => clearTimeout(swap);
    }, rotationMs);
    return () => clearInterval(interval);
  }, [messages.length, rotationMs]);

  return (
    <div
      className={[
        'text-[12px] leading-[1.5] text-ink min-h-[36px]',
        'transition-opacity duration-500',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      {messages[idx] ?? ''}
    </div>
  );
}
