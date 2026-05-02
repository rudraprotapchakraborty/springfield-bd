'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileUp, Send, Users, Briefcase } from 'lucide-react';

export default function Career() {
  const [activeTab, setActiveTab] = useState('hr_philosophy');

  return (
    <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-4">Build Your <span className="font-bold">Career</span></h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Join our team of visionary professionals shaping the skyline.</p>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden flex flex-col md:flex-row transition-colors duration-300">

          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-100 dark:border-zinc-800 p-8 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest text-[#00a651] uppercase mb-4">Career Options</h3>
            <button
              onClick={() => setActiveTab('hr_philosophy')}
              className={`text-left px-6 py-4 rounded-2xl transition-all font-medium flex items-center gap-3 ${activeTab === 'hr_philosophy'
                  ? 'bg-white dark:bg-zinc-800 shadow-md text-zinc-900 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700'
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
            >
              <Users size={18} />
              HR Philosophy
            </button>
            <button
              onClick={() => setActiveTab('cv_bucket')}
              className={`text-left px-6 py-4 rounded-2xl transition-all font-medium flex items-center gap-3 ${activeTab === 'cv_bucket'
                  ? 'bg-white dark:bg-zinc-800 shadow-md text-zinc-900 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700'
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
            >
              <Briefcase size={18} />
              CV Bucket
            </button>

            <div className="mt-auto pt-8 hidden md:block">
              <div className="w-full h-48 rounded-2xl overflow-hidden relative">
                <img src="/building2.png" alt="Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'hr_philosophy' ? (
                <div className="space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-8">HR Philosophy</h2>

                  <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <p className="text-lg">
                      At Springfield Developments, we believe our people are our greatest asset. Our HR philosophy centers around fostering a culture of continuous learning, mutual respect, and innovation.
                    </p>
                    <p>
                      We empower our employees to take ownership of their work while providing them with the tools and environment necessary to thrive. Diversity and inclusion are at the heart of our hiring process, ensuring a rich blend of perspectives that drive our success.
                    </p>
                    <div className="bg-[#f8fbf4] dark:bg-zinc-800 p-6 rounded-2xl border border-[#00a651]/20 dark:border-[#00a651]/30 mt-8">
                      <p className="font-medium text-zinc-800 dark:text-zinc-200 m-0 flex items-center gap-2">
                        "Building the future starts with building the right team." 🏗️
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-8">CV Bucket</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">Drop your resume here, and we'll reach out if your profile matches our open positions.</p>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Full Name *</label>
                        <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Present Address</label>
                        <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email Address *</label>
                        <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Upload CV (MS Word or PDF) *</label>
                        <div className="relative w-full border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 md:p-12 text-center hover:border-[#00a651] transition-colors cursor-pointer group">
                          <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" required accept=".doc,.docx,.pdf" />
                          <div className="w-16 h-16 mx-auto bg-[#f8fbf4] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileUp size={28} className="text-[#00a651]" />
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Upload your Resume</h3>
                          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">Drag and drop your file here, or click to browse</p>
                          <button className="px-6 py-2 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 rounded-full text-sm font-medium hover:bg-[#00a651] transition-colors">
                            Browse Files
                          </button>
                          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-4">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="flex items-center justify-center gap-2 w-full md:w-auto md:px-12 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 py-4 rounded-xl font-semibold hover:bg-[#00a651] transition-colors shadow-md hover:shadow-lg">
                        <Send size={18} /> Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
