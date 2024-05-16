import React from 'react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

import './src/styles/global.css';
require('typeface-poppins');
// require('typeface-playfair-display');

export const wrapRootElement = ({ element }) => (
  <ContentfulLivePreviewProvider locale='en-US'>
    {element}
  </ContentfulLivePreviewProvider>
);
