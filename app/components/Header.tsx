'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Career', href: '/career' },
  { name: 'Notice Board', href: '/notice-board' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14 md:h-16 ${
        isScrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-[#00a651] origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-3 md:gap-4 relative z-10">
          <Image
            src="/logo.png"
            alt="Spring Field Developments Ltd."
            width={220}
            height={90}
            className="w-auto h-14 md:h-20 object-contain drop-shadow-xl bg-white/40 dark:bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-1"
            priority
          />
          <div className="hidden lg:flex flex-col">
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-none">Spring Field</span>
            <span className="text-[10px] font-bold text-[#00a651] tracking-widest uppercase mt-1">Developments Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#00a651] ${
                pathname === link.href ? 'text-[#00a651]' : 'text-zinc-800 dark:text-zinc-200'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="h-[2px] w-full bg-[#00a651] mt-1"
                />
              )}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-[#00a651] dark:hover:text-[#00a651] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          {/* Mobile Menu Toggle */}
          <button
            className="text-zinc-800 dark:text-zinc-200 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-lg border-t border-zinc-100 dark:border-zinc-800 py-6 md:hidden flex flex-col items-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href ? 'text-[#00a651]' : 'text-zinc-800 dark:text-zinc-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
