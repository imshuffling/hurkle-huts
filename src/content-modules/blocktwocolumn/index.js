import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTwoColumn({
  title,
  image,
  text,
  hideBlockTitle,
  showTextBeforeImageFirstOnDesktop,
  backgroundColour,
}) {
  const bgWhite = backgroundColour === 'White';
  const bgBlack = backgroundColour === 'Black';
  const bgGreen = backgroundColour === 'Green';
  const bgPink = backgroundColour === 'Pink';
  const bgBlue = backgroundColour === 'Blue';

  return (
    <div
      className='section two-col'
      css={[
        bgWhite && tw`text-secondary`,
        bgPink && tw`text-primary-blue bg-primary-pink`,
        bgBlack && tw`text-white bg-secondary`,
        bgGreen && tw`text-white bg-primary-green`,
        bgBlue && tw`text-primary-pink bg-primary-blue`,
      ]}
    >
      {!hideBlockTitle && (
        <h3 className='md:text-center px-4 md:px-8 mt-8 mb-8'>{title}</h3>
      )}
      <div
        className={
          showTextBeforeImageFirstOnDesktop
            ? 'flex flex-col-reverse md:flex-row-reverse items-center'
            : 'flex flex-col-reverse md:flex-row items-center'
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

        <div className='md:basis-1/2 text-sm md:text-md p-8 md:p-20'>
          {renderRichText(text)}
        </div>
      </div>
    </div>
  );
}
