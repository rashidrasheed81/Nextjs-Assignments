import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/panaverse.png";
import { BiAlignRight } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <div className="flex  justify-between items-center bg-transparent md:px-[60px] px-[20px] pt-2 py-1 w-full absolute">
        <div>
          <Image src={Logo} alt="panaverse" width={100} height={100} />
        </div>
        <div>
          <ul className="hidden md:flex space-x-[60px] text-lg font-semibold ">
            <li className="hover:text-blue-600 pt-[6px] font-serif">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-600 pt-[6px] font-serif">
              <Link href={"/"}>Explore</Link>
            </li>
            <li className="hover:text-blue-600 pt-[6px] font-serif">
              <Link href={"/"}>About</Link>
            </li>
            <li className="hover:text-blue-600 pt-[6px] font-serif">
              <Link href={"/"}>Contact</Link>
            </li>
        <div>
          <button className="bg-blue-600 px-4 py-1 text-white rounded-xl text-md font-semibold hover:bg-blue-800 hover:animate-pulse">
            Apply
          </button>
        </div>
          </ul>
        </div>
        <div className="static md:hidden text-4xl"><BiAlignRight/></div>
      </div>
      
    </>
  );
}
