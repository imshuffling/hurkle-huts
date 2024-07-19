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
  textColour,
}) {
  const bgWhite = backgroundColour === 'White';
  const bgBlack = backgroundColour === 'Black';
  const bgGreen = backgroundColour === 'Green';
  const bgPink = backgroundColour === 'Pink';
  const bgBlue = backgroundColour === 'Blue';
  const hurkleGreen = backgroundColour === 'Hurkle Green';
  const hurkleBeige = backgroundColour === 'Hurkle Beige';

  const textWhite = textColour === 'White';
  const textBlack = textColour === 'Black';
  const textHurkleGreen = textColour === 'Hurkle Green';
  const textHurkleBeige = textColour === 'Hurkle Beige';

  return (
    <div
      className='section two-col relative py-6 md:py-12'
      css={[
        bgWhite && tw`bg-white`,
        bgPink && tw`bg-primary-pink`,
        bgBlack && tw`bg-secondary`,
        bgGreen && tw`bg-primary-green`,
        bgBlue && tw`bg-primary-blue`,
        hurkleGreen && tw`bg-primary-hurkleGreen`,
        hurkleBeige && tw`bg-primary-hurkleBeige`,
        textWhite && tw`text-white`,
        textBlack && tw`text-primary`,
        textHurkleGreen && tw`text-primary-hurkleGreen`,
        textHurkleBeige && tw`text-primary-hurkleBeige`,
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
        <div className='relative w-full min-h-full self-start'>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.file.fileName}
            lazy='lazy'
            className='z-0 w-full aspect-video'
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
