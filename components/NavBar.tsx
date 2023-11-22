import { NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex-between padding-x padding-y border border-x-secondary-orange">
      <div>
        <Link href="/">ayanfedara</Link>
      </div>

      
        <ul className=" flex-between gap-10">
          {NavLinks.map((item) => (
            <Link className='capitalize' href={item.href} key={item.key}>
              {item.text}
            </Link>
          ))}
        </ul>
     

      <div>{/* suscribe to newsletter */}</div>
    </nav>
  );
}

export default NavBar