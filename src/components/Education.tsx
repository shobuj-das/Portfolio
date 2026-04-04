'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { educations } from '@/data/educations';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Academic Path"
          title="Education"
          description="Structured academic progression with steady performance across secondary, higher secondary, and undergraduate levels."
        />

        <div className="relative ml-2 border-l border-white/15 pl-6 md:ml-4">
          <div className="space-y-5">
            {educations.map((item, index) => (
              <Reveal key={`${item.degree}-${item.institution}`} delay={index * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[33px] top-5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/15 text-cyan-100">
                    <School size={12} />
                  </span>

                  <motion.article whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-5">
                    <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                      <GraduationCap size={17} className="text-cyan-200" />
                      {item.degree}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{item.institution}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      Passing Year: {item.passingYear}
                    </p>
                    <p className="mt-3 text-sm font-medium text-emerald-200">{item.result}</p>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
