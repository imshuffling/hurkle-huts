import React from 'react';

import BlockTextArea from './blocktextarea';
import BlockImage from './blockimage';
import BlockTwoColumn from './blocktwocolumn';
import BlockVideo from './blockvideo';

const MODULE_MAP = {
  ContentfulFullWidthTextBlock: BlockTextArea,
  ContentfulPhotoBlock: BlockImage,
  ContentfulVideoBlock: BlockVideo,
  ContentfulTwoColumnTextPhotoBlock: BlockTwoColumn,
};

export default function ContentModules({ blocks }) {
  return (
    <div className='flex gap-2 flex-col'>
      {blocks.map(({ __typename: type, ...props }, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}
