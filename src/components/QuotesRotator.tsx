'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const defaultQuotes = [
  'Quality is never an accident; it is the result of intelligent effort.',
  'Automation empowers testers, it does not replace them.',
  'Test early, test often, deliver with confidence.',
  'A reliable system is a well-tested system.',
];

type QuotesRotatorProps = {
  quotes?: string[];
  intervalMs?: number;
  className?: string;
};

export default function QuotesRotator({
  quotes = defaultQuotes,
  intervalMs = 3500,
  className = '',
}: QuotesRotatorProps) {
  const items = useMemo(() => quotes.filter((quote) => quote.trim().length > 0), [quotes]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length]);

  if (!items.length) return null;

  return (
    <div className={`mt-6 min-h-[3.5rem] ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base italic leading-7 text-cyan-200/85 md:text-lg"
        >
          "{items[currentIndex]}"
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
