'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Career', href: '/career' },
  { name: 'Notice Board', href: '/notice-board' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block bg-white/10 p-1 rounded-2xl w-max backdrop-blur-sm">
              <Image
                src="/logo 2.png"
                alt="Spring Field Developments Ltd."
                width={200}
                height={80}
                className="object-contain rounded-2xl h-16 w-auto drop-shadow-md"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Transforming landscapes into landmarks. We are committed to building the future of Bangladesh with unparalleled architectural brilliance and premium living experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-[#00a651] transition-colors bg-zinc-900 p-2 rounded-full">
                <FacebookIcon size={18} />
              </Link>
              <Link href="#" className="hover:text-[#00a651] transition-colors bg-zinc-900 p-2 rounded-full">
                <TwitterIcon size={18} />
              </Link>
              <Link href="#" className="hover:text-[#00a651] transition-colors bg-zinc-900 p-2 rounded-full">
                <InstagramIcon size={18} />
              </Link>
              <Link href="#" className="hover:text-[#00a651] transition-colors bg-zinc-900 p-2 rounded-full">
                <LinkedinIcon size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-100 font-semibold mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#00a651] transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a651] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-zinc-100 font-semibold mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-[#00a651] flex-shrink-0 mt-0.5" />
                <span>House 42, Road 1, Block A<br/>Bashundhara R/A, Dhaka 1229</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#00a651] flex-shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#00a651] flex-shrink-0" />
                <span>info@springfield-bd.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-zinc-100 font-semibold mb-6 text-lg tracking-wide">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates on new projects and exclusive offers.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-colors text-zinc-100"
              />
              <button 
                type="submit" 
                className="bg-[#00a651] text-white font-medium rounded-xl px-4 py-3 text-sm hover:bg-[#008a43] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Spring Field Developments Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-zinc-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
