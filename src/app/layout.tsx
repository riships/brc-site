import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { QueryModal } from "@/components/ui/QueryModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brc-tech.com"),
  title: {
    default: "BRC | Technology Solutions | Simplify Tough",
    template: "%s | BRC — SIMPLIFY TOUGH",
  },
  description:
    "BRC helps organizations design, build and operate reliable digital systems — from software and cloud infrastructure to AI, cybersecurity and data.",
  keywords: [
    "BRC",
    "SIMPLIFY TOUGH",
    "Software Development",
    "Enterprise AI",
    "Cloud Solutions",
    "DevOps",
    "Cybersecurity",
    "Data Engineering",
    "IT Consulting",
    "Managed IT Services",
  ],
  authors: [{ name: "BRC Technology Services" }],
  creator: "BRC",
  publisher: "BRC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brc-tech.com",
    siteName: "BRC — SIMPLIFY TOUGH",
    title: "BRC | Technology Solutions | Simplify Tough",
    description:
      "BRC helps organizations design, build and operate reliable digital systems — from software and cloud infrastructure to AI, cybersecurity and data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRC | Technology Solutions | Simplify Tough",
    description:
      "BRC helps organizations design, build and operate reliable digital systems — from software and cloud infrastructure to AI, cybersecurity and data.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-[#09090b] font-sans selection:bg-neutral-900 selection:text-white">
        <ContactModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <QueryModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
