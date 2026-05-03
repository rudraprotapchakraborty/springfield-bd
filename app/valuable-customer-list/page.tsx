'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, ArrowUpRight, Crown, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';

interface Client {
  num: string;
  text: string;
}

const clients: Client[] = [
  { num: '01', text: 'Nobel Laureate, Professor Dr. Mohammad Yunus (SRTC)' },
  { num: '02', text: 'Pizza Hut, World-famous franchise fast food (SRTC)' },
  { num: '03', text: 'The City Bank Ltd. (SRTC)' },
  { num: '04', text: 'Grameen Telecom (SRTC)' },
  { num: '05', text: 'Anower Hossain Khan (Chairman, Shahjalal Islami Bank Ltd.) — Queens Park' },
  { num: '06', text: 'Md. Shahidul Islam, Managing Director (In charge, UCBL) — S.S. Muntaha' },
  { num: '07', text: 'Prof. Dr. Khurshed Alom Mujumder — Queens Park' },
  { num: '08', text: 'Group Capt. Hasan Faruk (BAF) — Spring Spark' },
  { num: '09', text: 'Prof. Mohammad Abdullah (Ex. Parliament Member) — Queens Park' },
  { num: '10', text: 'Prof. Dr. Shofiul Alom (Ex. Civil Surgeon) — Queens Park' },
  { num: '11', text: 'Md. Sirajul Islam (MD, Shifa Group)' },
  { num: '12', text: 'Prof. Dr. Mohibur Rahman — Queens Park' },
  { num: '13', text: 'Prof. Dr. Ahmed Ali (Skin & VD Specialist) — Queens Park' },
  { num: '14', text: 'Barrister MAK Sultan (Barrister & Solicitor, Canadian Immigration & Refugee Law) — S.S. Muntaha' },
  { num: '15', text: 'Prof. Dr. Mohammad Shohidullah — Spring Spark' },
  { num: '16', text: 'Prof. Dr. Ziauddin (Spring Ziauddin Villa — Land Owner)' },
  { num: '17', text: 'Moinuddin Biswas (Chairman, CIP, Govt. of the People’s Republic of Bangladesh)' },
  { num: '18', text: 'Md. Mokbul Hossain Bhuiyan (MD, Bhuiyan Textile Mills Ltd.) — Queens Park' },
  { num: '19', text: 'Abdul Fattah (Chairman, Global Brand Pvt. Ltd.)' },
  { num: '20', text: 'Abdul Motel Khan (Chairman, New Foods Ltd.)' },
  { num: '21', text: 'Dr. KH Md. Shafiqur Rahman (Secretary General, Pioneer Dental College & Hospital)' },
  { num: '22', text: 'DIG Mir Hasmat Ullah — Spring Rajbari' },
  { num: '23', text: 'Md. Aminuzzaman (Director, Finance & Accounts, Biswas Group)' },
  { num: '24', text: 'Md. Abdul Kader (Commander, Ansar & VDP)' },
];

export default function ValuableCustomerList() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return clients;
    return clients.filter((c) => c.text.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Valuable customers"
        title={
          <>
            Trusted by leaders, <span className="gradient-text italic">cherished</span> by
            families.
          </>
        }
        subtitle="A glimpse at the remarkable individuals and organizations who have made Spring Field their home, office, or investment."
      />

      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        {/* Search & meta */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-900/70 backdrop-blur border border-white/60 dark:border-white/5">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[#00a651]/12 text-[#00a651]">
              <Crown size={16} />
            </span>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
                {clients.length} honored clients
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                And counting…
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or project…"
              className="w-full pl-12 pr-4 py-3 bg-white/80 dark:bg-zinc-900/70 backdrop-blur border border-white/60 dark:border-white/5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] text-sm transition-all"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              size={16}
            />
          </div>
        </motion.div>

        {/* Honor list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((client, idx) => (
            <motion.div
              key={client.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              className="group flex gap-4 p-5 rounded-3xl bg-white/85 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:border-[#00a651]/40 hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a651] to-[#076c3c] grid place-items-center text-white font-display text-xl shadow-lg shadow-[#00a651]/20">
                  {client.num}
                </div>
              </div>
              <p className="flex-1 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {client.text}
              </p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur p-10 text-center text-zinc-500 dark:text-zinc-400 border border-white/60 dark:border-white/5">
            No clients match your search.
          </div>
        )}

        {/* Become part of the family */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#00a651] via-[#079e54] to-[#076c3c] text-white shadow-2xl"
        >
          <div aria-hidden className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Spring Begonia.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative p-10 md:p-14 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-white/15">
                <Award size={12} /> Become a part
              </span>
              <h3 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Your address among the most cherished in Dhaka.
              </h3>
            </div>
            <div className="md:text-right">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#076c3c] font-semibold hover:scale-[1.03] transition-transform shadow-lg"
              >
                Browse projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
