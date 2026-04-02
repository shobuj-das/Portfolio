'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpenText, Clock3 } from 'lucide-react';
import { blogPosts } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function Blog() {
  return (
    <section id="blog" className="px-4 pb-20 pt-20 md:px-6 md:pb-24 md:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Knowledge Sharing"
          title="Blog and Learning Notes"
          description="Short-form practical writeups on automation architecture, testing strategies, and quality leadership."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-panel flex h-full flex-col rounded-2xl p-5"
              >
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  <BookOpenText size={14} />
                  {post.tag}
                </p>

                <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{post.description}</p>

                <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
                  <Clock3 size={14} className="text-cyan-300" />
                  {post.readingTime}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-left text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  Read article (coming soon)
                  <ArrowUpRight size={16} />
                </button>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
