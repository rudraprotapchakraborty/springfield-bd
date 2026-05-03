'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, RefreshCcw } from 'lucide-react';
import { useEffect } from 'react';

interface InterestModalProps {
  open: boolean;
  onClose: () => void;
  projectTitle?: string | null;
  heading?: string;
}

export default function InterestModal({
  open,
  onClose,
  projectTitle,
  heading = 'Express Interest',
}: InterestModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-white dark:bg-zinc-900 w-full max-w-lg rounded-3xl shadow-2xl border border-white/50 dark:border-white/10 overflow-hidden"
          >
            {/* Top decorative band */}
            <div className="h-1.5 bg-gradient-to-r from-[#00a651] via-[#00d56a] to-[#f36523]" />

            <div className="p-8 md:p-10">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 mb-2">
                {heading}
              </h3>
              {projectTitle && (
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                  Regarding{' '}
                  <span className="font-semibold text-[#00a651]">{projectTitle}</span>
                </p>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Name" type="text" />
                  <Field label="Email" type="email" />
                </div>
                <Field label="Phone" type="tel" />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] transition-all h-32 resize-none text-zinc-900 dark:text-zinc-100"
                    placeholder="Tell us what you're looking for…"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-2xl font-semibold hover:bg-[#00a651] hover:text-white transition-colors shadow-lg"
                  >
                    <Send size={16} /> Submit
                  </button>
                  <button
                    type="reset"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <RefreshCcw size={16} />
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        required
        className="w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] transition-all text-zinc-900 dark:text-zinc-100"
      />
    </div>
  );
}
