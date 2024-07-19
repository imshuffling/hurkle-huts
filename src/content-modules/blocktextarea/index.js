import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTextArea({
  title,
  text,
  hideBlockTitle,
  backgroundColour,
  textBodyAligment,
  textColour,
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

  const textWhite = textColour === 'White';
  const textBlack = textColour === 'Black';
  const textHurkleGreen = textColour === 'Hurkle Green';
  const textHurkleBeige = textColour === 'Hurkle Beige';

  return (
    <div
      className='section text-area'
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
      <div
        className='text-center p-4 md:py-20 md:container mx-auto'
        css={[
          textLeft && tw`text-left`,
          textCenter && tw`text-center`,
          textRight && tw`text-right`,
        ]}
      >
        {!hideBlockTitle && (
          <h3 className='text-center px-6 md:px-8'>{title}</h3>
        )}
        <div className='whitespace-pre-wrap'>{renderRichText(text)}</div>
      </div>
    </div>
  );
}
