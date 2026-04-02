import TopNav from '@/components/TopNav';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
      </main>
    </>
  );
}
