import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTextArea({
  title,
  text,
  hideBlockTitle,
  backgroundColour,
  textBodyAligment,
}) {
  const bgWhite = backgroundColour === 'White';
  const bgBlack = backgroundColour === 'Black';
  const bgGreen = backgroundColour === 'Green';
  const bgPink = backgroundColour === 'Pink';
  const bgBlue = backgroundColour === 'Blue';
  const hurkleGreen = backgroundColour === 'Hurkle Green';
  const hurkleBeige = backgroundColour === 'Hurkle Beige';

  const textLeft = textBodyAligment === 'text-left';
  const textCenter = textBodyAligment === 'text-center';
  const textRight = textBodyAligment === 'text-right';

  return (
    <div
      className='section text-area'
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
      <div
        className='text-center p-4 md:py-8 container mx-auto'
        css={[
          textLeft && tw`text-left`,
          textCenter && tw`text-center`,
          textRight && tw`text-right`,
        ]}
      >
        {!hideBlockTitle && (
          <h3 className='text-center px-4 md:px-8'>{title}</h3>
        )}
        <div className='p-4 md:px-20 md:py-0 whitespace-pre-wrap'>
          {renderRichText(text)}
        </div>
      </div>
    </div>
  );
}
