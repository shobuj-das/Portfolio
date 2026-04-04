'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Download,
  FolderGit2,
  Link2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { profile } from '@/data/profile';

const socialIcons = {
  GitHub: FolderGit2,
  LinkedIn: Link2,
  Email: Mail,
} as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-16 md:px-6 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(59,130,246,0.28),transparent_40%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-100">
            <ShieldCheck size={14} />
            Quality-Driven Engineering
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-cyan-200">{profile.role}</p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative mx-auto w-full max-w-md rounded-3xl p-6"
        >
          <div className="mx-auto w-fit rounded-full border border-cyan-200/45 bg-cyan-50/10 p-2 shadow-[0_14px_40px_rgba(8,145,178,0.22)]">
            <Image
              src="/profile.jpg"
              alt="Portrait of Shobuj Chandra Das"
              width={160}
              height={160}
              className="h-40 w-40 rounded-full border border-white/15 object-cover"
              priority
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
            {profile.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Mail;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-cyan-200/50 hover:bg-white/10 sm:text-sm"
                >
                  <Icon size={15} />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white">
              <Phone size={14} className="text-cyan-200" />
              {profile.phone}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200 sm:text-sm">
              {profile.location}
            </p>

            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              <Download size={16} />
              Download Resume
            </a>

            {/* <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/35 bg-emerald-400/10 text-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-400/20"
            >
              <MessageCircle size={18} />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
