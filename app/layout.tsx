import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import AnimateObserver from "@/components/AnimateObserver";
import FloatingMOT from "@/components/FloatingMOT";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Garage Daventry | Expert Car Mechanics",
  description: "55+ years of combined experience. MOTs, servicing, EV & hybrid, diagnostics, brakes, clutch, exhaust and air conditioning. Serving Daventry and surrounding areas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Preloader />
        <AnimateObserver />
        <FloatingMOT />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
