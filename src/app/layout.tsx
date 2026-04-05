import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shobuj | Automation Engineer',
  description:
    'Portfolio of Shobuj Chandra Das, QA Automation Engineer specializing in Playwright, Selenium, API testing, and quality strategy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
