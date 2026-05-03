'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface PageHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
}: PageHeroProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pb-20 px-6 md:px-12">
      {/* Decorative shapes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[28rem] rounded-full bg-gradient-to-br from-[#00a651]/15 via-emerald-200/20 to-[#f36523]/10 blur-3xl" />
        <div className="absolute inset-0 dot-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className={`relative container mx-auto max-w-5xl flex flex-col gap-5 ${alignment}`}>
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00a651] animate-pulse" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50 text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-3xl text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-4 w-full">{children}</div>}
      </div>
    </section>
  );
}
