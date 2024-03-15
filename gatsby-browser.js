import './src/styles/global.css';

require('typeface-poppins');
require('typeface-playfair-display');

import React from 'react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

export const wrapRootElement = ({ element }) => (
  <ContentfulLivePreviewProvider locale='en-US'>
    {element}
  </ContentfulLivePreviewProvider>
);
