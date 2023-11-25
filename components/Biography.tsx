import { biographyContent } from '@/constants';
import React from 'react'
import Marquee from './BioMarquee';

const Biography = () => {
  return (
    <section className="flex justify-center flex-col gap-[4rem] padding-x padding-y text-white">
      <div className="flex justify-center">
        <div className="md:w-1/2 font-extrabold text-[2rem] tracking-tighter leading-[2.5rem] text-gray-300">
          <h2 className="">
            Little Insight <br /> About Me
          </h2>
        </div>

        <div className="md:w-1/2">
          <h2 className="font-extrabold text-[3.1rem] tracking-tighter leading-[2.5rem] text-gray-300">
            <span className=""> Ayanfedara</span> The Vibe{" "}
            <span className='text-text-green'>gOD</span>, a versatile professional at the crossroads of{" "}
            <span className="text-text-green">finance</span> and technology.
          </h2>
        </div>
      </div>

      <div className="padding-x">
        {biographyContent.map((item, index) => (
          <p
            className="mb-4 font-semibold text-[1.7rem] leading-10 text-gray-500 text-center"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>

      <Marquee />
    </section>
  );
}

export default Biography