import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tw from 'twin.macro';

export default function BlockTextArea({
  title,
  text,
  hideBlockTitle,
  backgroundColour,
}) {
  console.log('backgroundColour', backgroundColour);

  const bgWhite = backgroundColour === 'White';
  const bgBlack = backgroundColour === 'Black';
  const bgGreen = backgroundColour === 'Green';

  return (
    <div
      className='section text-area'
      css={[
        bgWhite && tw`text-secondary`,
        bgBlack && tw`text-white bg-secondary`,
        bgGreen && tw`text-white bg-primary-green`,
      ]}
    >
      <div className='text-center py-12 container mx-auto'>
        {!hideBlockTitle && (
          <h3 className='text-center px-4 md:px-8'>{title}</h3>
        )}
        <div className='p-4 md:px-20'>{renderRichText(text)}</div>
      </div>
    </div>
  );
}
