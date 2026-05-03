'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './../data/projects';
import { Info, Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import InterestModal from '../components/InterestModal';

const FILTERS: { label: string; value: 'all' | 'ongoing' | 'upcoming' | 'completed' }[] = [
  { label: 'All projects', value: 'all' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Completed', value: 'completed' },
];

export default function AllProjects() {
  const [feedbackProject, setFeedbackProject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] =
    useState<'all' | 'ongoing' | 'upcoming' | 'completed'>('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const counts = useMemo(() => {
    return {
      all: projects.length,
      ongoing: projects.filter((p) => p.status === 'ongoing').length,
      upcoming: projects.filter((p) => p.status === 'upcoming').length,
      completed: projects.filter((p) => p.status === 'completed').length,
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) || project.address.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Every project a <span className="gradient-text italic">landmark</span>.
          </>
        }
        subtitle="Explore the full collection — landmark addresses, signature commercial spaces, and the future of urban living across Bangladesh."
      />

      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row gap-5 justify-between items-stretch md:items-center bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/60 dark:border-white/5 p-3 md:p-4 rounded-3xl shadow-xl"
        >
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  statusFilter === f.value
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                    : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {f.label}
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    statusFilter === f.value
                      ? 'bg-white/20 text-white dark:bg-zinc-900/20 dark:text-zinc-900'
                      : 'bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200'
                  }`}
                >
                  {counts[f.value]}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 md:ml-auto">
            <input
              type="text"
              placeholder="Search by name or address…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00a651]/40 focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[40vh] bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-3xl shadow-sm border border-white/60 dark:border-white/5"
            >
              <div className="text-zinc-500 dark:text-zinc-400 text-lg font-medium flex items-center gap-3 text-center px-8">
                <Info size={22} className="text-[#00a651]" />
                No projects match your search. Try a different filter or search term.
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={statusFilter + searchQuery}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onShowInterest={setFeedbackProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InterestModal
        open={feedbackProject !== null}
        projectTitle={feedbackProject}
        onClose={() => setFeedbackProject(null)}
      />
    </div>
  );
}
