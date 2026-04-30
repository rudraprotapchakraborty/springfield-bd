'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-[#4CAF50] flex flex-wrap mb-[10px]">
      <Link href="/" className={`flex-1 sm:flex-none text-center sm:text-left py-[10px] px-[10px] sm:px-[20px] text-black no-underline text-[0.75rem] sm:text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/home' ? 'bg-[#badd50]' : ''}`}>HOME</Link>
      <Link href="/" className={`flex-1 sm:flex-none text-center sm:text-left py-[10px] px-[10px] sm:px-[20px] text-black no-underline text-[0.75rem] sm:text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/' ? 'bg-[#badd50]' : ''}`}>ABOUT US</Link>
      <Link href="/career" className={`flex-1 sm:flex-none text-center sm:text-left py-[10px] px-[10px] sm:px-[20px] text-black no-underline text-[0.75rem] sm:text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/career' ? 'bg-[#badd50]' : ''}`}>CAREER</Link>
      <Link href="/notice-board" className={`flex-1 sm:flex-none text-center sm:text-left py-[10px] px-[10px] sm:px-[20px] text-black no-underline text-[0.75rem] sm:text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/notice-board' ? 'bg-[#badd50]' : ''}`}>NOTICE BOARD</Link>
      <Link href="/contact" className={`flex-1 sm:flex-none text-center sm:text-left py-[10px] px-[10px] sm:px-[20px] text-black no-underline text-[0.75rem] sm:text-[0.85rem] font-bold ${pathname === '/contact' ? 'bg-[#badd50]' : ''}`}>CONTACT US</Link>
    </div>
  );
}
