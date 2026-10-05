import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Isuru Edirisinghe - Backend & DevOps Engineer',
  description: 'Backend & DevOps engineer who ships code from commit to production. Java/Spring Boot microservices + AWS EKS/Kubernetes/GitOps/CI-CD. Open to new-grad roles from November 2026.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

import StickyNav from '@/components/StickyNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StickyNav />
        {children}
      </body>
    </html>
  );
}