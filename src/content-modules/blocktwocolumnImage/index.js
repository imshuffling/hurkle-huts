import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlockTwoColumnImage({
  title,
  leftImage,
  rightImage,
  hideBlockTitle,
}) {
  return (
    <div className='section two-col container mx-auto'>
      {!hideBlockTitle && <h3 className='text-center px-4 md:px-8'>{title}</h3>}
      <div className='flex flex-col-reverse md:flex-row items-center'>
        <div className='md:basis-1/2 w-full'>
          <GatsbyImage
            image={leftImage.gatsbyImageData}
            alt={leftImage.file.fileName}
            lazy='lazy'
            className='max-w-full min-h-[20rem] md:min-h-[40rem] w-full'
          />
        </div>
        <div className='md:basis-1/2 w-full'>
          <GatsbyImage
            image={rightImage.gatsbyImageData}
            alt={rightImage.file.fileName}
            lazy='lazy'
            className='max-w-full min-h-[20rem] md:min-h-[40rem] w-full'
          />
        </div>
      </div>
    </div>
  );
}
