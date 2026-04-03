// 'use client';

// import { motion } from 'framer-motion';
// import { BadgeCheck, BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';
// import { experience } from '@/data/portfolio';
// import SectionHeader from '@/components/ui/SectionHeader';
// import Reveal from '@/components/ui/Reveal';

// export default function Experience() {
//   return (
//     <section id="experience" className="px-4 py-20 md:px-6 md:py-24">
//       <div className="mx-auto w-full max-w-6xl">
//         <SectionHeader
//           eyebrow="Career Journey"
//           title="Experience and Delivery Impact"
//           description="Hands-on quality engineering across web, mobile, and API systems with a strong focus on automation and release reliability."
//         />

//         <div className="space-y-5">
//           {experience.map((item, index) => (
//             <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
//               <motion.article whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-6">
//                 <div className="flex flex-wrap items-start justify-between gap-3">
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">{item.role}</h3>
//                     <p className="mt-1 inline-flex items-center gap-2 text-sm text-cyan-200">
//                       <BriefcaseBusiness size={14} />
//                       {item.company}
//                     </p>
//                   </div>

//                   <div className="space-y-2 text-sm text-slate-300">
//                     <p className="inline-flex items-center gap-2">
//                       <Calendar size={14} className="text-cyan-300" />
//                       {item.duration}
//                     </p>
//                     <p className="inline-flex items-center gap-2">
//                       <MapPin size={14} className="text-cyan-300" />
//                       {item.location}
//                     </p>
//                   </div>
//                 </div>

//                 <ul className="mt-5 grid gap-3">
//                   {item.highlights.map((highlight) => (
//                     <li
//                       key={highlight}
//                       className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm leading-6 text-slate-200"
//                     >
//                       <BadgeCheck size={17} className="mt-0.5 shrink-0 text-emerald-300" />
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';
import { experience } from '@/data/experience';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function Experience() {

  // ✅ Sort latest experience first (scalable for future)
  const sortedExperience = [...experience].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <section id="experience" className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Career Journey"
          title="Experience and Delivery Impact"
          description="Hands-on quality engineering across web, mobile, and API systems with a strong focus on automation and release reliability."
        />

        <div className="space-y-5">
          {sortedExperience.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.article whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-cyan-200">
                      <BriefcaseBusiness size={14} />
                      {item.company}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-slate-300">
                    <p className="inline-flex items-center gap-2">
                      <Calendar size={14} className="text-cyan-300" />
                      {item.duration}
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-cyan-300" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm leading-6 text-slate-200"
                    >
                      <BadgeCheck size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}