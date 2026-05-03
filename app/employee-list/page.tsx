'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  HardHat,
  PenTool,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  HeartHandshake,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const departments = [
  {
    name: 'Leadership',
    icon: ShieldCheck,
    count: 6,
    desc: 'The vision-keepers steering the company forward.',
  },
  {
    name: 'Architecture & Design',
    icon: PenTool,
    count: 22,
    desc: 'Designers and architects shaping every façade.',
  },
  {
    name: 'Engineering & Construction',
    icon: HardHat,
    count: 48,
    desc: 'Engineers, project managers and craftspeople on the ground.',
  },
  {
    name: 'Sales & Customer Success',
    icon: HeartHandshake,
    count: 18,
    desc: 'Relationship managers who never go off-call.',
  },
  {
    name: 'Operations',
    icon: Briefcase,
    count: 14,
    desc: 'Finance, HR and operations keeping the wheels turning.',
  },
  {
    name: 'After-care',
    icon: Users,
    count: 12,
    desc: 'Lifelong support for every keys handover.',
  },
];

export default function EmployeeList() {
  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Our People"
        title={
          <>
            Meet the team behind every <span className="gradient-text italic">landmark</span>.
          </>
        }
        subtitle="A multi-disciplinary collective of architects, engineers, designers and operators — united by a passion for crafting timeless places."
      />

      {/* Top stat strip */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 -mt-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-gradient-to-br from-[#00a651]/30 via-zinc-200/40 to-[#f36523]/30 dark:from-[#00a651]/30 dark:via-zinc-800/40 dark:to-[#f36523]/30 p-px shadow-lg">
          {[
            { stat: '120+', label: 'People' },
            { stat: '21', label: 'Years strong' },
            { stat: '06', label: 'Departments' },
            { stat: '94%', label: 'Retention' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white dark:bg-zinc-950 px-5 py-7 flex flex-col items-center text-center"
            >
              <span className="font-display text-3xl md:text-4xl text-[#00a651] leading-none">
                {s.stat}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.18em] font-semibold text-zinc-500 dark:text-zinc-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Departments grid */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
              Departments
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 leading-tight">
              Every domain, every detail.
            </h2>
          </div>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a651] hover:gap-3 transition-all"
          >
            Join the team <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/60 dark:border-white/5 p-7 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00a651]/8 blur-3xl group-hover:bg-[#00a651]/15 transition-colors" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#00a651]/12 text-[#00a651]">
                    <d.icon size={20} />
                  </span>
                  <span className="text-3xl font-display text-zinc-300 dark:text-zinc-700 leading-none">
                    {String(d.count).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming soon directory */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-zinc-900 via-[#0e2317] to-[#11150b] text-white shadow-2xl"
        >
          <div aria-hidden className="absolute inset-0 dot-bg opacity-40" />
          <div aria-hidden className="absolute -top-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-[#00a651]/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-5 gap-8 p-8 md:p-14 items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00d56a] bg-white/5 ring-1 ring-white/10">
                Directory
              </span>
              <h3 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-balance">
                A full team directory is on the way.
              </h3>
              <p className="mt-3 text-white/70 max-w-xl">
                We&apos;re photographing each team member and writing thoughtful introductions — so
                when you reach out, you know exactly who you&apos;re talking to.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3.5 rounded-full font-semibold hover:scale-[1.03] transition-transform"
                >
                  <Mail size={16} /> Email leadership
                </Link>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  Open positions
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 grid place-items-center"
                >
                  <Users size={24} className="text-white/40" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
