'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, PartyPopper, CalendarCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PageHero from '../components/PageHero';

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  type: 'Holiday' | 'Event' | 'Announcement';
}

const notices: Notice[] = [
  {
    id: 1,
    title: 'Eid-Ul-Azha holiday',
    date: '03 October, 2026',
    content:
      'This is to inform all SFD staff that our office will remain closed from 03 October, 2026 to 09 October, 2026 due to the holy occasion of Eid-Ul-Azha. We wish you and your family a peaceful celebration.',
    type: 'Holiday',
  },
  {
    id: 2,
    title: 'Quarterly townhall meeting',
    date: '15 November, 2026',
    content:
      'A mandatory townhall meeting will be held in the main conference room to discuss Q4 goals, project milestones and the year ahead. Attendance is strictly required.',
    type: 'Event',
  },
];

const typeStyles: Record<Notice['type'], { bg: string; text: string; icon: typeof Bell }> = {
  Holiday: {
    bg: 'bg-[#f36523]/12 text-[#f36523]',
    text: 'bg-[#f36523]/12 text-[#f36523]',
    icon: PartyPopper,
  },
  Event: {
    bg: 'bg-[#00a651]/12 text-[#00a651]',
    text: 'bg-[#00a651]/12 text-[#00a651]',
    icon: CalendarCheck,
  },
  Announcement: {
    bg: 'bg-amber-500/15 text-amber-600',
    text: 'bg-amber-500/15 text-amber-600',
    icon: Bell,
  },
};

export default function NoticeBoard() {
  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Notice Board"
        title={
          <>
            Stay in the loop on what&apos;s <span className="gradient-text italic">happening</span>.
          </>
        }
        subtitle="Holidays, town halls, project milestones — every important announcement, in one place."
      >
        <div className="flex justify-center mt-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400 px-4 py-2 rounded-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-white/60 dark:border-white/5">
            <Bell size={14} className="text-[#00a651]" />
            {notices.length} active notices
          </div>
        </div>
      </PageHero>

      <div className="container mx-auto max-w-4xl px-6 md:px-12">
        <div className="space-y-5">
          {notices.map((notice, index) => {
            const TypeIcon = typeStyles[notice.type].icon;
            return (
              <motion.article
                key={notice.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white/85 dark:bg-zinc-900/80 backdrop-blur p-7 md:p-9 rounded-3xl shadow-sm border border-white/60 dark:border-white/5 hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Side accent */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00a651] to-[#076c3c] origin-top scale-y-50 group-hover:scale-y-100 transition-transform duration-500"
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid place-items-center w-12 h-12 rounded-2xl shrink-0 ${typeStyles[notice.type].bg}`}
                    >
                      <TypeIcon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 leading-tight">
                        {notice.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold ${typeStyles[notice.type].text}`}
                        >
                          {notice.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                          <Calendar size={14} />
                          {notice.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed pl-0 md:pl-16">
                  {notice.content}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Subscribe-to-notices CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-[#11150b] text-white p-8 md:p-10 relative overflow-hidden"
        >
          <div aria-hidden className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#00a651]/30 blur-3xl" />
          <div aria-hidden className="absolute inset-0 dot-bg opacity-40" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl leading-tight">
                Want notices in your inbox?
              </h3>
              <p className="text-white/70 mt-2">
                Subscribe to receive announcements, project launch news and offers — directly,
                without the noise.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-900 font-semibold hover:bg-[#00a651] hover:text-white transition-colors"
            >
              Subscribe <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
