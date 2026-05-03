'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileUp,
  Send,
  Users,
  Briefcase,
  Sparkles,
  HeartHandshake,
  Rocket,
  GraduationCap,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const values = [
  {
    icon: HeartHandshake,
    title: 'People-first culture',
    body: 'We invest in our team — every voice counts and every contribution matters.',
  },
  {
    icon: Rocket,
    title: 'Built to grow',
    body: 'Career paths, mentorship and real ownership of projects from day one.',
  },
  {
    icon: GraduationCap,
    title: 'Constant learning',
    body: 'Workshops, certifications and exposure to projects that push you forward.',
  },
];

export default function Career() {
  const [activeTab, setActiveTab] = useState<'hr_philosophy' | 'cv_bucket'>('hr_philosophy');
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Career"
        title={
          <>
            Build your career, <span className="gradient-text italic">build the skyline</span>.
          </>
        }
        subtitle="Join a team of visionary architects, engineers, and operators shaping the next era of Bangladesh’s built environment."
      />

      {/* Values strip */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 -mt-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur border border-white/60 dark:border-white/5 p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-[#00a651]/12 text-[#00a651] mb-4">
                <v.icon size={20} />
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabbed content */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-[36px] shadow-2xl border border-white/60 dark:border-white/5 overflow-hidden flex flex-col md:flex-row">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-r border-zinc-100 dark:border-zinc-800 p-8 flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 self-start rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#00a651] bg-[#00a651]/10 ring-1 ring-[#00a651]/20 mb-2">
              Career options
            </span>
            <button
              onClick={() => setActiveTab('hr_philosophy')}
              className={`text-left px-5 py-4 rounded-2xl transition-all font-semibold flex items-center gap-3 ${
                activeTab === 'hr_philosophy'
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                  : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Users size={18} />
              HR Philosophy
            </button>
            <button
              onClick={() => setActiveTab('cv_bucket')}
              className={`text-left px-5 py-4 rounded-2xl transition-all font-semibold flex items-center gap-3 ${
                activeTab === 'cv_bucket'
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                  : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Briefcase size={18} />
              CV Bucket
            </button>

            <div className="mt-auto pt-8 hidden md:block">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Spring Begonia.jpg"
                  alt="Office"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-widest opacity-80">
                    Make an impact
                  </span>
                  <h4 className="font-display text-xl mt-1">Where ideas meet execution.</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'hr_philosophy' ? (
                <div className="space-y-7">
                  <h2 className="font-display text-4xl text-zinc-900 dark:text-zinc-100">
                    HR philosophy
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                    At Spring Field Developments we believe our people are our greatest asset. Our
                    HR philosophy centers around fostering a culture of continuous learning, mutual
                    respect and innovation.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We empower employees to take ownership of their work while providing the tools
                    and environment necessary to thrive. Diversity and inclusion are at the heart of
                    our hiring process — ensuring a rich blend of perspectives that drive our
                    success.
                  </p>

                  <div className="rounded-3xl bg-gradient-to-br from-[#00a651]/8 via-emerald-100/40 to-[#f36523]/5 dark:from-[#00a651]/15 dark:via-zinc-800/50 dark:to-[#f36523]/10 p-7 border border-[#00a651]/20">
                    <Sparkles className="text-[#00a651]" size={24} />
                    <p className="font-display italic text-2xl text-zinc-900 dark:text-zinc-100 mt-3 leading-snug">
                      &ldquo;Building the future starts with building the right team.&rdquo;
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    {[
                      { stat: '21', label: 'Years experience' },
                      { stat: '120+', label: 'Team members' },
                      { stat: '94%', label: 'Retention rate' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 text-center"
                      >
                        <div className="font-display text-3xl text-[#00a651]">{m.stat}</div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="font-display text-4xl text-zinc-900 dark:text-zinc-100 mb-3">
                    CV Bucket
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                    Drop your résumé here, and we&apos;ll reach out if your profile matches our
                    open positions.
                  </p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Full name *" type="text" />
                      <Input label="Email *" type="email" />
                    </div>
                    <Input label="Present address" type="text" />
                    <Input label="Phone" type="tel" />

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Upload CV (PDF / DOC / DOCX) *
                      </label>
                      <label className="relative w-full border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-3xl p-6 md:p-10 text-center hover:border-[#00a651] transition-colors cursor-pointer group block">
                        <input
                          type="file"
                          required
                          accept=".doc,.docx,.pdf"
                          onChange={(e) =>
                            setFileName(e.target.files?.[0]?.name ?? null)
                          }
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-16 h-16 mx-auto bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileUp size={26} className="text-[#00a651]" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                          {fileName ?? 'Upload your résumé'}
                        </h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                          {fileName ? 'Click again to choose a different file' : 'Drag and drop, or click to browse'}
                        </p>
                        <span className="inline-block px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-xs font-semibold group-hover:bg-[#00a651] group-hover:text-white transition-colors">
                          Browse files
                        </span>
                        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
                          Max 5MB · PDF / DOC / DOCX
                        </p>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-4 rounded-full font-semibold hover:bg-[#00a651] hover:text-white transition-colors shadow-lg"
                    >
                      <Send size={18} /> Submit application
                    </button>
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
