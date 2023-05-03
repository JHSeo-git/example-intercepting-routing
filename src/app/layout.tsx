import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

export const metadata = {
  title: {
    default: 'Examples',
    template: '%s | Examples',
  },
  description: 'Here, examples for react-hook-forms with various libraries are provided.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50',
          inter.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <div className="container flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
