'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  Compass,
  Hammer,
  Hand,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { projects } from './data/projects';

function AnimatedCounter({ value }: { value: string }) {
  const numMatch = value.match(/[\d.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const decimals = number % 1 !== 0 ? 1 : 0;
    return latest.toFixed(decimals) + suffix;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, number, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: '11M+', label: 'Sft. Built' },
  { value: '21', label: 'Years' },
  { value: '63', label: 'Completed' },
  { value: '100+', label: 'Projects' },
  { value: '1500+', label: 'Happy Clients' },
  { value: '18M+', label: 'In Pipeline' },
];

const whyUs = [
  {
    icon: Award,
    title: 'Two decades of trust',
    body: 'Twenty-one years of crafting iconic addresses across Dhaka with an unwavering commitment to quality.',
  },
  {
    icon: Compass,
    title: 'Prime locations',
    body: 'A meticulously curated portfolio in Bangladesh’s most sought-after neighborhoods.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering rigour',
    body: 'Earthquake-resistant designs and premium materials, audited at every stage of construction.',
  },
  {
    icon: Leaf,
    title: 'Sustainable thinking',
    body: 'Energy-conscious facades, native landscaping and water-wise systems built into every project.',
  },
  {
    icon: Hand,
    title: 'White-glove service',
    body: 'Dedicated relationship managers from the first conversation to the day you receive your keys.',
  },
  {
    icon: Hammer,
    title: 'On-time delivery',
    body: 'Predictable timelines backed by experienced project managers and milestone-based reporting.',
  },
];

const process = [
  { step: '01', title: 'Discover', body: 'Tell us your dream — location, scale, lifestyle. We listen, then propose options that fit.' },
  { step: '02', title: 'Design', body: 'Award-winning architects iterate with you on layouts, materials and finishes.' },
  { step: '03', title: 'Develop', body: 'Engineers and craftsmen turn the vision into reality, with weekly reporting and site visits.' },
  { step: '04', title: 'Deliver', body: 'Move-in support, lifetime aftercare and a community you’ll love coming home to.' },
];

const testimonials = [
  {
    quote: 'Spring Field made the impossible feel routine. Every detail of our home reflects how carefully they listened.',
    name: 'Anower Hossain Khan',
    role: 'Chairman, Shahjalal Islami Bank Ltd.',
    project: 'Queens Park',
  },
  {
    quote: 'A team that genuinely cares. From design to handover, the experience exceeded every expectation we had.',
    name: 'Group Capt. Hasan Faruk',
    role: 'Bangladesh Air Force',
    project: 'Spring Spark',
  },
  {
    quote: 'Quality you can feel underfoot. They build for decades, not for the brochure.',
    name: 'Prof. Dr. Khurshed Alom Mujumder',
    role: 'Esteemed Resident',
    project: 'Queens Park',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('background');
  const { scrollY } = useScroll();
  const buildingY = useTransform(scrollY, [0, 700], [0, -120]);
  const buildingScale = useTransform(scrollY, [0, 700], [1.1, 1.25]);
  const heroBgY = useTransform(scrollY, [0, 700], [0, 80]);

  const featured = projects.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen pt-28 md:pt-36 flex flex-col items-center overflow-hidden">
        {/* Parallax decorative band */}
        <motion.div
          aria-hidden
          style={{ y: heroBgY }}
          className="absolute inset-x-0 top-20 mx-auto h-[60vh] max-w-6xl rounded-[60px] bg-gradient-to-br from-[#00a651]/8 via-emerald-200/30 to-[#f36523]/10 blur-2xl opacity-70"
        />

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20"
        >
          <Sparkles size={14} />
          Established 2005 · Dhaka
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 mt-6 text-center text-balance px-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-zinc-900 dark:text-white"
        >
          Witness, as we
          <br />
          <span className="gradient-text font-medium italic">transform</span> your land
          <br />
          to a <span className="gradient-text font-medium">landmark</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative z-10 max-w-2xl mt-6 text-center text-zinc-600 dark:text-zinc-400 text-lg md:text-xl px-6 text-pretty"
        >
          Bangladesh&apos;s premier real-estate developer — designing homes, offices and lifestyle
          destinations that stand the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-xl hover:bg-[#00a651] hover:text-white transition-colors"
          >
            Explore portfolio <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-zinc-100 font-semibold hover:border-[#00a651] hover:text-[#00a651] transition-colors backdrop-blur-md bg-white/40 dark:bg-white/5"
          >
            Schedule a visit
          </Link>
        </motion.div>

        {/* Floating building */}
        <div className="container mx-auto px-4 md:px-12 relative w-full flex-grow flex justify-center items-end mt-6 md:mt-8 pb-24">
          <motion.div
            style={{ y: buildingY, scale: buildingScale }}
            className="relative w-full max-w-3xl h-[35vh] md:h-[55vh]"
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/building2.png"
                alt="Modern Landmark Building"
                fill
                className="object-contain object-bottom drop-shadow-[0_40px_50px_rgba(0,0,0,0.25)]"
                priority
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden md:flex absolute top-12 -left-6 lg:left-0 items-center gap-3 px-4 py-3 rounded-2xl glass-card shadow-xl animate-float"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#00a651]/15 text-[#00a651]">
                <Building2 size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  100+ Projects
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">across Dhaka</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{ animationDelay: '-2s' }}
              className="hidden md:flex absolute top-32 -right-6 lg:right-0 items-center gap-3 px-4 py-3 rounded-2xl glass-card shadow-xl animate-float"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#f36523]/15 text-[#f36523]">
                <Star size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  4.9 Rated
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">by 1,500 owners</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-zinc-400 dark:text-zinc-500"
        >
          <ArrowDown size={26} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="relative px-6 md:px-12 -mt-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00a651]/30 via-zinc-200/40 to-[#f36523]/30 dark:from-[#00a651]/30 dark:via-zinc-800/40 dark:to-[#f36523]/30 p-px shadow-xl"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative bg-white dark:bg-zinc-950 px-5 py-7 flex flex-col items-center text-center"
              >
                <span className="font-display text-3xl md:text-4xl text-[#00a651] leading-none">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.18em] font-semibold text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl shadow-zinc-900/15 dark:shadow-black/40 border border-white/40 dark:border-white/5">
                <Image
                  src="/Spring Begonia.jpg"
                  alt="Spring Field flagship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-80">Featured</div>
                    <div className="font-display text-2xl">Spring Begonia</div>
                  </div>
                  <Link
                    href="/projects"
                    className="grid place-items-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-md hover:bg-white hover:text-zinc-900 transition-colors"
                    aria-label="View projects"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="hidden md:flex absolute -bottom-8 -right-8 items-center gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-100 dark:border-white/5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#00a651]/12 text-[#00a651]">
                  <Users size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                    1,500+ families
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">call us home</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
                About us
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-[1.05] text-balance">
                Building the future of <span className="gradient-text italic">Bangladesh</span>.
              </h2>

              <div className="mt-8 inline-flex bg-zinc-100 dark:bg-zinc-900 rounded-full p-1 shadow-inner">
                <button
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'background'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                  onClick={() => setActiveTab('background')}
                >
                  Background
                </button>
                <button
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'message'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                  onClick={() => setActiveTab('message')}
                >
                  Message
                </button>
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed"
              >
                {activeTab === 'background' ? (
                  <div className="space-y-5">
                    <p>
                      <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                        Spring Field Developments Ltd.
                      </strong>{' '}
                      is a target-oriented venture by a group of extremely talented, hard-working
                      and skilled professionals — with a hallmark of illustrious projects to their
                      credit. Our story spans more than two decades of multi-storied residential
                      and commercial developments at the most prized locations of Dhaka.
                    </p>
                    <p>
                      Beyond real estate, the group is also active in amusement &amp; children
                      park design, having delivered fifteen children parks for the Bangladesh Navy.
                      Spring Field is a family of passionate makers — and an address you can trust.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 pt-6">
                      {[
                        {
                          name: 'Silver Dragon Mattress',
                          desc: 'Manufacture & marketing of premium mattresses across Bangladesh.',
                        },
                        {
                          name: 'Silver Furnishing World',
                          desc: 'World-class furniture, interior design and complete furnishing.',
                        },
                        {
                          name: 'MM Traders',
                          desc: 'International trading and supply for the Bangladesh Navy.',
                        },
                      ].map((g) => (
                        <div
                          key={g.name}
                          className="rounded-2xl border border-zinc-100 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
                        >
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">
                            {g.name}
                          </h4>
                          <p className="text-xs leading-relaxed">{g.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-[#00a651]/20 bg-gradient-to-br from-[#00a651]/5 to-[#f36523]/5 p-8 md:p-10">
                    <p className="font-display italic text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100 leading-snug">
                      &ldquo;True joys in life come from the homes we build, the streets we shape
                      and the families that thrive in them.&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a651] to-[#076c3c] grid place-items-center text-white font-bold">
                        SF
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          Office of the Chairman
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          Spring Field Developments Ltd.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-50/60 dark:bg-zinc-900/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
              Why Spring Field
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
              Crafted with intent. Delivered with pride.
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              Six reasons families and businesses across the country choose us — again and again.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyUs.map((w) => (
              <motion.div
                key={w.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00a651]/8 blur-2xl group-hover:bg-[#00a651]/15 transition-colors" />
                <div className="relative">
                  <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-[#00a651]/12 text-[#00a651] mb-5">
                    <w.icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
                Selected works
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
                Recent projects that <span className="gradient-text italic">define</span> us.
              </h2>
            </motion.div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a651] hover:gap-3 transition-all"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((p) => (
              <motion.div
                key={p.slug}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/5] shadow-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <span className="self-start mb-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-white/15 backdrop-blur-md">
                    {p.status}
                  </span>
                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="text-sm text-white/70 mt-1 line-clamp-1">{p.address}</p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold opacity-90 group-hover:opacity-100"
                  >
                    Discover <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-zinc-900 to-[#11150b] text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 dot-bg opacity-50" />
        <div aria-hidden className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-[#00a651]/20 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#f36523]/20 blur-3xl" />

        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00d56a] bg-white/5 ring-1 ring-white/10">
              The process
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-balance">
              From conversation to keys, in four considered steps.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((s) => (
              <motion.div
                key={s.step}
                variants={itemVariants}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 hover:border-[#00a651]/40 transition-colors"
              >
                <span className="font-display text-5xl text-white/15 group-hover:text-[#00a651]">
                  {s.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
              Voices of our community
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
              Trusted by leaders, lived in by families.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-3xl bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow"
              >
                <span aria-hidden className="absolute top-6 right-7 font-display text-7xl text-[#00a651]/15 leading-none">
                  &ldquo;
                </span>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-[#00a651] to-[#076c3c] text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {t.role} · {t.project}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEVELOPMENTS & OFFERS ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-50/60 dark:bg-zinc-900/40 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20">
              Developments &amp; offers
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
              See it in motion.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-video rounded-[28px] overflow-hidden shadow-2xl bg-black border border-white/5 transition-transform duration-500 group-hover:-translate-y-1">
                <video
                  src="/video 1.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  controlsList="nodownload"
                />
              </div>
              <div className="mt-8">
                <h4 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
                  Spring Field Developments
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Experience the pinnacle of modern architecture and luxury living. Witness how we
                  transform landscapes into landmarks, crafting spaces that redefine urban
                  elegance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-video rounded-[28px] overflow-hidden shadow-2xl bg-black border border-white/5 transition-transform duration-500 group-hover:-translate-y-1">
                <video
                  src="/video 2.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  controlsList="nodownload"
                />
                <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-[#f36523] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Exclusive offer
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
                  Zohura Spring Garden
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  Located in the prestigious Bashundhara R/A. Secure your future home today.
                </p>
                <div className="inline-flex items-start gap-4 rounded-2xl border border-[#f36523]/30 bg-[#f36523]/5 p-5">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#f36523] text-white shrink-0">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                      ½ Khata of land — completely free
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Limited availability. Subject to terms.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
