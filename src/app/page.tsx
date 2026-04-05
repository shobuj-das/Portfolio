import TopNav from '@/components/TopNav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Blog />
      </main>
    </>
  );
}
