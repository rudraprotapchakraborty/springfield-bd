'use client';

import Sidebar from '../components/Sidebar';

export default function ValuableCustomerList() {
  const clients = [
    { num: '01.', text: 'Nobel Lariats,Professor Dr. Mohammad Yunus (SRTC)' },
    { num: '02.', text: 'Pizza Hut, World Famous franchise Fast Food (SRTC)' },
    { num: '03.', text: 'The City Bank Ltd. (SRTC)' },
    { num: '04.', text: 'Grameen Telecom  (SRTC)' },
    { num: '05.', text: 'Anower Hossain Khan (Chairman, Shahjalal Islami Bank Ltd.) (Queens Park)' },
    { num: '06.', text: 'Md. Shahidul Islam, Managing Director (In charge, UCBL) (S.S. Muntaha)' },
    { num: '07.', text: 'Prof. Dr. Khurshed Alom Mujumder  (Queens Park)' },
    { num: '08.', text: 'Group Capt. Hasan Faruk (BAF) (Spring Spark)' },
    { num: '09.', text: 'Prof: Mohammad Abdullah (Ex. Parliament Member) (Queens Park)' },
    { num: '10.', text: 'Prof. Dr. Shofiul Alam (Ex. Civil Surgeon)  (Queens Park)' },
    { num: '11.', text: 'Md. Sirajul Islam (MD, Shifa Group)' },
    { num: '12.', text: 'Prof. Dr. Mohibur Rahman  (Queens Park)' },
    { num: '13.', text: 'Prof. Dr. Ahmed Ali (Skin & VD Specialist) (Queens Park)' },
    { num: '14.', text: 'Barrister MAK Sultan (Barrister & Soliatar, (S.S Muntaha)\nCanadian Immigration & Refugee law)' },
    { num: '15.', text: 'Prof. Dr. Mohammad Shohidullah. (Spring Spark)' },
    { num: '16.', text: 'Prof. Dr. Ziauddin (Spring Ziauddin Villa-Land Owner)' },
    { num: '17.', text: 'Moinuddin Biswas (Chairman, CIP, Govt. of the peoples republic of\nBangladesh.)' },
    { num: '18.', text: 'Md. Mokbul Hossain Bhuiyan (Managing Director, Bhuiyan Textile Mills Ltd.) (Queens Park)' },
    { num: '19.', text: 'Abdul Fattah (Chairman, Global Brand Pvt. Ltd.)' },
    { num: '20.', text: 'Abdul Motel Khan (Chairman, New Foods Ltd.)' },
    { num: '21.', text: 'Dr. KH Md. Shafiqur Rahman (Secretary General, Pioneer Dental College\n& Hospital)' },
    { num: '22.', text: 'DIG Mir Hasmat Ullah. (Spring Rajbari)' },
    { num: '23.', text: 'Md. Aminuzzaman (Director, finance & Accounts, Biswas Group)' },
    { num: '24.', text: 'Md. Abdul Kader (Commander, Anser & VDP)' }
  ];

  return (
    <>
      <div className="flex justify-between">
        <div className="w-[75%]">
          <div className="flex h-[400px]">
            <div className="w-[35%] bg-[url('/building.png')] bg-cover bg-center border-r-[2px] border-black relative after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)_1px,transparent_1px,transparent_5px)] after:pointer-events-none flex flex-col justify-between">
              <div className="z-10 bg-white/70 inline-block px-4 py-2 font-bold text-[#555] text-[1.0rem] mt-2 self-start uppercase">VALUABLE CUSTOMER LIST</div>
            </div>
            <div className="w-[65%] bg-[#1a1a1a] p-[30px] flex-1 overflow-y-auto">
              <h3 className="text-white text-[1rem] font-bold mb-[20px] underline underline-offset-4 decoration-2">
                Our Honorable Clients :
              </h3>
              
              <div className="flex flex-col gap-[15px] text-white text-[0.9rem]">
                {clients.map((client, idx) => (
                  <div key={idx} className="flex">
                    <div className="w-[50px] shrink-0">{client.num}</div>
                    <div className="flex-1 whitespace-pre-wrap">{client.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Sidebar />
      </div>
    </>
  );
}
