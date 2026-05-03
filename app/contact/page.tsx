'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  RefreshCcw,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const channels = [
  {
    icon: MapPin,
    title: 'Visit us',
    body: (
      <>
        Spring Field Developments Ltd.
        <br />
        House # 02, Road # 23/C, Gulshan-1
        <br />
        Dhaka-1212, Bangladesh
      </>
    ),
    cta: { label: 'Open in Maps', href: 'https://maps.google.com/?q=Gulshan+1+Dhaka' },
  },
  {
    icon: Phone,
    title: 'Talk to us',
    body: '+880 (2) 9895548\n+880 (2) 9893460\n+880 (2) 8825341',
    cta: { label: 'Call now', href: 'tel:+88029895548' },
  },
  {
    icon: Mail,
    title: 'Write to us',
    body: 'info@springfieldbd.com\nsales@springfieldbd.com',
    cta: { label: 'Send email', href: 'mailto:info@springfieldbd.com' },
  },
  {
    icon: Globe,
    title: 'Online',
    body: 'www.springfieldbd.com\nFollow us on social',
    cta: { label: 'Visit site', href: 'https://www.springfieldbd.com' },
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'general' | 'feedback'>('general');

  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We&apos;d love to <span className="gradient-text italic">hear from you</span>.
          </>
        }
        subtitle="Whether you’re looking for your next home, considering a career, or simply have a question — drop us a line and a real human will reply."
      />

      {/* Channel cards */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 -mt-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((c) => (
            <motion.a
              key={c.title}
              href={c.cta.href}
              target={c.cta.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur border border-white/60 dark:border-white/5 p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#00a651]/12 text-[#00a651]">
                  <c.icon size={20} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-400 group-hover:text-[#00a651] transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-line leading-relaxed">
                {c.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#00a651] uppercase tracking-widest">
                {c.cta.label}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-[36px] overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/60 dark:border-white/5 shadow-2xl grid grid-cols-1 lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-2 relative min-h-[360px] lg:min-h-[640px]">
            <iframe
              title="Spring Field office map"
              src="https://www.google.com/maps?q=Gulshan+1,+Dhaka,+Bangladesh&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 dark:border-white/10 flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#00a651] text-white">
                <Clock size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  Office hours
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Sun – Thu · 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Form / Tabs */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <div className="inline-flex bg-zinc-100 dark:bg-zinc-800/60 rounded-full p-1 mb-8 shadow-inner">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'general'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                }`}
              >
                General contact
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'feedback'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                }`}
              >
                Send feedback
              </button>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'general' ? (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100">
                      Head office
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                      Stop by, call or send a message — we&apos;ll respond within one business day.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { icon: MapPin, title: 'Address', text: 'House # 02, Road # 23/C\nGulshan-1, Dhaka-1212' },
                      { icon: Phone, title: 'Phone', text: '9895548 · 9893460\n8825341 · 9851544' },
                      { icon: Mail, title: 'Email', text: 'info@springfieldbd.com' },
                      { icon: Globe, title: 'Website', text: 'www.springfieldbd.com' },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800"
                      >
                        <div className="bg-[#00a651]/12 p-2.5 rounded-xl text-[#00a651] shrink-0">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 text-sm">
                            {item.title}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 mb-2">
                    Send your feedback
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">
                    Share your thoughts — we read every message.
                  </p>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Name *" type="text" />
                      <Input label="Email *" type="email" />
                    </div>
                    <Input label="Phone" type="tel" />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Comments
                      </label>
                      <textarea
                        required
                        className="w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] transition-all h-32 resize-none text-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3.5 rounded-full font-semibold hover:bg-[#00a651] hover:text-white transition-colors shadow-lg"
                      >
                        <Send size={16} /> Submit
                      </button>
                      <button
                        type="reset"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700"
                      >
                        <RefreshCcw size={16} /> Reset
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={label.includes('*')}
        className="w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] transition-all text-zinc-900 dark:text-zinc-100"
      />
    </div>
  );
}
