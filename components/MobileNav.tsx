'use client'
import {useEffect , useRef} from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Suscribe from "./Suscribe";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({isOpen , onClose} : MobileMenuProps) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  if(!isOpen){
    return null
  }

  
  return (
    <div
    ref={mobileMenuRef}
      className="block fixed top-0 bottom-0 w-full h-full  sm:hidden"
    >
      <div onClick={onClose} className="absolute top-0 right-0 p-4">
       {/* <Image  src='/close.svg'  alt="Close" width={30} height={30} /> */}
       <p className="block cursor-pointer  text-[1.2rem] text-text-green sm:hidden">Close</p>
      </div>
      <div className="w-[100vw]  flex flex-col items-center justify-around h-[100vh] bg-green-100">
        <ul className="text-[2rem] text-white flex flex-col items-center gap-10 justify-around uppercase">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
