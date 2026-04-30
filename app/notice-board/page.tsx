'use client';

import Sidebar from '../components/Sidebar';

export default function NoticeBoard() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[75%]">
          <div className="flex flex-col sm:flex-row min-h-[400px] h-auto">
            <div className="w-full h-[200px] sm:h-auto sm:w-[35%] bg-[url('/building.png')] bg-cover bg-center border-b-[2px] sm:border-b-0 sm:border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none flex flex-col justify-between">
              <div className="z-10 bg-white/70 inline-block px-4 py-2 font-bold text-[#555] text-[1.2rem] mt-2 self-start">NOTICE BOARD</div>
            </div>
            <div className="w-full sm:w-[65%] bg-[#1a1a1a] flex flex-col">
              <div className="flex border-b border-[#333]">
                <div className="py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-default bg-[#333] text-white font-bold">
                  <span>NOTICE BOARD</span>
                  <span>&gt;</span>
                </div>
              </div>
              
              <div className="p-[20px] flex-1 overflow-y-auto">
                <div className="pt-[10px]">
                  <h3 className="text-white text-[1.1rem] mb-[40px] font-bold">Eid-Ul Azah</h3>
                  <p className="text-white text-[0.9rem] leading-relaxed">
                    This is to inform all of our SFD staff that our office will remain closed from <span className="font-bold italic">03 October, 2014 to 09 October, 2014</span> due to the holy occasion of <span className="font-bold italic">Eid-Ul-Azah</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Sidebar />
      </div>
    </>
  );
}
