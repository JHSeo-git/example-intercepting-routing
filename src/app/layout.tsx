import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

import '@/styles/globals.css';

import Link from 'next/link';

import { cn } from '@/lib/utils';

export const metadata = {
  title: {
    default: 'Gallery',
    template: '%s | Gallery',
  },
  description: 'Here, gallery for transition intercepting route using Next.js app router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={cn('min-h-screen bg-white font-sans text-slate-900 antialiased', inter.variable)}
      >
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-center">
            <Link href="/" className="text-blue-700">
              <h1 className="my-10 text-4xl font-bold">Gallery</h1>
            </Link>
          </header>
          <main className="container flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
