import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

export default function BlockImage({
  image,
  hideBlockTitle,
  title,
  fullHeightImage,
}) {
  console.log('fullHeightImage', fullHeightImage);

  return (
    <div className='section image w-full relative'>
      {!hideBlockTitle && (
        <>
          <div className='absolute text-white drop-shadow-xl text-center z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h3 className='text-center p-2'>{title}</h3>
          </div>
          <div className='absolute z-[1] top-0 right-0 bg-gradient-to-b from-[#231f20] h-full w-full' />
        </>
      )}
      <GatsbyImage
        className='aspect-auto max-w-full min-h-[5rem] md:min-h-[10rem] h-[80vh] w-full object-cover'
        css={[fullHeightImage && tw`h-svh`]}
        image={image.gatsbyImageData}
        alt={image?.file?.fileName}
        lazy='eager'
      />
    </div>
  );
}
