import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // For safe area handling on notched devices
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F3D2E' },
    { media: '(prefers-color-scheme: dark)', color: '#0F3D2E' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://modatepecafe.com'),
  title: {
    default: 'Modatepe Restoran & Konaklama - Trabzon Ortahisar',
    template: '%s | Modatepe',
  },
  description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama. Lezzetli yemekler ve konforlu konaklama imkanı.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Modatepe',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'ar_SA'],
    url: 'https://modatepecafe.com',
    siteName: 'Modatepe Restoran & Konaklama',
    title: 'Modatepe Restoran & Konaklama - Trabzon Ortahisar',
    description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama. Lezzetli yemekler ve konforlu konaklama imkanı.',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Modatepe Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modatepe Restoran & Konaklama',
    description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama.',
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
