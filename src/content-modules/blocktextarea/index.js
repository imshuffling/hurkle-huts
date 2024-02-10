import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTextArea({ title, text }) {
  return (
    <div className='section text-area text-center p-4 md:p-20'>
      {renderRichText(text)}
    </div>
  );
}
