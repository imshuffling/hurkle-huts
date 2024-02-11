import React from 'react';

import BlockTextArea from './blocktextarea';
import BlockImage from './blockimage';
import BlockTwoColumn from './blocktwocolumn';
import BlockVideo from './blockvideo';
import BlockContact from './blockcontact';
import BlockCarousel from './blockcarousel';
import BlockTwoColumnImage from './blocktwocolumnImage';

const MODULE_MAP = {
  ContentfulFullWidthTextBlock: BlockTextArea,
  ContentfulPhotoBlock: BlockImage,
  ContentfulVideoBlock: BlockVideo,
  ContentfulTwoColumnTextPhotoBlock: BlockTwoColumn,
  ContentfulColumnImageimageBlock: BlockTwoColumnImage,
  ContentfulContactBlock: BlockContact,
  ContentfulCarousel: BlockCarousel,
};

export default function ContentModules({ blocks }) {
  return (
    <div className='flex flex-col'>
      {blocks.map(({ __typename: type, ...props }, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}
