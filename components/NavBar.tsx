'use client'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import React , {useState} from 'react'
import Image from 'next/image';
import MobileNav from './MobileNav';


const NavBar = () => {
  const [isMobileOpen , setIsMobileOpen] = useState(false);
  const handleMobileNavToggle = () => {
    setIsMobileOpen(!isMobileOpen)
    
  }
 
  return (
    <nav className="flex-between sticky top-0 z-50 padding-x padding-y backdrop-blur-[5px]">
      <div  className="flex-1">
        <Link
          className="font-extrabold tracking-[5px] uppercase text-white"
          href="/"
        >
          ayanfendara.
        </Link>
      </div>

      <Image
        src="/hamburger-menu.svg"
        alt="hamburger"
        width={30}
        height={30}
        className="block cursor-pointer sm:hidden"
        onClick={handleMobileNavToggle}
      />
      <MobileNav isOpen={isMobileOpen} onClose={handleMobileNavToggle} />
      

      <ul className="hidden md:flex flex-between !justify-around max-md:hidden md:gap-x-10 flex-1 gap-20 text-white rounded-3xl py-3 px-2 bg-gray-800 bg-opacity-40">
        {NavLinks.map((item) => (
          <Link className="capitalize" href={item.href} key={item.key}>
            {item.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar

