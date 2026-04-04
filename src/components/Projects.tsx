'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FolderCode } from 'lucide-react';
import { projects } from '@/data/projects';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects with Real QA Impact"
          description="Production-focused automation projects designed to improve release confidence, reduce regression cost, and scale testing across products."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -5 }}
                className="glass-panel flex h-full flex-col rounded-2xl p-5"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  <FolderCode size={14} />
                  {project.category}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

                <p className="mt-4 rounded-xl border border-emerald-200/20 bg-emerald-400/10 p-3 text-sm text-emerald-100">
                  {project.impact}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  View repository
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
