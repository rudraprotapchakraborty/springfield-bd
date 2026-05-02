'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, number, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


const statsLeft = [
  { value: '11M+', label: 'Total Area Built\n(Million sft.)' },
  { value: '21', label: 'Years Since Inception' },
  { value: '63', label: 'Number of\nCompleted Projects' },
];

const statsRight = [
  { value: '100+', label: 'Number of Projects' },
  { value: '1500+', label: 'Happy Clients' },
  { value: '18M+', label: 'Total Area in Pipeline\n(Million sft.)' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('background');
  const { scrollY } = useScroll();
  const buildingY = useTransform(scrollY, [0, 500], [0, -100]);
  const buildingScale = useTransform(scrollY, [0, 500], [1.1, 1.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center z-10 mb-8 px-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-zinc-800 dark:text-zinc-100 leading-tight">
            Witness, As We
            <br />
            <span className="font-bold text-zinc-900 dark:text-white">Transform Your</span> Land
            <br />
            to a <span className="font-bold text-zinc-900 dark:text-white">Landmark</span>
          </h2>
        </motion.div>

        <div className="container mx-auto px-4 md:px-12 relative flex flex-col md:flex-row items-center justify-between w-full flex-grow pb-24">
          
          {/* Left Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full md:w-1/5 flex flex-col gap-12 md:gap-24 text-center md:text-left z-10 order-2 md:order-1 mt-12 md:mt-0"
          >
            {statsLeft.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-light text-[#00a651] mb-2"><AnimatedCounter value={stat.value} /></span>
                <span className="text-sm md:text-xs text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: buildingY, scale: buildingScale }}
            className="w-full md:w-3/5 flex justify-center items-start h-[45vh] md:h-[65vh] relative z-0 order-1 md:order-2 overflow-hidden"
          >
            <div className="relative w-full h-[150%] max-w-2xl -mt-[10%]">
              <Image
                src="/building.png"
                alt="Modern Landmark Building"
                fill
                className="object-contain object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full md:w-1/5 flex flex-col gap-12 md:gap-24 text-center md:text-right z-10 order-3 md:order-3 mt-12 md:mt-0"
          >
            {statsRight.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-light text-[#00a651] mb-2"><AnimatedCounter value={stat.value} /></span>
                <span className="text-sm md:text-xs text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-400"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>

        {/* Floating WhatsApp Button */}
        <Link
          href="https://wa.me/1234567890" // Placeholder link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={28} />
        </Link>
      </section>

      {/* About Us / Legacy Section Modernized */}
      <section className="py-24 bg-white dark:bg-zinc-950 px-6 md:px-12 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h3 className="text-sm font-bold tracking-widest text-[#00a651] uppercase mb-4">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100">Building the Future of Bangladesh</h2>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-full p-1 shadow-inner">
              <button
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'background' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
                onClick={() => setActiveTab('background')}
              >
                Background
              </button>
              <button
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'message' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
                onClick={() => setActiveTab('message')}
              >
                Message
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg mx-auto text-zinc-600 dark:text-zinc-400 font-light"
          >
            {activeTab === 'background' ? (
              <div className="space-y-6">
                <p>
                  <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Spring field Developments Ltd.</strong> is a well organized, target oriented venture by a group of extremely talented, hard-working, skilled personnel who has the hallmark of many illustrious projects to their credit. In last 15 years we have constructed lot of multistoried & commercial project like Spring Rahmat-E-Tuba Complex & Residential project like Queens Park in Dhanmondi, Spring Spark at Baridhara and projects in Mohakhali, Mirpur DOHS and also so many other attractive projects at different prime location of Dhaka City.
                </p>
                <p>
                  Spring Field is also doing Amusement & Children Park Design and also supplying equipments & setting up entire park as per design. Recently we have completed 15 Children Park of Bangladesh NAVY at Different location.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                  <div>
                    <h4 className="text-zinc-900 dark:text-zinc-100 font-medium mb-2">Silver Dragon Mattress</h4>
                    <p className="text-sm">Involved in manufacture in Marketing of different quality Mattress all over the Bangladesh through corporate furniture dealers.</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-zinc-100 font-medium mb-2">Silver Furnishing World</h4>
                    <p className="text-sm">Dealing the furnishing business and interior designing work and also doing manufacture of world class standard furniture.</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-zinc-100 font-medium mb-2">MM Traders</h4>
                    <p className="text-sm">Doing international trading through DGDP and supplied fire fighting equipments and fire jeep to Bangladesh NAVY.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-light text-zinc-800 dark:text-zinc-200 mb-6">Message from the Chairman</h3>
                <div className="text-4xl md:text-5xl font-['Playfair_Display',serif] italic text-[#00a651] mt-8 tracking-wide">
                  &quot;... true joy&apos;s of life...&quot;
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Developments & Offers Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 px-6 md:px-12 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-sm font-bold tracking-widest text-[#00a651] uppercase mb-4">Featured</h3>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100">Developments & Offers</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Video 1: Spring Field Developments Ltd */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] bg-black">
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
              <div className="mt-8 px-4">
                <h4 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-3">Spring Field Developments Ltd</h4>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Experience the pinnacle of modern architecture and luxury living. Witness how we transform landscapes into landmarks, crafting spaces that redefine urban elegance.
                </p>
              </div>
            </motion.div>

            {/* Video 2: Zohura Spring Garden */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] bg-black">
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
                {/* Optional overlay badge for offer */}
                <div className="absolute top-6 right-6 bg-[#00a651] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg z-10 animate-pulse">
                  Exclusive Offer
                </div>
              </div>
              <div className="mt-8 px-4">
                <h4 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-3">Zohura Spring Garden</h4>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  Located in the prestigious Bashundhara R/A. Secure your future home today.
                </p>
                <div className="inline-block bg-orange-50 dark:bg-[#f36523]/10 border border-orange-200 dark:border-[#f36523]/30 text-orange-700 dark:text-orange-400 px-6 py-3 rounded-2xl shadow-sm">
                  <span className="font-bold text-lg block mb-1">1/2 Khata Land is FREE!</span>
                  <span className="text-sm font-medium opacity-90">Limited time exclusive offer.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
