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
       <Image  src='/close.svg'  alt="Close" width={30} height={30} />
      </div>
      <div className="w-[100vw] flex flex-col items-center justify-around h-full bg-green-100">
        <ul className="text-[2rem] text-white flex flex-col items-center justify-around  gap-10 uppercase">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Suscribe/>
      </div>
    </div>
  );
};

export default MobileNav;
