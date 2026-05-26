import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { ReactLenis } from "lenis/react";
import Thumb from "./components/thumb/Thumb";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/projects/Cursor";
import Footer from "./components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Justin Peter | Dev Folio",
    template: "%s | Justin Peter",
  },
  description: "Full-stack Developer Portfolio — projects, skills, and more.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable}`}>
        <ReactLenis root />
        {children}
        <Navbar />
        <Thumb />
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
