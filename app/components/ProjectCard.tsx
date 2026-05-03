'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onShowInterest: (title: string) => void;
  index?: number;
}

const statusStyles: Record<Project['status'], string> = {
  ongoing: 'bg-[#f36523] text-white',
  upcoming: 'bg-amber-500 text-white',
  completed: 'bg-[#00a651] text-white',
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function ProjectCard({ project, onShowInterest }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      layout
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[28px] border border-white/60 dark:border-white/5 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-25px_rgba(0,166,81,0.4)] transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image || '/building2.png'}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Status pill */}
        <div className={`absolute top-4 left-4 z-10 ${statusStyles[project.status]} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg`}>
          {project.status}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-display text-2xl text-white leading-tight drop-shadow-lg">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-white/80 text-xs">
            <MapPin size={12} />
            <span className="line-clamp-1">{project.address}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5 flex-grow">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
          A flagship development by Spring Field — engineered for modern living, set in a prime
          locale with thoughtful community amenities and timeless architecture.
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 group/cta"
          >
            View Details
            <ArrowRight
              size={16}
              className="transition-transform group-hover/cta:translate-x-1"
            />
          </Link>
          <button
            onClick={() => onShowInterest(project.title)}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#00a651]/10 text-[#00a651] hover:bg-[#00a651] hover:text-white transition-colors"
          >
            Show Interest
          </button>
        </div>
      </div>

      {/* Top accent line on hover */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a651] via-[#00d56a] to-[#f36523] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
    </motion.div>
  );
}
