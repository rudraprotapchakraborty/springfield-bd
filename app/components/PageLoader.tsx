'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Whenever pathname or searchParams change, trigger the loader
    // Defer the state update to avoid synchronous state updates in effect warnings
    setTimeout(() => setLoading(true), 0);
    
    // 1.2s timeout gives enough time for the "fill up" animation to complete
    // and visually simulate a page load transition.
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#f8fbf4] dark:bg-zinc-950 flex items-center justify-center pointer-events-none transition-colors duration-300"
        >
          {/* Leaf SVG container */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            
            {/* Outline Leaf (Background) */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full stroke-[#00a651] stroke-[2px] fill-transparent opacity-30"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g transform="rotate(20 50 50)">
                {/* 3-Pointed Leaf Path */}
                <path d="M 50 10 Q 35 40 10 40 Q 0 50 20 70 Q 40 80 50 95 Q 60 80 80 70 Q 100 50 90 40 Q 65 40 50 10 Z" />
                {/* Inner veins */}
                <path d="M 50 95 C 50 70 50 50 50 10 M 50 65 Q 35 60 15 45 M 50 65 Q 65 60 85 45" strokeWidth="1" opacity="0.5" />
              </g>
            </svg>

            {/* Filled Leaf (Foreground animated) */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full fill-[#00a651]"
            >
              <defs>
                <clipPath id="water-fill-clip">
                  <motion.path
                    d="M 0 50 Q 25 35 50 50 T 100 50 T 150 50 T 200 50 L 200 250 L 0 250 Z"
                    initial={{ x: 0, y: 70 }}
                    animate={{ 
                      x: [0, -100], 
                      y: [70, -60] 
                    }}
                    transition={{
                      x: { repeat: Infinity, repeatType: "loop", duration: 1.2, ease: "linear" },
                      y: { duration: 1.5, ease: "easeInOut" }
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
