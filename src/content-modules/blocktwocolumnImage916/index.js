import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTwoColumnImage916({
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
  const hurkleGreen = backgroundColour === 'Hurkle Green';
  const hurkleBeige = backgroundColour === 'Hurkle Beige';

  return (
    <div
      className='section two-col relative py-6 md:py-12'
      css={[
        bgWhite && tw`text-secondary`,
        bgPink && tw`text-primary-blue bg-primary-pink`,
        bgBlack && tw`text-white bg-secondary`,
        bgGreen && tw`text-white bg-primary-green`,
        bgBlue && tw`text-primary-pink bg-primary-blue`,
        hurkleGreen && tw`text-white bg-['#6d9c6c']`,
        hurkleBeige && tw`text-secondary bg-['#F4E0CF']`,
      ]}
    >
      {!hideBlockTitle && (
        <h3 className='md:text-center px-6 md:px-8 mt-8 mb-8'>{title}</h3>
      )}
      <div
        className={
          showTextBeforeImageFirstOnDesktop
            ? 'w-full h-full flex flex-col md:flex-row-reverse relative px-6 items-center md:container mx-auto'
            : 'w-full h-full flex flex-col md:flex-row relative px-6 items-center md:container mx-auto'
        }
      >
        <div className='relative w-full min-h-full self-start md:basis-1/3'>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.file.fileName}
            lazy='lazy'
            className='z-0 w-full aspect-[9/16]'
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
