'use client'
import Image from 'next/image';
import React, { useRef , useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { clientImages } from '@/constants';

const Gallery = () => {
  const galleryRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    
  }, []);
  return (
    <section className="gallery-container">
      <div className="header self-end pr-5">
        <h2 className="heading1 text-white">Ga<span className='text-text-green'>ll</span>ery</h2>
        <p className='subtile font-extrabold text-gray-500'>Nice to meet you</p>
      </div>
      <div ref={galleryRef} className="image-container no-scrollbar">
        {clientImages.map((image, index) => (
          <Image
          className='object-cover rounded-md saturate-50 h-[100%] w-full'
            key={index}
            src={image.src}
            alt={image.alt}
            width={600}
            height={250}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery