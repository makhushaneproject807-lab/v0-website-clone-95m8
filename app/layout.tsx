import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'v0 Website Clone',
  description: 'A modern website built with Next.js and deployed on Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}