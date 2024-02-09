import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTextArea({ title, text }) {
  return (
    <div className='section text-area text-center p-12'>
      <h3 className='text-xl font-heading mb-2'>{title}</h3>
      {renderRichText(text)}
    </div>
  );
}
