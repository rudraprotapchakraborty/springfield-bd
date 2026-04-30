import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spring Field Developments Ltd.",
  description: "",
};

import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white font-sans flex justify-center">
        <div className="w-full max-w-[980px] bg-black mt-[10px] px-4 md:px-0">
          <Header />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
