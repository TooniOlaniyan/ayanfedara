import Image from 'next/image';
import React from 'react'
import { clientImages } from '@/constants';

const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="header self-end pr-5">
        <h2 className="heading1 text-white">Ga<span className='text-orange-600'>ll</span>ery</h2>
        <p className='subtile font-extrabold text-gray-500'>Nice to meet you</p>
      </div>
      <div className="image-container">
        {clientImages.map((image, index) => (
          <Image
          className='object-cover w-full'
            key={index}
            src={image.src}
            alt={image.alt}
            width={600}
            height={300}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery