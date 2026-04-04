
'use client';

import Link from 'next/link';
import { House } from 'lucide-react';

const navItems = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Education', href: '/#education' },
  { label: 'Blog', href: '/#blog' },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">

        {/* LEFT: Home Icon */}
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition hover:border-cyan-200/40 hover:bg-white/10 hover:text-cyan-100"
        >
          <House size={18} />
        </Link>

        {/* CENTER: Portfolio Text */}
        <p className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Portfolio
        </p>

        {/* RIGHT: Navigation */}
        <nav aria-label="Section navigation">
          <ul className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}