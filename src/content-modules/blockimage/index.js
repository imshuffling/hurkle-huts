import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlockImage({ image, hideBlockTitle, title }) {
  return (
    <div className='section image w-full relative'>
      {!hideBlockTitle && (
        <>
          <div className='absolute text-white drop-shadow-xl text-center z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h3 className='text-center p-2'>{title}</h3>
          </div>
          <div className='absolute z-[1] top-0 right-0 bg-gradient-to-t from-[#231f20] h-full w-full' />
        </>
      )}
      <GatsbyImage
        className='aspect-auto max-w-full min-h-[20rem] md:min-h-[40rem] w-full'
        image={image.gatsbyImageData}
        alt={image?.file?.fileName}
        lazy='lazy'
      />
    </div>
  );
}
