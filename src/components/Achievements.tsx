'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { achievements } from '@/data/achievements';

export default function Achievements() {
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
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>

                {item.image ? (
                  <div className="relative mt-4 h-36 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
