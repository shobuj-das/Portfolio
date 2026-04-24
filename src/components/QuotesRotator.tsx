'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Quote } from 'lucide-react';
import { heroQuotes } from '@/data/qoute';

type QuotesRotatorProps = {
  quotes?: string[];
  intervalMs?: number;
  className?: string;
};

export default function QuotesRotator({
  quotes = heroQuotes,
  intervalMs = 3500,
  className = '',
}: QuotesRotatorProps) {
  const items = useMemo(() => quotes.filter((quote) => quote.trim().length > 0), [quotes]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  if (!items.length) return null;

  const activeIndex = currentIndex % items.length;

  return (
    <div className={`mt-8 ${className}`} aria-live="polite">
      {/* Clean Glass Card (No Border) */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 p-5 backdrop-blur-md">
        {/* Soft Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-40" />

        {/* Quote Header */}
        <div className="mb-3 flex items-center gap-2 text-cyan-300">
          <Quote size={18} />
          <span className="text-xs uppercase tracking-widest text-cyan-200/70">
            Thought
          </span>
        </div>

        {/* Animated Quote */}
        <div className="min-h-[3.5rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic leading-7 text-cyan-100/90 md:text-lg"
            >
              “{items[activeIndex]}”
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
