'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-[23%] flex flex-col mt-[10px] md:mt-0">
      <Link href="/ongoing-projects" className={`text-right py-[15px] px-[10px] mb-[2px] text-[0.8rem] border-b-[2px] border-black block no-underline ${pathname === '/ongoing-projects' ? 'bg-[#333] text-white' : 'bg-[#ddd] text-[#333]'}`}>
        <div className={`text-[0.9rem] ${pathname === '/ongoing-projects' ? 'text-white' : 'text-[#444]'}`}>ONGOING</div>
        <div className={`text-[0.65rem] ${pathname === '/ongoing-projects' ? 'text-[#ccc]' : 'text-[#777]'}`}>projects in progress</div>
      </Link>
      <Link href="/upcoming-projects" className={`text-right py-[15px] px-[10px] mb-[2px] text-[0.8rem] border-b-[2px] border-black block no-underline ${pathname === '/upcoming-projects' ? 'bg-[#333] text-white' : 'bg-[#ddd] text-[#333]'}`}>
        <div className={`text-[0.9rem] ${pathname === '/upcoming-projects' ? 'text-white' : 'text-[#444]'}`}>UPCOMING</div>
        <div className={`text-[0.65rem] ${pathname === '/upcoming-projects' ? 'text-[#ccc]' : 'text-[#777]'}`}>discover the future</div>
      </Link>
      <Link href="/completed-projects" className={`text-right py-[15px] px-[10px] mb-[2px] text-[0.8rem] border-b-[2px] border-black block no-underline ${pathname === '/completed-projects' ? 'bg-[#333] text-white' : 'bg-[#ddd] text-[#333]'}`}>
        <div className={`text-[0.9rem] ${pathname === '/completed-projects' ? 'text-white' : 'text-[#444]'}`}>COMPLETED</div>
        <div className={`text-[0.65rem] ${pathname === '/completed-projects' ? 'text-[#ccc]' : 'text-[#777]'}`}>witness the achievements</div>
      </Link>
      
      <div className="h-[30px]"></div>
      
      <Link href="/employee-list" className={`mb-[2px] border-b-[2px] border-black h-[60px] flex items-center justify-center cursor-pointer no-underline block ${pathname === '/employee-list' ? 'bg-[#333]' : 'bg-[#ddd]'}`}>
        <div className={`text-[0.8rem] ${pathname === '/employee-list' ? 'text-white' : 'text-[#444]'}`}>EMPLOYEE LIST</div>
      </Link>
      <Link href="/valuable-customer-list" className={`mb-[2px] h-[60px] flex items-center justify-center cursor-pointer no-underline block ${pathname === '/valuable-customer-list' ? 'bg-[#333]' : 'bg-[#ddd]'}`}>
        <div className={`text-[0.8rem] ${pathname === '/valuable-customer-list' ? 'text-white' : 'text-[#444]'}`}>VALUABLE CUSTOMER LIST</div>
      </Link>
      
      <div className="h-[30px]"></div>
      
      <div className="bg-[#333] p-[10px] flex justify-around mt-[2px]">
        {/* Placeholder icons since we don't have font-awesome by default */}
        <span className="text-[#888] text-[1.2rem]">✉</span>
        <span className="text-[#888] text-[1.2rem] font-bold">f</span>
        <span className="text-[#888] text-[1.2rem] font-bold">🐦</span>
        <span className="text-[#888] text-[1.2rem] font-bold">in</span>
        <span className="text-[#888] text-[1.2rem]">••</span>
      </div>
    </div>
  );
}
