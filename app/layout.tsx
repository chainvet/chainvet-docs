import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Provider } from '@/components/provider';
import { appName, siteDescription, siteUrl } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-cv-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} — Hybrid Solidity Security Analyzer`,
    template: `%s · ${appName} Docs`,
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '256x256' },
    ],
  },
  openGraph: {
    title: `${appName} Documentation`,
    description: siteDescription,
    url: siteUrl,
    siteName: `${appName} Docs`,
    type: 'website',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
