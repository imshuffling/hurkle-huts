import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTwoColumn({
  image,
  text,
  showTextBeforeImageFirstOnDesktop,
}) {
  return (
    <div
      className={
        showTextBeforeImageFirstOnDesktop
          ? 'section two-col flex flex-row-reverse gap-6 items-center'
          : 'section two-col flex flex-row gap-6 items-center'
      }
    >
      <div className='basis-1/2 w-full'>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.file.fileName}
          lazy='lazy'
          className='max-w-full h-auto w-full'
        />
      </div>

      <div className='basis-1/2 text-md'>{renderRichText(text)}</div>
    </div>
  );
}
