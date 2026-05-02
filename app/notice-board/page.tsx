'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell } from 'lucide-react';

export default function NoticeBoard() {
  const notices = [
    {
      id: 1,
      title: "Eid-Ul Azha",
      date: "03 October, 2026",
      content: "This is to inform all of our SFD staff that our office will remain closed from 03 October, 2026 to 09 October, 2026 due to the holy occasion of Eid-Ul-Azha.",
      type: "Holiday"
    },
    {
      id: 2,
      title: "Quarterly Townhall Meeting",
      date: "15 November, 2026",
      content: "A mandatory townhall meeting will be held at the main conference room to discuss Q4 goals and project milestones. Attendance is strictly required.",
      type: "Event"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fbf4] pt-32 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-zinc-100 p-4 rounded-full text-[#00a651]">
              <Bell size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4">Notice <span className="font-bold">Board</span></h1>
          <p className="text-zinc-500 text-lg">Stay updated with the latest announcements and important notices.</p>
        </motion.div>

        <div className="space-y-6">
          {notices.map((notice, index) => (
            <motion.div 
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00a651] transform origin-bottom scale-y-50 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <h3 className="text-2xl font-semibold text-zinc-900">{notice.title}</h3>
                
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                    {notice.type}
                  </span>
                  <span className="flex items-center gap-2 text-zinc-500">
                    <Calendar size={16} />
                    {notice.date}
                  </span>
                </div>
              </div>
              
              <p className="text-zinc-600 leading-relaxed">
                {notice.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
