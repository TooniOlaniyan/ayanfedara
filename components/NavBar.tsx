'use client'

import { NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const NavBar = () => {
  const handleClick = () => {

  }
  return (
    <nav className="flex-between sticky top-0 z-50 padding-x padding-y backdrop-blur-[5px]">
      <div className="flex-1">
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
        className="block sm:hidden"
        onClick={handleClick}
      />

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

// import React from "react";
// import { Element, scroller } from "react-scroll";

// const YourComponent = () => {
//   const handleScroll = () => {
//     const scrollThreshold = 100;
//     const shouldBlur = window.scrollY > scrollThreshold;

//     // Use the scroller from react-scroll to smoothly scroll to an element
//     scroller.scrollTo("scrollTarget", {
//       duration: 500,
//       smooth: "easeInOut",
//     });

//     // Use state or a context to manage whether to apply the blur effect
//     // setShouldBlur(shouldBlur);
//   };

//   return (
//     <Element name="scrollTarget">
//       <nav className={`flex-between sticky top-0 z-50 padding-x padding-y`}>
//         {/* Your existing content */}
//       </nav>
//     </Element>
//   );
// };

// export default YourComponent;
