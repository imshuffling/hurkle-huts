import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

export default function BlockTwoColumnImage({
  title,
  leftImage,
  rightImage,
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
      className='section two-col relative py-6 md:py-12'
      css={[
        bgWhite && tw`text-secondary`,
        bgPink && tw`text-primary-blue bg-primary-pink`,
        bgBlack && tw`text-white bg-secondary`,
        bgGreen && tw`text-white bg-primary-green`,
        bgBlue && tw`text-primary-pink bg-primary-blue`,
        hurkleGreen && tw`text-secondary bg-primary-hurkleGreen`,
        hurkleBeige && tw`text-secondary bg-primary-hurkleBeige`,
      ]}
    >
      <div className='container mx-auto'>
        {!hideBlockTitle && (
          <h3 className='text-center px-6 md:px-8'>{title}</h3>
        )}
        <div className='w-full h-full flex flex-col md:flex-row relative md:px-6 items-center mx-auto gap-6'>
          <div className='relative w-full min-h-full self-start'>
            <GatsbyImage
              image={leftImage.gatsbyImageData}
              alt={leftImage.file.fileName}
              lazy='lazy'
              className='z-0 w-full aspect-video'
            />
          </div>
          <div className='relative w-full min-h-full self-start'>
            <GatsbyImage
              image={rightImage.gatsbyImageData}
              alt={rightImage.file.fileName}
              lazy='lazy'
              className='z-0 w-full aspect-video'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
