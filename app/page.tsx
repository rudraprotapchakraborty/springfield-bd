'use client';

import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [activeTab, setActiveTab] = useState('background');

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between relative">
        <div className="w-full md:w-[75%]">
          <div className="bg-[#a4b3d1] py-[10px] px-[20px] text-[#333] font-bold text-[0.95rem]">ABOUT US</div>
          <div className="flex flex-col sm:flex-row min-h-[400px] h-auto">
            <div className="w-full h-[200px] sm:h-auto sm:w-[35%] bg-[url('/building.png')] bg-cover bg-center border-b-[2px] sm:border-b-0 sm:border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none">
            </div>
            <div className="w-full sm:w-[65%] bg-[#1a1a1a] flex flex-col">
              <div className="flex border-b border-[#333]">
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'background' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('background')}
                >
                  <span>BACKGROUND</span>
                  {activeTab === 'background' && <span>&gt;</span>}
                </div>
                <div 
                  className={`py-[5px] px-[15px] text-[0.85rem] border-r border-[#222] flex-1 flex justify-between items-center cursor-pointer ${activeTab === 'message' ? 'bg-[#333] text-white font-bold' : 'bg-[#a4b3d1] text-[#555]'}`}
                  onClick={() => setActiveTab('message')}
                >
                  <span>MESSAGE</span>
                  {activeTab === 'message' && <span>&gt;</span>}
                </div>
              </div>
              
              <div className="p-[20px] text-[0.8rem] leading-[1.4] text-[#ccc] flex-1 overflow-y-auto">
                {activeTab === 'background' ? (
                  <>
                    <p>
                      <span className="text-[#ff0000] font-bold">Spring field Developments Ltd.</span> is a well organized, target oriented venture by a group of extremely talented, hard-working, skilled personnel who has the hallmark of many illustrious projects to their credit. In last 15 years we have constructed lot of multistoried & commercial project like Spring Rahmat-E-Tuba Complex & Residential project like Queens Park in Dhanmondi, Spring Spark at Baridhara and projects in Mohakhali, Mirpur DOHS and also so many other attractive projects at different prime location of Dhaka City.
                    </p>
                    <br />
                    <p>
                      Spring Field is also doing Amusement & Children Park Design and also supplying equipments & setting up entire park as per design. Recently we have completed 15 Children Park of Bangladesh NAVY at Different location.
                    </p>
                    <br />
                    <p>
                      <span className="text-[#ff0000] font-bold">Silver Dragon Mattress :</span> is sister concern of Spring Field and Involved in manufacture in Marketing of different quality Mattress all over the Bangladesh through corporate furniture dealers of big magnitude & also in local market.
                    </p>
                    <br />
                    <p>
                      <span className="text-[#ff0000] font-bold">Silver Furnishing World :</span> is a sister concern of Spring Field and Dealing the furnishing business and interior designing work and also doing manufacture of world class standard furniture and marketing this furnishing through top class furniture showroom of the country.
                    </p>
                    <br />
                    <p>
                      <span className="text-[#ff0000] font-bold">MM Traders :</span> is a sister concern of Spring Field Developments Ltd. and Doing international trading through DGDP and supplied fire fighting equipments and fire jeep to Bangladesh NAVY and also participating in International Tender of Government department for supply of equipments and machineries.
                    </p>
                  </>
                ) : (
                  <div className="pt-[10px]">
                    <h3 className="text-white text-[1.1rem] mb-[30px] font-bold">Message</h3>
                    <div className="text-[#fbe9ab] font-['Comic_Sans_MS','Chalkboard_SE',cursive,sans-serif] text-[2.2rem] text-center font-bold tracking-[1px]">
                      ... true joy's of life...
                    </div>
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
