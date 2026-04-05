'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import AchievementModal from '@/components/AchievementModal';
import { achievements, type AchievementItem } from '@/data/achievements';

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  useEffect(() => {
    if (!selectedAchievement) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedAchievement(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedAchievement]);

  return (
    <section id="achievements" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Highlights"
          title="Achievements"
          description="A snapshot of academic and professional milestones that support a quality-first engineering mindset."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={`${item.type}-${item.title}`} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-panel flex h-full flex-col rounded-2xl p-5"
              >
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  <Award size={14} />
                  {item.type}
                </p>

                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>

                <ul className="mt-3 space-y-2">
                  {item.highlights.slice(0, 3).map((highlight) => (
                    <li key={`${item.title}-${highlight}`} className="text-sm leading-6 text-slate-300">
                      <span className="mr-2 text-cyan-200">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.highlights.length > 3 ? (
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-lg leading-none text-slate-400">...</span>
                    <button
                      type="button"
                      onClick={() => setSelectedAchievement(item)}
                      className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/20"
                    >
                      See More
                    </button>
                  </div>
                ) : null}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <AchievementModal
        item={selectedAchievement}
        isOpen={Boolean(selectedAchievement)}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}
