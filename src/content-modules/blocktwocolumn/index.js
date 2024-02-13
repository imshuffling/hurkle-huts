import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTwoColumn({
  title,
  image,
  text,
  hideBlockTitle,
  showTextBeforeImageFirstOnDesktop,
}) {
  return (
    <div className='section two-col'>
      {!hideBlockTitle && (
        <h3 className='md:text-center px-4 md:px-8 mt-8 mb-8'>{title}</h3>
      )}
      <div
        className={
          showTextBeforeImageFirstOnDesktop
            ? 'flex flex-col-reverse md:flex-row-reverse items-center gap-4'
            : 'flex flex-col-reverse md:flex-row items-center gap-4'
        }
      >
        <div className='md:basis-1/2 w-full'>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.file.fileName}
            lazy='lazy'
            className='max-w-full min-h-[20rem] md:min-h-[40rem] w-full'
          />
        </div>

        <div className='md:basis-1/2 text-sm md:text-md p-4 md:p-20'>
          {renderRichText(text)}
        </div>
      </div>
    </div>
  );
}
