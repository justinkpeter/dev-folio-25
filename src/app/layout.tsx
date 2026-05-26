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
  title: "Justin Peter | Dev Folio",
  description: "All my coding goodies in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
