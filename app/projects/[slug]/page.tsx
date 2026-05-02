'use client';

import { use, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from './../../data/projects';
import { MapPin, Building, Maximize2, ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === resolvedParams.slug);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [resolvedParams.slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 flex items-center justify-center transition-colors duration-300">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#00a651] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">Loading project details...</p>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setActiveImageIndex(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex(prev => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/completed-projects" className="text-[#00a651] text-sm font-semibold hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 dark:text-zinc-100 mb-4">{project.title}</h1>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <MapPin size={18} />
            <span className="text-lg">{project.address}</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Gallery Area (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col"
          >
            <div className="relative flex-grow rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/50 min-h-[50vh] flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.gallery[activeImageIndex]?.url} 
                  alt={`${project.title} - ${project.gallery[activeImageIndex]?.type}`} 
                  className="max-w-full max-h-[70vh] object-contain drop-shadow-xl"
                />
              </AnimatePresence>
              
              <button 
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
              >
                <Maximize2 size={20} />
              </button>

              <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium capitalize">
                {project.gallery[activeImageIndex]?.type.replace('_', ' ')}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex overflow-x-auto gap-4 py-4 mt-4 hide-scrollbar">
              {project.gallery.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 relative ${
                    activeImageIndex === index 
                      ? 'ring-2 ring-[#00a651] shadow-md scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} className="w-full h-full object-cover" alt={`thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Quick Info Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                <Building className="text-[#00a651]" size={24} />
                Project Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="text-zinc-500 dark:text-zinc-400">Status</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 capitalize px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">{project.status}</span>
                </div>
                {/* Additional details could go here depending on what's in the data model */}
                <div className="pt-4">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    This landmark project represents the pinnacle of modern architectural design and robust engineering, strategically located to offer the best of urban living and commercial viability.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowFeedback(true)}
                className="w-full mt-8 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 py-4 rounded-full font-semibold hover:bg-[#00a651] transition-colors shadow-lg shadow-zinc-200 dark:shadow-none"
              >
                Express Interest
              </button>
            </div>

            {/* Specific Views Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-800 flex-grow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Gallery Views</h3>
              <div className="flex flex-col gap-3">
                {['location', 'building', 'floor_plan'].map((type) => {
                  const idx = project.gallery.findIndex(img => img.type === type);
                  if (idx === -1) return null;
                  
                  return (
                    <button 
                      key={type}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`flex justify-between items-center p-4 rounded-2xl transition-all ${
                        activeImageIndex === idx 
                          ? 'bg-[#00a651] text-white shadow-md' 
                          : 'bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <span className="font-semibold capitalize text-sm">{type.replace('_', ' ')}</span>
                      <ArrowRight size={18} />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Viewer Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-900/95 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 bg-white/10 p-3 rounded-full backdrop-blur-sm"
            >
              <X size={24} />
            </button>
            
            <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 bg-white/10 p-4 rounded-full backdrop-blur-sm hidden md:block">
              <ChevronLeft size={32} />
            </button>
            <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 bg-white/10 p-4 rounded-full backdrop-blur-sm hidden md:block">
              <ChevronRight size={32} />
            </button>

            <img 
              src={project.gallery[activeImageIndex]?.url} 
              alt="Fullscreen View" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium tracking-wide shadow-xl capitalize">
              {project.gallery[activeImageIndex]?.type.replace('_', ' ')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 w-full max-w-lg rounded-3xl shadow-2xl relative"
          >
            <button 
              onClick={() => setShowFeedback(false)}
              className="absolute top-6 right-6 text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100">Send Your Feedback</h2>
            <form onSubmit={(e) => { e.preventDefault(); setShowFeedback(false); }} className="space-y-6">
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
                <textarea className="w-full border-2 border-zinc-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-[#00a651] transition-colors h-32 resize-none bg-transparent dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" required></textarea>
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
