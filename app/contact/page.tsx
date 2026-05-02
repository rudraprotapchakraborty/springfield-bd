'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, RefreshCcw } from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="min-h-screen bg-[#f8fbf4] dark:bg-zinc-950 pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-4">Get in <span className="font-bold">Touch</span></h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">We would love to hear from you. Select an option below to reach out.</p>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-100 dark:border-zinc-800 p-8 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest text-[#00a651] uppercase mb-4">Contact Options</h3>
            <button
              onClick={() => setActiveTab('general')}
              className={`text-left px-6 py-4 rounded-2xl transition-all font-medium ${
                activeTab === 'general' 
                  ? 'bg-white dark:bg-zinc-800 shadow-md text-zinc-900 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              General Contact
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`text-left px-6 py-4 rounded-2xl transition-all font-medium ${
                activeTab === 'feedback' 
                  ? 'bg-white dark:bg-zinc-800 shadow-md text-zinc-900 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              Send Feedback
            </button>

            <div className="mt-auto pt-8">
              <div className="w-full h-48 rounded-2xl overflow-hidden relative">
                <img src="/building.png" alt="Office" className="w-full h-full object-cover" />
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
              {activeTab === 'general' ? (
                <div className="space-y-10">
                  <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-8">Head Office</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full text-[#00a651] shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Address</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Spring Field Developments Ltd.<br/>House # 02, Road # 23/C,<br/>Gulshan-1, Dhaka-1212.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full text-[#00a651] shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Phone</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">9895548, 9893460<br/>8825341, 9851544</p>
                      </div>
                    </div>
 
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full text-[#00a651] shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Email</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">info@springfieldbd.com</p>
                      </div>
                    </div>
 
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full text-[#00a651] shrink-0">
                        <Globe size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Website</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">www.springfieldbd.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-8">Send Your Feedback</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                        <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">E-mail</label>
                        <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Phone</label>
                      <input type="tel" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Comments</label>
                      <textarea className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00a651] focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors h-32 resize-none" required></textarea>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button type="submit" className="flex items-center justify-center gap-2 flex-1 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 py-3 rounded-xl font-semibold hover:bg-[#00a651] transition-colors shadow-md hover:shadow-lg">
                        <Send size={18} /> Submit
                      </button>
                      <button type="reset" className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700">
                        <RefreshCcw size={18} /> Reset
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
