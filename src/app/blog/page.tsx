import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays } from 'lucide-react';
import TopNav from '@/components/TopNav';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Shobuj Chandra Das',
  description: 'Blog posts on QA automation, API testing, and quality engineering.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <TopNav />
      <main className="px-4 pb-20 pt-14 md:px-6 md:pb-24 md:pt-18">
        <section className="mx-auto w-full max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Practical QA notes on API testing, automation stability, and shipping quality faster.
          </p>

          <div className="mt-10 grid gap-5">
            {posts.map((post) => (
              <article key={post.slug} className="glass-panel rounded-2xl p-6">
                <p className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <CalendarDays size={14} className="text-cyan-300" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-slate-300">{post.description}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  Read full post
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
