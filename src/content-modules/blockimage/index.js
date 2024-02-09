import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlockImage({ image }) {
  return (
    <div className='section image w-full'>
      <GatsbyImage
        className='aspect-auto max-w-full h-lvh w-full'
        image={image.gatsbyImageData}
        alt={image?.file?.fileName}
        // lazy={lazyLoad ? "lazy" : "eager"}
      />
    </div>
  );
}
