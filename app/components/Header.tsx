import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between mb-[10px]">
      <div className="bg-white w-[75%] h-[150px] flex items-center pl-[20px] gap-[15px]">
        <Link href="/" className="flex items-center gap-[15px] no-underline">
          <Image
            src="/logo.png"
            alt="Spring Field Developments Ltd."
            width={300}
            height={140}
            className="max-h-[300px] w-auto h-[300px] object-contain"
            priority
          />
          <h1 className="text-[#F46221] text-[2.2rem] font-bold font-['Arial_Narrow',Arial,sans-serif] m-0">
            Spring Field Developments Ltd.
          </h1>
        </Link>
      </div>
      <div className="bg-white w-[23%] h-[150px] flex justify-center items-center">
        <span className="text-[#ff0000] font-bold text-[1.2rem]">True Joy's of Life</span>
      </div>
    </div>
  );
}
