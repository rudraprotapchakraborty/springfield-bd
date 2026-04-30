'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[75%]">
          <div className="flex flex-col sm:flex-row min-h-[400px] h-auto">
            <div className="w-full h-[200px] sm:h-auto sm:w-[35%] bg-[url('/building.png')] bg-cover bg-center border-b-[2px] sm:border-b-0 sm:border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none flex flex-col justify-between">
              <div className="z-10 bg-white/70 inline-block px-4 py-2 font-bold text-[#555] text-[1.2rem] mt-2 self-start">CONTACT US</div>
            </div>
            <div className="w-full sm:w-[65%] bg-[#1a1a1a] flex flex-col">
              <div className="flex border-b border-[#333]">
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'general' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('general')}
                >
                  <span>GENERAL CONTACT</span>
                  {activeTab === 'general' && <span>&gt;</span>}
                </div>
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'feedback' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('feedback')}
                >
                  <span>FEED BACK</span>
                  {activeTab === 'feedback' && <span>&gt;</span>}
                </div>
              </div>
              
              <div className="p-[20px] flex-1 overflow-y-auto">
                {activeTab === 'general' ? (
                  <div className="pt-[10px]">
                    <p className="text-white text-[1rem] mb-[20px]">Spring Field Developments Ltd.</p>
                    <p className="text-white text-[1rem] mb-[20px]">House # 02, Road # 23/C, Gulshan-1, Dhaka-1212.</p>
                    <p className="text-white text-[1rem] mb-[20px]">Phone: 9895548, 9893460, 8825341, 9851544</p>
                    <p className="text-white text-[1rem] mb-[20px]">Web: www.springfieldbd.com</p>
                    <p className="text-white text-[1rem]">E-mail: info@springfieldbd.com</p>
                  </div>
                ) : (
                  <div className="pt-[10px]">
                    <h3 className="text-white text-[1.1rem] mb-[20px] font-bold">Send Your Fedback</h3>
                                        <form className="flex flex-col gap-3 text-white text-[0.9rem] font-bold w-full sm:w-[95%]">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">Name :</label>
                        <input type="text" className="w-full sm:w-[300px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">E-mail :</label>
                        <input type="email" className="w-full sm:w-[300px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <label className="mb-1 sm:mb-0">Phone :</label>
                        <input type="text" className="w-full sm:w-[300px] h-[25px] bg-white text-black px-2 outline-none" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-2">
                        <label className="mb-1 sm:mb-0">Comments :</label>
                        <textarea className="w-full sm:w-[300px] h-[150px] bg-white text-black p-2 outline-none resize-none"></textarea>
                      </div>
                      
                      <div className="flex justify-end mt-2 gap-2">
                        <button type="submit" className="bg-[#f0f0f0] text-black px-3 py-1 border border-gray-400 text-[0.8rem] hover:bg-[#e0e0e0]">
                          Submit
                        </button>
                        <button type="reset" className="bg-[#f0f0f0] text-black px-3 py-1 border border-gray-400 text-[0.8rem] hover:bg-[#e0e0e0]">
                          Reset
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
