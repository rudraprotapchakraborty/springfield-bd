'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from './../data/projects';
import { ArrowRight, Info } from 'lucide-react';

export default function UpcomingProjects() {
  const [feedbackProject, setFeedbackProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => p.status === 'upcoming');

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

  return (
    <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-4">Upcoming <span className="font-bold">Projects</span></h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Discover the future landmarks we are planning to build.</p>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center min-h-[40vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <div className="text-zinc-400 dark:text-zinc-500 text-2xl font-light flex items-center gap-3">
              <Info size={32} />
              No upcoming projects available at the moment.
            </div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 dark:border-zinc-800 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image || "/building2.png"}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    alt={project.title}
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#00a651]">
                    UPCOMING
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
