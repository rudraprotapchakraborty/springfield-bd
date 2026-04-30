'use client';

import { use, useState, useEffect } from 'react';
import { projects, Project } from './../../data/projects';
import Sidebar from './../../components/Sidebar'; // We still need the main sidebar for the right?
import { notFound } from 'next/navigation';

export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === resolvedParams.slug);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [resolvedParams.slug]);

  if (!project) {
    return <div className="p-10 text-white">Loading...</div>; // Or not found if we handle it better
  }

  const handleSidebarClick = (type: string) => {
    const index = project.gallery.findIndex(img => img.type === type);
    if (index !== -1) {
      setActiveImageIndex(index);
    }
  };

  const handlePrev = () => {
    setActiveImageIndex(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex(prev => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-between relative h-[600px] max-h-[80vh]">
      {/* Project Details Left Sidebar */}
      <div className="w-[25%] bg-[#1c1c1c] flex flex-col border-r border-black">
        <div className="p-[20px] pb-[30px] border-b border-black">
          <h1 className="text-white text-[28px] font-bold leading-tight mb-[5px]">{project.title}</h1>
          <p className="text-[#bbb] text-[12px]">{project.address}</p>
        </div>

        <div className="p-[20px] border-b border-black">
          <h3 className="text-[#888] font-bold text-[14px] mb-[15px] tracking-wide">LOCATION</h3>
          <button 
            onClick={() => handleSidebarClick('location')}
            className="bg-white flex justify-between items-center px-[10px] py-[5px] text-[12px] font-bold text-[#333] shadow-[0_1px_2px_rgba(0,0,0,0.3)] w-[100px] hover:bg-gray-100"
          >
            <span>Details</span>
            <span className="text-[#888] font-normal leading-none">&gt;</span>
          </button>
        </div>

        <div className="p-[20px] border-b border-black">
          <h3 className="text-[#888] font-bold text-[14px] mb-[15px] tracking-wide">PROPERTIES</h3>
          <button 
            onClick={() => handleSidebarClick('building')}
            className="bg-white flex justify-between items-center px-[10px] py-[5px] text-[12px] font-bold text-[#333] shadow-[0_1px_2px_rgba(0,0,0,0.3)] w-[100px] hover:bg-gray-100"
          >
            <span>Details</span>
            <span className="text-[#888] font-normal leading-none">&gt;</span>
          </button>
        </div>

        <div className="p-[20px] border-b border-black flex-1">
          <h3 className="text-[#888] font-bold text-[14px] mb-[15px] tracking-wide">FLOOR PLAN</h3>
          <button 
            onClick={() => handleSidebarClick('floor_plan')}
            className="bg-white flex justify-between items-center px-[10px] py-[5px] text-[12px] font-bold text-[#333] shadow-[0_1px_2px_rgba(0,0,0,0.3)] w-[100px] hover:bg-gray-100"
          >
            <span>Details</span>
            <span className="text-[#888] font-normal leading-none">&gt;</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-[75%] bg-[#d9eff7] flex flex-col relative overflow-hidden">
        {/* Main Image Viewer */}
        <div className="flex-1 relative flex items-center justify-center p-[20px] min-h-0">
          <img 
            src={project.gallery[activeImageIndex]?.url} 
            alt={`${project.title} - ${project.gallery[activeImageIndex]?.type}`} 
            className="max-w-full max-h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Bottom Carousel */}
        <div className="h-[120px] bg-white/40 flex items-center px-[10px] relative z-10 border-t border-[#b8dae6]">
          <button onClick={handlePrev} className="text-[#555] text-[20px] px-[10px] hover:text-black">&lt;</button>
          
          <div className="flex-1 flex overflow-x-auto gap-[10px] px-[10px] hide-scrollbar items-center justify-start h-full py-[10px]">
            {project.gallery.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                className={`flex-shrink-0 w-[120px] h-[80px] bg-white cursor-pointer transition-all duration-200 border-[3px] ${activeImageIndex === index ? 'border-[#8bcbea] shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img.url} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            ))}
          </div>
          
          <button onClick={handleNext} className="text-[#555] text-[20px] px-[10px] hover:text-black">&gt;</button>
        </div>
      </div>
    </div>
  );
}
