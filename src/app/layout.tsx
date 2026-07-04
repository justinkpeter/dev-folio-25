import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/projects/Cursor";
import PreLoader from "./components/preloader/PreLoader";
import "./styles/globals.scss";
import HashScrollHandler from "./lib/HashScrollHandler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Justin Peter | Dev Folio",
    template: "%s | Justin Peter",
  },
  description:
    "Full-stack developer building meaningful & creative web experiences.",
  keywords: ["developer", "portfolio", "full-stack", "react", "creative"],
  authors: [{ name: "Justin Peter" }],
  creator: "Justin Peter",
  metadataBase: new URL("https://justinpeter.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinpeter.dev",
    siteName: "Justin Peter",
    title: "Justin Peter | Dev Folio",
    description:
      "Full-stack developer building meaningful & creative web experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Peter | Dev Folio",
    description:
      "Full-stack developer building meaningful & creative web experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable}`}>
        <ReactLenis root />
        <PreLoader />
        <HashScrollHandler />
        <Navbar />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
