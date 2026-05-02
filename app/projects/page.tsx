'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './../data/projects';
import { ArrowRight, Info, Search, Filter } from 'lucide-react';

export default function AllProjects() {
  const [feedbackProject, setFeedbackProject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-4">All <span className="font-bold">Projects</span></h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Explore our entire portfolio of completed, ongoing, and upcoming projects.</p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-center bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800"
        >
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {['all', 'ongoing', 'completed', 'upcoming'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all ${statusFilter === status
                    ? 'bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 shadow-md'
                    : 'bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[40vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800"
            >
              <div className="text-zinc-400 dark:text-zinc-500 text-xl font-light flex items-center gap-3">
                <Info size={28} />
                No projects match your search criteria.
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={itemVariants}
                  layout
                  className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 dark:border-zinc-800 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image || "/building2.png"}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      alt={project.title}
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#00a651] uppercase">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 flex-grow">{project.address}</p>

                    <div className="flex justify-between items-center pt-6 border-t border-zinc-100 dark:border-zinc-800">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-[#00a651] dark:hover:text-[#00a651] transition-colors"
                      >
                        View Details <ArrowRight size={16} />
                      </Link>
                      <button
                        onClick={() => setFeedbackProject(project.title)}
                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        Show Interest
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {feedbackProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 w-full max-w-lg rounded-3xl shadow-2xl relative"
          >
            <button
              onClick={() => setFeedbackProject(null)}
              className="absolute top-6 right-6 text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100">Send Your Feedback</h2>
            <form onSubmit={(e) => { e.preventDefault(); setFeedbackProject(null); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                <input type="text" className="w-full border-b-2 border-zinc-200 dark:border-zinc-700 py-2 focus:outline-none focus:border-[#00a651] transition-colors bg-transparent text-zinc-900 dark:text-zinc-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">E-mail</label>
                <input type="email" className="w-full border-b-2 border-zinc-200 dark:border-zinc-700 py-2 focus:outline-none focus:border-[#00a651] transition-colors bg-transparent text-zinc-900 dark:text-zinc-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Phone</label>
                <input type="tel" className="w-full border-b-2 border-zinc-200 dark:border-zinc-700 py-2 focus:outline-none focus:border-[#00a651] transition-colors bg-transparent text-zinc-900 dark:text-zinc-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Comments</label>
                <textarea className="w-full border-2 border-zinc-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-[#00a651] transition-colors h-32 resize-none bg-transparent text-zinc-900 dark:text-zinc-100" required></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="flex-1 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 py-3 rounded-full font-semibold hover:bg-[#00a651] transition-colors">Submit</button>
                <button type="reset" className="px-8 py-3 rounded-full font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700">Reset</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
