import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spring Field Developments Ltd.",
  description: "Witness, As We Transform Your Land to a Landmark",
};

import Header from "./components/Header";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#f8fbf4] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col transition-colors duration-300`}>
        <Providers attribute="data-theme" defaultTheme="system" enableSystem>
          <CustomCursor />
          <PageLoader />
          <Header />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
