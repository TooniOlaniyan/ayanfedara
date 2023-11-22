import { NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex-between padding-x padding-y border border-x-secondary-orange'>
        <div>
            <Link href='/'>ayanfedara</Link>
        </div>

        <div>
            <ul>
                {NavLinks.map((item) => (
                    <Link href={item.href} key={item.key} >{item.text}</Link>
                ))}
            </ul>
        </div>

        <div>
            {/* suscribe to newsletter */}
        </div>

    </nav>
  )
}

export default NavBar