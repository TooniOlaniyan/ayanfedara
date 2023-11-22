import { NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Suscribe from './Suscribe';

const NavBar = () => {
  return (
    <nav className="flex-between sticky top-0 z-50 padding-x padding-y">
      <div>
        <Link className='font-extrabold tracking-[5px] uppercase text-white' href="/">ayanfedara.</Link>
      </div>

      
        <ul className=" flex-between gap-20 text-white">
          {NavLinks.map((item) => (
            <Link className='capitalize' href={item.href} key={item.key}>
              {item.text}
            </Link>
          ))}
        </ul>
     

      <div>
        {/* suscribe to newsletter */}
        <Suscribe/>
      
      </div>
    </nav>
  );
}

export default NavBar