'use client';

import Sidebar from '../components/Sidebar';

export default function EmployeeList() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[75%]">
          <div className="flex h-[400px]">
            <div className="w-[35%] bg-[url('/building.png')] bg-cover bg-center border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none flex flex-col justify-between">
              <div className="z-10 bg-white/70 inline-block px-4 py-2 font-bold text-[#555] text-[1.2rem] mt-2 self-start uppercase">EMPLYEE LIST</div>
            </div>
            <div className="w-[65%] bg-[#1a1a1a] p-[20px]">
              <h3 className="text-white text-[1.1rem] font-bold mt-[10px]">Underconstruction</h3>
            </div>
          </div>
        </div>
        
        <Sidebar />
      </div>
    </>
  );
}
