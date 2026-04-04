'use client';

import { motion } from 'framer-motion';
import {
  Bug,
  ChartNoAxesColumnIncreasing,
  Code2,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, type SkillCategory } from '@/data/skills';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

const categoryIcons: LucideIcon[] = [
  Bug,
  ChartNoAxesColumnIncreasing,
  Code2,
  Wrench,
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Core Strengths"
          title="Skills and Tooling"
          description="A practical QA stack focused on maintainable automation, fast feedback cycles, and resilient releases."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category: SkillCategory, index: number) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <Reveal key={category.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="glass-panel h-full rounded-2xl p-5"
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                    <Icon size={14} />
                    {category.title}
                  </div>

                  <p className="text-sm leading-6 text-slate-300">
                    {category.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill: string, i: number) => (
                      <li
                        key={`${category.title}-${skill}-${i}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}