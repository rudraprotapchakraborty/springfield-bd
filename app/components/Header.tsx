'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-3 md:gap-4 relative z-10">
          <Image
            src="/logo.png"
            alt="Spring Field Developments Ltd."
            width={280}
            height={120}
            className="w-auto h-20 md:h-28 object-contain drop-shadow-xl bg-white/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-1"
            priority
          />
          <div className="hidden lg:flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-zinc-900 leading-none">Spring Field</span>
            <span className="text-xs font-bold text-[#00a651] tracking-widest uppercase mt-1">Developments Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#00a651] ${
                pathname === link.href ? 'text-[#00a651]' : 'text-zinc-800'
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
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-800 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-t border-zinc-100 py-6 md:hidden flex flex-col items-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href ? 'text-[#00a651]' : 'text-zinc-800'
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
