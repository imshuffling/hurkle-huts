import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockTextArea({ title, text, hideBlockTitle }) {
  return (
    <div className='section text-area text-center py-12'>
      {hideBlockTitle && <h3 className='text-center px-4 md:px-8'>{title}</h3>}
      <div className='p-4 md:px-20'>{renderRichText(text)}</div>
    </div>
  );
}
