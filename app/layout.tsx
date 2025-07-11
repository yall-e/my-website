import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://onurhan.dev"
  ),
  title: {
    default: "Yigit Gurbulak - Software Engineer",
    template: "%s | Yigit Gurbulak",
  },
  description:
    "Yigit Gurbulak - Software Developer at Insider, focused on building comprehensive applications and micro products.",
  openGraph: {
    title: "Yigit Gurbulak - Software Engineer",
    description:
      "Software Developer at Insider, focused on building comprehensive applications and micro products.",
    url: "https://onurhan.dev",
    siteName: "Yigit Gurbulak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://onurhan.dev/logo.svg",
        width: 1200,
        height: 630,
        alt: "Yigit Gurbulak",
      },
    ],
  },
  robots: {
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
  twitter: {
    title: "Yigit Gurbulak",
    card: "summary_large_image",
    site: "@yall_e",
    creator: "@yall_e",
  },
  verification: {
    google: "K1pkJ72cY3DylswXke2MHJGxmjJ91WXwgozcCICvFrU",
    // TODO: Add yandex verification key here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 overflow-y-scroll`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="theme"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" antialiased lg:max-w-2xl md:max-w-full mx-4 mb-40 flex flex-col md:flex-row  mt-2 sm:mt-8 lg:mx-auto">
            <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Header />

              {children}
            </section>
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
