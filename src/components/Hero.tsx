'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Building2,
  Download,
  Link2,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import QuotesRotator from '@/components/QuotesRotator';

type SocialIconProps = {
  className?: string;
};

function GitHubIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.24c-3.34.72-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.08-.75.08-.74.08-.74 1.2.08 1.82 1.21 1.82 1.21 1.06 1.82 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.19 0 0 1-.32 3.3 1.23a11.53 11.53 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.89.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.63-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.9 6.75H6.53V18h2.57V9.75Zm5.85-.2c-1.24 0-2.02.69-2.35 1.18V9.75h-2.47V18h2.57v-4.34c0-1.15.22-2.27 1.65-2.27 1.41 0 1.43 1.32 1.43 2.35V18h2.57v-4.79c0-2.35-.5-3.66-2.97-3.66ZM7.82 5.62a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
} as const;

export default function Hero() {
  const currentExperience = [...experience].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )[0];
  const currentRole = currentExperience?.role ?? profile.role;
  const currentCompany = currentExperience?.company;

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

          <div className="mt-3 flex flex-wrap items-center gap-4">
            <p className="inline-flex items-center gap-2 text-lg font-medium text-cyan-200">
              <BriefcaseBusiness size={16} className="shrink-0 text-cyan-300" />
              {currentRole}
            </p>

            {currentCompany ? (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 md:text-base">
                <Building2 size={15} className="shrink-0 text-cyan-200" />
                {currentCompany}
              </p>
            ) : null}
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {profile.tagline}
          </p>

          <QuotesRotator />
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
              const Icon = socialIcons[link.label as keyof typeof socialIcons];

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-cyan-200/50 hover:bg-white/10 sm:text-sm"
                >
                  {Icon ? (
                    <Icon className="h-[15px] w-[15px]" />
                  ) : (
                    <Link2 size={15} />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-white">
                <Phone size={14} className="text-cyan-200" />
                <MessageCircleMore size={14} className="text-cyan-200" />
                {profile.phone}
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-slate-200">
                <Mail size={14} className="text-cyan-200" />
                {profile.email}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200 sm:text-sm">
              <MapPin size={14} className="mr-1.5 text-cyan-200" />
              {profile.location}
            </p>

            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
