import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spring Field Developments Ltd.",
  description: "Witness, As We Transform Your Land to a Landmark",
};

import Header from "./components/Header";
// Navigation will be integrated into Header for a modern Navbar look, but keeping it for now if needed.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#f8fbf4] text-zinc-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
