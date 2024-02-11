import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlockImage({ image, hideBlockTitle, title }) {
  return (
    <div className='section image w-full'>
      {hideBlockTitle && <h3 className='text-center p-8'>{title}</h3>}
      <GatsbyImage
        className='aspect-auto max-w-full min-h-[20rem] md:min-h-[40rem] w-full'
        image={image.gatsbyImageData}
        alt={image?.file?.fileName}
        // lazy={lazyLoad ? "lazy" : "eager"}
      />
    </div>
  );
}
