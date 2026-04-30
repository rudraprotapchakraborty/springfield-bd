import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-[10px] gap-[10px] md:gap-0">
      <div className="bg-white w-full md:w-[75%] h-auto md:h-[150px] flex items-center justify-center md:justify-start py-[15px] md:py-0 px-[10px] md:px-[20px] gap-[15px]">
        <Link href="/" className="flex flex-col sm:flex-row items-center gap-[15px] no-underline text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="Spring Field Developments Ltd."
            width={300}
            height={140}
            className="max-h-[100px] sm:max-h-[300px] w-auto sm:h-[300px] object-contain"
            priority
          />
          <h1 className="text-[#F46221] text-[1.8rem] sm:text-[2.2rem] font-bold font-['Arial_Narrow',Arial,sans-serif] m-0">
            Spring Field Developments Ltd.
          </h1>
        </Link>
      </div>
      <div className="bg-white w-full md:w-[23%] h-[80px] md:h-[150px] flex justify-center items-center">
        <span className="text-[#ff0000] font-bold text-[1.2rem]">True Joy's of Life</span>
      </div>
    </div>
  );
}
