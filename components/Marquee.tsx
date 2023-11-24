import React from 'react'
import Image from 'next/image'
import { imageData } from '@/constants'

const Marquee = () => {
  return (
      <div className="flex marquee max-w-full">
        {imageData.map((path, index) => (
          <div key={index} className="relative w-20 h-20 overflow-hidden">
            <Image
              src={path}
              alt={`Image ${index + 1}`}
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
  )
}

export default Marquee