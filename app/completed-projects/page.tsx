'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Building2 } from 'lucide-react';
import { projects } from './../data/projects';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import InterestModal from '../components/InterestModal';

export default function CompletedProjects() {
  const [feedbackProject, setFeedbackProject] = useState<string | null>(null);
  const filteredProjects = projects.filter((p) => p.status === 'completed');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <div className="min-h-screen pb-24">
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <Building2 size={14} /> Completed
          </span>
        }
        title={
          <>
            Landmarks we have <span className="gradient-text italic">delivered</span>.
          </>
        }
        subtitle="Witness the achievements that define us — finished projects, lived-in homes and thriving commercial spaces."
      />

      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center min-h-[40vh] bg-white/80 dark:bg-zinc-900/70 backdrop-blur rounded-3xl shadow-sm border border-white/60 dark:border-white/5">
            <div className="text-zinc-400 dark:text-zinc-500 text-2xl font-light flex items-center gap-3">
              <Info size={28} />
              No completed projects available at the moment.
            </div>
          </div>
        ) : (
          <motion.div
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
      </div>

      <InterestModal
        open={feedbackProject !== null}
        projectTitle={feedbackProject}
        onClose={() => setFeedbackProject(null)}
      />
    </div>
  );
}
