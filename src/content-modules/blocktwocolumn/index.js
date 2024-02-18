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
      className='section two-col relative py-8 md:py-[3.75rem]'
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
            ? 'w-full h-full flex flex-col md:flex-row-reverse relative px-4 items-center max-w-[78rem] mx-auto'
            : 'w-full h-full flex flex-col md:flex-row relative px-4 items-center max-w-[78rem] mx-auto'
        }
      >
        <div className='relative w-full min-h-full self-start'>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.file.fileName}
            lazy='lazy'
            className='z-0 w-full aspect-square'
          />
        </div>

        <div className='relative w-full h-full mx-auto pt-6 md:pt-0'>
          <div
            className={
              showTextBeforeImageFirstOnDesktop ? 'md:pr-12' : 'md:pl-12'
            }
          >
            {renderRichText(text)}
          </div>
        </div>
      </div>
    </div>
  );
}
