'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-[#4CAF50] flex mb-[10px]">
      <Link href="/" className={`py-[10px] px-[20px] text-black no-underline text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/home' ? 'bg-[#badd50]' : ''}`}>HOME</Link>
      <Link href="/" className={`py-[10px] px-[20px] text-black no-underline text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/' ? 'bg-[#badd50]' : ''}`}>ABOUT US</Link>
      <Link href="/career" className={`py-[10px] px-[20px] text-black no-underline text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/career' ? 'bg-[#badd50]' : ''}`}>CAREER</Link>
      <Link href="/notice-board" className={`py-[10px] px-[20px] text-black no-underline text-[0.85rem] font-bold border-r border-[#3d8b40] ${pathname === '/notice-board' ? 'bg-[#badd50]' : ''}`}>NOTICE BOARD</Link>
      <Link href="/contact" className={`py-[10px] px-[20px] text-black no-underline text-[0.85rem] font-bold ${pathname === '/contact' ? 'bg-[#badd50]' : ''}`}>CONTACT US</Link>
    </div>
  );
}
