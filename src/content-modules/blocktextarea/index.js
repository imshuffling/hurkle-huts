import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTextArea({ title, text, hideBlockTitle }) {
  return (
    <div className='section text-area text-center p-4 md:p-20'>
      {hideBlockTitle && <h3 className='text-center p-8'>{title}</h3>}
      {renderRichText(text)}
    </div>
  );
}
