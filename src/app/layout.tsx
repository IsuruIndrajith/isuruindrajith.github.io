import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Isuru Edirisinghe - Software & DevOps Engineer',
  description: 'Software & DevOps engineer who ships code from commit to production. Java/Spring Boot microservices + AWS EKS/Kubernetes/GitOps/CI-CD. Open to new-grad roles.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

import StickyNav from '@/components/StickyNav';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-surface text-cream antialiased">
        <GrainOverlay />
        <CustomCursor />
        <StickyNav />
        {children}
      </body>
    </html>
  );
}