'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Career() {
  const [activeTab, setActiveTab] = useState('hr_philosophy');

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[75%]">
          {/* Note: No ABOUT US header here, CAREERS text is on the image */}
          <div className="flex flex-col sm:flex-row min-h-[400px] h-auto">
            <div className="w-full h-[200px] sm:h-auto sm:w-[35%] bg-[url('/building.png')] bg-cover bg-center border-b-[2px] sm:border-b-0 sm:border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none flex flex-col justify-between">
              <div className="z-10 bg-white/70 inline-block px-4 py-2 font-bold text-[#555] text-[1.2rem] mt-2 self-start">CAREERS</div>
            </div>
            <div className="w-full sm:w-[65%] bg-[#1a1a1a] flex flex-col">
              <div className="flex border-b border-[#333]">
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'hr_philosophy' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('hr_philosophy')}
                >
                  <span>HR PHILOSOPHY</span>
                  {activeTab === 'hr_philosophy' && <span>&gt;</span>}
                </div>
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'cv_bucket' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('cv_bucket')}
                >
                  <span>CV BUCKET</span>
                  {activeTab === 'cv_bucket' && <span>&gt;</span>}
                </div>
              </div>
              
              <div className="p-[20px] flex-1 overflow-y-auto">
                {activeTab === 'hr_philosophy' ? (
                  <div className="pt-[10px]">
                    <h3 className="text-white text-[1.1rem] mb-[20px] font-bold">HR PHILOSOPHY</h3>
                    <div className="text-white text-[0.9rem] flex items-center gap-2">
                      This is demo text.. <span className="text-[1.2rem]">☺</span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-[10px]">
                    <h3 className="text-white text-[1.3rem] mb-[20px] font-bold">CV Bucket</h3>
                    
                    <form className="flex flex-col gap-4 text-white text-[0.8rem] font-bold w-full sm:w-[90%]">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">NAME*</label>
                        <input type="text" className="w-full sm:w-[250px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">PRESENT ADDRESS</label>
                        <input type="text" className="w-full sm:w-[250px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">E-MAIL ID*</label>
                        <input type="email" className="w-full sm:w-[250px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-2">
                        <label className="w-full sm:w-[150px] uppercase mb-1 sm:mb-0">Upload CV (MS Word or PDF)</label>
                        <div className="w-full sm:flex-1 sm:text-right sm:flex sm:justify-end">
                           <input type="file" className="text-[0.7rem] text-gray-500 file:mr-2 file:py-1 file:px-2 file:border-0 file:text-[0.7rem] file:bg-gray-200 file:text-black cursor-pointer w-full" />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <button type="submit" className="bg-[#eee] text-[#555] px-4 py-1 flex items-center gap-2 border border-gray-300">
                          Submit <span className="text-gray-400 text-xs">&gt;</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <Sidebar />
      </div>
    </>
  );
}
