// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useMemo, useState } from 'react';

// const defaultQuotes = [
//   'Quality is never an accident; it is the result of intelligent effort.',
//   'Automation empowers testers, it does not replace them.',
//   'Test early, test often, deliver with confidence.',
//   'A reliable system is a well-tested system.',
// ];

// type QuotesRotatorProps = {
//   quotes?: string[];
//   intervalMs?: number;
//   className?: string;
// };

// export default function QuotesRotator({
//   quotes = defaultQuotes,
//   intervalMs = 3500,
//   className = '',
// }: QuotesRotatorProps) {
//   const items = useMemo(() => quotes.filter((quote) => quote.trim().length > 0), [quotes]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (items.length <= 1) return;

//     const timer = window.setInterval(() => {
//       setCurrentIndex((previousIndex) => (previousIndex + 1) % items.length);
//     }, intervalMs);

//     return () => window.clearInterval(timer);
//   }, [items.length, intervalMs]);

//   useEffect(() => {
//     if (currentIndex >= items.length) {
//       setCurrentIndex(0);
//     }
//   }, [currentIndex, items.length]);

//   if (!items.length) return null;

//   return (
//     <div className={`mt-6 min-h-[3.5rem] ${className}`} aria-live="polite">
//       <AnimatePresence mode="wait">
//         <motion.p
//           key={currentIndex}
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -14 }}
//           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//           className="max-w-2xl text-base italic leading-7 text-cyan-200/85 md:text-lg"
//         >
//           "{items[currentIndex]}"
//         </motion.p>
//       </AnimatePresence>
//     </div>
//   );
// }

// ------------------------------ 1 -------------------------

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Quote } from 'lucide-react';

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
  const items = useMemo(
    () => quotes.filter((quote) => quote.trim().length > 0),
    [quotes]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
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
    <div className={`mt-8 ${className}`} aria-live="polite">
      
      {/* Glass Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md">

        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-40" />

        {/* Quote Icon */}
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
              key={currentIndex}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic leading-7 text-cyan-100/90 md:text-lg"
            >
              “{items[currentIndex]}”
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Indicator (Premium touch) */}
        {items.length > 1 && (
          <div className="mt-4 flex gap-1">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? 'w-6 bg-cyan-300'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}