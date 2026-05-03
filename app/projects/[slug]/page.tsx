'use client';

import { use, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './../../data/projects';
import {
  MapPin,
  Building,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  ArrowLeft,
  CalendarClock,
  Layers,
  Compass,
} from 'lucide-react';
import Link from 'next/link';
import InterestModal from '../../components/InterestModal';

export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = useMemo(
    () => projects.find((p) => p.slug === resolvedParams.slug) ?? null,
    [resolvedParams.slug],
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const galleryLength = project?.gallery.length ?? 0;

  const handlePrev = useCallback(() => {
    if (!galleryLength) return;
    setActiveImageIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  }, [galleryLength]);

  const handleNext = useCallback(() => {
    if (!galleryLength) return;
    setActiveImageIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  }, [galleryLength]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, handlePrev, handleNext]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#00a651] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Loading project details…
          </p>
        </div>
      </div>
    );
  }

  const statusBadge =
    project.status === 'ongoing'
      ? 'bg-[#f36523] text-white'
      : project.status === 'upcoming'
        ? 'bg-amber-500 text-white'
        : 'bg-[#00a651] text-white';

  const heroImg = project.gallery.find((g) => g.type === 'building')?.url ?? project.image;

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen pb-20">
      {/* Hero with parallax image */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImg} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        </motion.div>

        <div className="relative h-full container mx-auto px-6 md:px-12 max-w-7xl flex flex-col justify-end pt-32 pb-12 text-white">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`self-start ${statusBadge} px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] shadow-lg mb-4`}
          >
            {project.status}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-balance"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 flex items-center gap-2 mb-8 text-white/80"
          >
            <MapPin size={18} />
            <span className="text-base md:text-lg">{project.address}</span>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-2xl border border-white/60 dark:border-white/5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/50 min-h-[55vh] flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.gallery[activeImageIndex]?.url}
                  alt={`${project.title} — ${project.gallery[activeImageIndex]?.type}`}
                  className="max-w-full max-h-[70vh] object-contain drop-shadow-xl"
                />
              </AnimatePresence>

              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                aria-label="View fullscreen"
              >
                <Maximize2 size={18} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider capitalize">
                {project.gallery[activeImageIndex]?.type.replace('_', ' ')}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                {activeImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            <div className="flex overflow-x-auto gap-3 py-4 mt-2 hide-scrollbar">
              {project.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-16 rounded-2xl overflow-hidden transition-all duration-300 relative ${
                    activeImageIndex === index
                      ? 'ring-2 ring-[#00a651] shadow-md scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} className="w-full h-full object-cover" alt={`thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 shadow-xl border border-white/60 dark:border-white/5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                <Building className="text-[#00a651]" size={22} />
                Project details
              </h3>

              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-2">
                    <CalendarClock size={14} /> Status
                  </dt>
                  <dd className={`font-semibold capitalize px-3 py-1 rounded-full text-xs ${statusBadge}`}>
                    {project.status}
                  </dd>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-2">
                    <Layers size={14} /> Gallery
                  </dt>
                  <dd className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {project.gallery.length} images
                  </dd>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <dt className="text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-2">
                    <Compass size={14} /> Location
                  </dt>
                  <dd className="font-semibold text-zinc-800 dark:text-zinc-200 text-right max-w-[180px] truncate">
                    {project.address.split(',').pop()?.trim() ?? '—'}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                A landmark development representing the pinnacle of modern architectural design and
                robust engineering — strategically located to offer the best of urban living and
                commercial viability.
              </p>

              <button
                onClick={() => setShowFeedback(true)}
                className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3.5 rounded-full font-semibold hover:bg-[#00a651] hover:text-white transition-colors shadow-lg"
              >
                Express interest <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 shadow-xl border border-white/60 dark:border-white/5 flex-grow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-5">
                Gallery views
              </h3>
              <div className="flex flex-col gap-2.5">
                {(['location', 'building', 'floor_plan'] as const).map((type) => {
                  const idx = project.gallery.findIndex((img) => img.type === type);
                  if (idx === -1) return null;

                  return (
                    <button
                      key={type}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`flex justify-between items-center p-4 rounded-2xl transition-all border ${
                        activeImageIndex === idx
                          ? 'bg-[#00a651] text-white shadow-md border-transparent'
                          : 'bg-zinc-50/70 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-100 dark:border-zinc-800'
                      }`}
                    >
                      <span className="font-semibold capitalize text-sm">
                        {type.replace('_', ' ')}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prev / Next nav */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:border-[#00a651] transition-colors"
            >
              <div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold">
                  Previous
                </div>
                <div className="font-display text-xl text-zinc-900 dark:text-zinc-100 mt-1 group-hover:text-[#00a651] transition-colors">
                  {prevProject.title}
                </div>
              </div>
              <ArrowLeft size={20} className="text-zinc-400 group-hover:text-[#00a651] transition-colors" />
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:border-[#00a651] transition-colors text-right"
            >
              <ArrowRight size={20} className="text-zinc-400 group-hover:text-[#00a651] transition-colors order-2" />
              <div className="order-1">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold">
                  Next
                </div>
                <div className="font-display text-xl text-zinc-900 dark:text-zinc-100 mt-1 group-hover:text-[#00a651] transition-colors">
                  {nextProject.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-3 rounded-full backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-4 rounded-full backdrop-blur-sm hidden md:block"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-white/10 p-4 rounded-full backdrop-blur-sm hidden md:block"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.gallery[activeImageIndex]?.url}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold tracking-wide shadow-xl capitalize text-sm">
              {project.gallery[activeImageIndex]?.type.replace('_', ' ')} ·{' '}
              {activeImageIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <InterestModal
        open={showFeedback}
        onClose={() => setShowFeedback(false)}
        projectTitle={project.title}
      />
    </div>
  );
}
