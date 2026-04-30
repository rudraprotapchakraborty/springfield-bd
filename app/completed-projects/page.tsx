'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from './../components/Sidebar';
import { projects } from './../data/projects';

export default function CompletedProjects() {
  const [feedbackProject, setFeedbackProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => p.status === 'completed');

  return (
    <>
      <div className="flex justify-between relative">
      <div className="w-[75%] bg-black">
        <div className="grid grid-cols-4 grid-rows-4 gap-[2px] bg-black">
          {/* Left Cell - Spans 2 Rows */}
          <div className="col-[1] row-[1/span_2] relative bg-[url('/building.png')] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.4),rgba(255,255,255,0.4)_1px,transparent_1px,transparent_5px)] after:pointer-events-none" style={{ gridColumn: 1, gridRow: '1 / span 2' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent z-10"></div>
            <div className="relative z-20 p-[15px]">
              <div className="text-[#444] font-bold text-[18px] mb-[2px]">COMPLETED</div>
              <div className="text-[#333] text-[14px]">All Projects</div>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="col-[2/span_3] row-[1/span_2] flex items-center justify-center bg-[#1a1a1a] min-h-[400px]">
              <div className="text-[#888] text-[24px] font-bold">no completed projects</div>
            </div>
          ) : (
            <>
              {/* Project Cards */}
              {filteredProjects.map((project, index) => {
            const row = Math.floor(index / 3) + 1;
            const col = (index % 3) + 2;
            
            return (
              <div 
                key={index} 
                className="bg-[#b5b5b5] p-[10px] flex flex-col justify-between h-[200px]"
                style={{ gridColumn: col, gridRow: row }}
              >
                <div>
                  <div className="text-[#55647a] font-bold text-[11px] uppercase mb-[2px]">{project.title}</div>
                  <div className="text-[#666] text-[10px] leading-[1.1] h-[22px] overflow-hidden">{project.address}</div>
                </div>
                
                <div className="relative w-full h-[95px] mt-[5px] mb-[10px]">
                  <img src={project.image || "/building.png"} className="w-full h-full object-cover" alt={project.title} />
                  <div className="absolute top-0 left-0 bg-[#5cb85c] w-[16px] h-[16px] flex items-center justify-center p-[3px]">
                    <img src="/file.svg" className="w-full h-full object-contain" alt="" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                </div>
                
                <div className="flex justify-between gap-[5px] mt-auto">
                  <Link href={`/project-details/${project.slug}`} className="flex-1 bg-white flex justify-between items-center px-[6px] py-[4px] text-[10px] font-bold text-[#555] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[#f0f0f0] transition-colors no-underline">
                    <span>Details</span>
                    <span className="text-[#aaa] font-normal text-[12px] leading-none">&gt;</span>
                  </Link>
                  <button 
                    onClick={() => setFeedbackProject(project.title)}
                    className="flex-1 bg-white flex justify-between items-center px-[6px] py-[4px] text-[10px] font-bold text-[#555] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[#f0f0f0] transition-colors"
                  >
                    <span>Show interest</span>
                    <span className="text-[#aaa] font-normal text-[12px] leading-none">&gt;</span>
                  </button>
                </div>
              </div>
              );
            })}
            </>
          )}
        </div>
      </div>
      
      <Sidebar />
      </div>

      {feedbackProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-[30px] w-[550px] shadow-2xl relative border-[2px] border-[#aaa]">
            <button 
              onClick={() => setFeedbackProject(null)}
              className="absolute top-[10px] right-[15px] text-[20px] font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="font-serif font-bold text-[22px] mb-[20px] text-black">Send Your Fedback</h2>
            <form onSubmit={(e) => { e.preventDefault(); setFeedbackProject(null); }}>
              <div className="flex mb-[15px] items-center">
                <label className="w-[120px] font-serif font-bold text-[18px] text-black">Name :</label>
                <input type="text" className="border border-gray-400 flex-1 px-[5px] py-[3px] text-[16px] text-black" />
              </div>
              <div className="flex mb-[15px] items-center">
                <label className="w-[120px] font-serif font-bold text-[18px] text-black">E-mail :</label>
                <input type="email" className="border border-gray-400 flex-1 px-[5px] py-[3px] text-[16px] text-black" />
              </div>
              <div className="flex mb-[15px] items-center">
                <label className="w-[120px] font-serif font-bold text-[18px] text-black">Phone :</label>
                <input type="tel" className="border border-gray-400 flex-1 px-[5px] py-[3px] text-[16px] text-black" />
              </div>
              <div className="flex mb-[20px] items-start">
                <label className="w-[120px] font-serif font-bold text-[18px] mt-[2px] text-black">Comments :</label>
                <textarea className="border border-gray-400 flex-1 h-[140px] px-[5px] py-[3px] text-[16px] resize-y text-black"></textarea>
              </div>
              <div className="flex ml-[120px] gap-[10px]">
                <button type="submit" className="border border-gray-400 bg-[#f8f8f8] px-[15px] py-[3px] text-[16px] text-black hover:bg-[#e8e8e8]">Submit</button>
                <button type="reset" className="border border-gray-400 bg-[#f8f8f8] px-[15px] py-[3px] text-[16px] text-black hover:bg-[#e8e8e8]">Reset</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
