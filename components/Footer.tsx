import React from 'react'
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col  mt-5 border border-gray-500 rounded-3xl p-10 overflow-auto bg-text-green">
      <div className="flex justify-around items-center">
        <div className="flex pr-[20rem] justify-start items-start text-left tracking-tighter leading-[4rem] border-black border-r-[0.1px] w-fit flex-col text-black">
          <p className="font-extrabold text-[5rem] ">AYAN</p>
          <p className="font-extrabold text-[5rem] ">FEN</p>
          <p className="font-extrabold text-[5rem] ">DARA.</p>
        </div>
        <div className="flex flex-3">
          {footerLinks.map((link , index) => (
            <div key={index} className="footer__link">
              <h3 className="font-extrabold text-black">{link.title}</h3>
              {link.links.map((item , index) => (
                <Link
                  key={index}
                  className="text-black "
                  href={item.url}
                  target='blank'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-sm items-center flex-wrap mt-10 border-t-[0.1px] border-black sm:px-16 px-6 py-10">
        <p className="text-black">&copy; 2023 AYANFENDARA </p>
        <p className="text-black">All rights reserved</p>
        <div className="footer__copyright-link">
          <Link href="/" className="text-black mr-5">
            Privacy policy
          </Link>
          <Link href="/" className="text-black">
            Terms of use
          </Link>
        </div>
        <Link href="/" className="text-black">
          Designed and developed: TooniDev
        </Link>
      </div>
    </footer>
  );
}

export default Footer