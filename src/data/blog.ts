import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const BLOGS_DIR = path.join(process.cwd(), 'src', 'blogs');

function getPostFilePath(slug: string) {
  return path.join(BLOGS_DIR, `${slug}.md`);
}

function sortPostsByDate(posts: BlogPostMeta[]) {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllBlogSlugs() {
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const posts = getAllBlogSlugs().map((slug) => {
    const markdown = fs.readFileSync(getPostFilePath(slug), 'utf8');
    const { data } = matter(markdown);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ''),
      description: String(data.description ?? ''),
    };
  });

  return sortPostsByDate(posts);
}

export function getRecentBlogPosts(limit = 3): BlogPostMeta[] {
  return getAllBlogPosts().slice(0, limit);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = getPostFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(markdown);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    description: String(data.description ?? ''),
    contentHtml: processedContent.toString(),
  };
}
