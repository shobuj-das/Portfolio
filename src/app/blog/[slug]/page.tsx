import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, House, CalendarDays } from 'lucide-react';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Blog',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="px-4 pb-20 pt-14 md:px-6 md:pb-24 md:pt-18">
      <section className="mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
          >
            <House size={15} />
            Home
          </Link>
        </div>

        <article className="mt-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            <CalendarDays size={14} />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-300">{post.description}</p>

          <div
            className="prose-blog mt-10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </section>
    </main>
  );
}
