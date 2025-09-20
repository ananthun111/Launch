import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dcodeux - Transform Your Business with AI",
  description:
    "We empower traditional businesses with SaaS, AI, and modern technologies to scale and thrive in the digital era.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dcodeux - Transform Your Business with AI",
    description:
      "We empower traditional businesses with SaaS, AI, and modern technologies to scale and thrive in the digital era.",
    url: "https://www.dcodeux.in",
    siteName: "Dcodeux",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dcodeux - Transform Your Business with AI",
    description:
      "We empower traditional businesses with SaaS, AI, and modern technologies to scale and thrive in the digital era.",
    creator: "@dcodeux",
  },  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
