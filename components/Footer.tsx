import React from 'react'
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col  mt-5 border border-gray-500 rounded-3xl p-10 overflow-auto bg-white">
      <div className="flex justify-around items-center">
        <div className="flex pr-[20rem] justify-start items-start text-left tracking-tighter leading-[4rem] border-black border-r-[0.1px] w-fit flex-col text-black">
          <p className="font-extrabold text-[5rem] ">AYAN</p>
          <p className="font-extrabold text-[5rem] ">FE</p>
          <p className="font-extrabold text-[5rem] ">DARA.</p>
        </div>
        <div className='flex flex-3'>
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-black">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  className="text-gray-500 cursor-pointer"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t-[0.1px] border-black sm:px-16 px-6 py-10">
        <p className="text-gray-500">&copy; 2023 AYANFEDARA </p>
        <p className="text-gray-500">All rights reserved</p>
        <div className="footer__copyright-link">
          <Link href="/" className="text-gray-500 mr-5">
            Privacy policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer