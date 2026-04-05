'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { AchievementItem } from '@/data/achievements';

type AchievementModalProps = {
  item: AchievementItem | null;
  isOpen: boolean;
  onClose: () => void;
};

function normalizeImagePath(path: string) {
  if (path.startsWith('public/')) {
    return `/${path.replace(/^public\//, '')}`;
  }

  return path;
}

export default function AchievementModal({ item, isOpen, onClose }: AchievementModalProps) {
  return (
    <AnimatePresence>
      {isOpen && item ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
            className="glass-panel relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl p-5 md:p-6"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:bg-white/15"
              aria-label="Close achievement details"
            >
              <X size={16} />
            </button>

            <p className="inline-flex w-fit items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
              {item.type}
            </p>
            <h3 id="achievement-modal-title" className="mt-3 pr-10 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <ul className="mt-5 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={`${item.title}-${highlight}`} className="text-sm leading-6 text-slate-200">
                  <span className="mr-2 text-cyan-200">•</span>
                  {highlight}
                </li>
              ))}
            </ul>

            {item.image ? (
              <div className="relative mt-6 h-[45vh] min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 sm:h-[55vh]">
                <Image
                  src={normalizeImagePath(item.image)}
                  alt={`${item.title} certificate`}
                  fill
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 84vw, 1100px"
                />
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
