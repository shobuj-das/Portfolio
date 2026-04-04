// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { House } from 'lucide-react';
// import { useEffect, useMemo, useState } from 'react';

// type NavItem = {
//   label: string;
//   href: string;
//   sectionId: string;
// };

// const navItems: NavItem[] = [
//   { label: 'Experience', href: '/#experience', sectionId: 'experience' },
//   { label: 'Skills', href: '/#skills', sectionId: 'skills' },
//   { label: 'Projects', href: '/#projects', sectionId: 'projects' },
//   { label: 'Achievements', href: '/#achievements', sectionId: 'achievements' },
//   { label: 'Education', href: '/#education', sectionId: 'education' },
//   { label: 'Blog', href: '/#blog', sectionId: 'blog' },
// ];

// export default function TopNav() {
//   const pathname = usePathname();
//   const [activeSection, setActiveSection] = useState<string>('experience');

//   const sectionIds = useMemo(() => navItems.map((item) => item.sectionId), []);

//   useEffect(() => {
//     if (pathname !== '/') {
//       return;
//     }

//     const observedSections = sectionIds
//       .map((id) => document.getElementById(id))
//       .filter((section): section is HTMLElement => section !== null);

//     if (observedSections.length === 0) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const intersectingEntries = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (intersectingEntries.length > 0) {
//           setActiveSection(intersectingEntries[0].target.id);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '-40% 0px -45% 0px',
//         threshold: [0.2, 0.35, 0.5, 0.7],
//       },
//     );

//     observedSections.forEach((section) => observer.observe(section));

//     return () => {
//       observedSections.forEach((section) => observer.unobserve(section));
//       observer.disconnect();
//     };
//   }, [pathname, sectionIds]);

//   const resolvedActiveSection =
//     pathname === '/' ? activeSection : pathname.startsWith('/blog') ? 'blog' : '';

//   return (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
//       <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 md:px-6">
//         <Link
//           href="/"
//           aria-label="Home"
//           className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition hover:border-cyan-200/40 hover:bg-white/10 hover:text-cyan-100"
//         >
//           <House size={17} />
//         </Link>

//         <p className="ml-3 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
//           Portfolio
//         </p>

//         <nav aria-label="Section navigation" className="ml-4 max-w-[calc(100%-9rem)] overflow-x-auto">
//           <ul className="flex min-w-max items-center gap-1 md:gap-2">
//             {navItems.map((item) => {
//               const isActive = item.sectionId === resolvedActiveSection;

//               return (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-500 ${
//                       isActive
//                         ? 'text-cyan-100'
//                         : 'text-slate-200 hover:bg-white/10 hover:text-white'
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }



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