
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-0 md:px-6">
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition hover:border-cyan-200/40 hover:bg-white/10 hover:text-cyan-100"
          >
            <House size={18} />
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Portfolio
          </p>
        </div>

        {/* RIGHT: Navigation */}
        <nav aria-label="Section navigation" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-3 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
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
