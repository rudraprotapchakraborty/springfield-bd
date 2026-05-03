'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Building2,
  Hammer,
  Sparkles,
  ListChecks,
  Users,
  Crown,
} from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavLink {
  name: string;
  href: string;
  children?: { name: string; href: string; description?: string; icon?: typeof Building2 }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Projects',
    href: '/projects',
    children: [
      { name: 'All Projects', href: '/projects', description: 'Browse the full portfolio', icon: ListChecks },
      { name: 'Ongoing', href: '/ongoing-projects', description: 'In progress today', icon: Hammer },
      { name: 'Upcoming', href: '/upcoming-projects', description: 'On the horizon', icon: Sparkles },
      { name: 'Completed', href: '/completed-projects', description: 'Delivered landmarks', icon: Building2 },
    ],
  },
  {
    name: 'Company',
    href: '/employee-list',
    children: [
      {
        name: 'Our Team',
        href: '/employee-list',
        description: 'The people behind every landmark',
        icon: Users,
      },
      {
        name: 'Valued Customers',
        href: '/valuable-customer-list',
        description: 'Leaders & families who trust us',
        icon: Crown,
      },
    ],
  },
  { name: 'Career', href: '/career' },
  { name: 'Notice Board', href: '/notice-board' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 ${
        isScrolled
          ? 'bg-white/75 dark:bg-zinc-950/70 backdrop-blur-xl shadow-[0_2px_30px_-15px_rgba(0,0,0,0.2)] border-b border-white/40 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a651] via-[#00d56a] to-[#f36523] origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center h-full">
        <Link
          href="/"
          onClick={handleNavigate}
          className="flex items-center gap-3 md:gap-4 relative z-10 group"
        >
          <motion.div
            whileHover={{ rotate: -4 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative"
          >
            <Image
              src={mounted && resolvedTheme === 'dark' ? '/logo2.png' : '/logo.png'}
              alt="Spring Field Developments Ltd."
              width={220}
              height={90}
              className="w-auto h-12 md:h-16 object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
          <div className="hidden lg:flex flex-col">
            <span className="font-display text-xl tracking-tight text-zinc-900 dark:text-zinc-100 leading-none">
              Spring Field
            </span>
            <span className="text-[10px] font-bold text-[#00a651] tracking-[0.25em] uppercase mt-1">
              Developments Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                onClick={handleNavigate}
                className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-[#00a651]'
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#00a651] to-[#00b85a] shadow-md shadow-[#00a651]/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.children && openDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80"
                  >
                    <div className="rounded-3xl bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/40 border border-white/60 dark:border-white/10 p-3">
                      {link.children.map((child) => {
                        const Icon = child.icon ?? Building2;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={handleNavigate}
                            className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#00a651]/8 dark:hover:bg-white/5 transition-colors group"
                          >
                            <span className="bg-[#00a651]/12 text-[#00a651] p-2.5 rounded-xl">
                              <Icon size={18} />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-[#00a651] transition-colors">
                                {child.name}
                              </span>
                              {child.description && (
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                  {child.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="relative p-2.5 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md text-zinc-700 dark:text-zinc-200 hover:text-[#00a651] dark:hover:text-[#00a651] transition-colors border border-white/50 dark:border-white/10 shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={resolvedTheme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          )}

          <Link
            href="/contact"
            onClick={handleNavigate}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#00a651] hover:text-white transition-colors shadow-md"
          >
            Get in touch
          </Link>

          <button
            className="md:hidden text-zinc-800 dark:text-zinc-200 p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-white/50 dark:border-white/10"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-800 md:hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={handleNavigate}
                    className={`py-3 px-4 rounded-2xl font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-[#00a651] text-white shadow-md'
                        : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="ml-3 mt-1 mb-2 flex flex-col gap-0.5 border-l border-zinc-200 dark:border-zinc-800 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleNavigate}
                          className="py-2 px-3 rounded-xl text-sm text-zinc-600 dark:text-zinc-400 hover:bg-[#00a651]/10 hover:text-[#00a651] transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={handleNavigate}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#00a651] hover:text-white transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
