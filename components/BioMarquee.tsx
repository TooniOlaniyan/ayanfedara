import React from 'react'
import Marquee from "react-fast-marquee";
import { marqueeData } from '@/constants'

const BioMarquee = () => {
  return (
      <Marquee className="flex gap-5">
        {marqueeData.map((item, index) => (
          <h1 key={index} className='font-extrabold mr-5 text-[2rem]'>{item}</h1>
          
        ))}
      </Marquee>
  )
}

export default BioMarquee