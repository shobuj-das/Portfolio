import Link from 'next/link';
import { ArrowUpRight, BookOpenText, Clock3 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getRecentBlogPosts } from '@/lib/blog';

export default function Blog() {
  const blogPosts = getRecentBlogPosts(3);

  return (
    <section id="blog" className="px-4 pb-20 pt-20 md:px-6 md:pb-24 md:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Knowledge Sharing"
          title="Most Recent Blogs"
          description="Latest writeups on API testing, automation patterns, and practical QA strategy."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-panel flex h-full flex-col rounded-2xl p-5 transition duration-200 hover:-translate-y-1"
            >
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                <BookOpenText size={14} />
                Blog Post
              </p>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{post.description}</p>

              <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
                <Clock3 size={14} className="text-cyan-300" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-left text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                Read article
                <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            View all blogs
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
