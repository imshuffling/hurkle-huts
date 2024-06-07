import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTwoColumnText({
  title,
  image,
  leftText,
  rightText,
  hideBlockTitle,
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
      className='section two-col-text relative py-6 md:py-12'
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
      <div className='w-full h-full flex flex-col md:flex-row relative px-6 items-center md:container mx-auto gap-6'>
        <div className='relative w-full min-h-full self-start'>
          {renderRichText(leftText)}
        </div>
        <div className='relative w-full min-h-full self-start'>
          {renderRichText(rightText)}
        </div>
      </div>
    </div>
  );
}
