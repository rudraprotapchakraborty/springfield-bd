'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(true), 0);
    const timeout = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Backdrop with brand gradient */}
          <div className="absolute inset-0 bg-[#f8fbf4] dark:bg-zinc-950" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60 dark:opacity-30"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(0,166,81,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(243,101,35,0.12), transparent 60%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Animated leaf logo mark */}
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full stroke-[#00a651] stroke-[2px] fill-transparent opacity-30"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="rotate(20 50 50)">
                  <path d="M 50 10 Q 35 40 10 40 Q 0 50 20 70 Q 40 80 50 95 Q 60 80 80 70 Q 100 50 90 40 Q 65 40 50 10 Z" />
                  <path
                    d="M 50 95 C 50 70 50 50 50 10 M 50 65 Q 35 60 15 45 M 50 65 Q 65 60 85 45"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </g>
              </svg>

              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-[#00a651]">
                <defs>
                  <clipPath id="water-fill-clip">
                    <motion.path
                      d="M 0 50 Q 25 35 50 50 T 100 50 T 150 50 T 200 50 L 200 250 L 0 250 Z"
                      initial={{ x: 0, y: 70 }}
                      animate={{ x: [0, -100], y: [70, -60] }}
                      transition={{
                        x: { repeat: Infinity, repeatType: 'loop', duration: 1.2, ease: 'linear' },
                        y: { duration: 1.5, ease: 'easeInOut' },
                      }}
                    />
                  </clipPath>
                </defs>

                <g transform="rotate(20 50 50)">
                  <path
                    clipPath="url(#water-fill-clip)"
                    d="M 50 10 Q 35 40 10 40 Q 0 50 20 70 Q 40 80 50 95 Q 60 80 80 70 Q 100 50 90 40 Q 65 40 50 10 Z"
                  />
                </g>
              </svg>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl tracking-tight text-zinc-900 dark:text-zinc-100">
                Spring Field
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#00a651]">
                Developments Ltd.
              </span>
            </div>

            <div className="relative w-32 h-[3px] rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#00a651] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
