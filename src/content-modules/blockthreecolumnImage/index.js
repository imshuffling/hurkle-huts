import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

export default function BlockThreeColumnImage({
  title,
  leftImage,
  centerImage,
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
        hurkleGreen && tw`text-white bg-primary-hurkleGreen`,
        hurkleBeige && tw`text-secondary bg-primary-hurkleBeige`,
      ]}
    >
      <div className='md:container mx-auto'>
        {!hideBlockTitle && <h3 className='text-center px-6 pb-6'>{title}</h3>}
        <div className='w-full h-full flex flex-col md:flex-row relative px-6 items-center mx-auto gap-[1.5rem] md:gap-[3rem]'>
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
              image={centerImage.gatsbyImageData}
              alt={centerImage.file.fileName}
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
