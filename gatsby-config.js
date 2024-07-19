require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hurkle Huts`,
    siteUrl: `https://hurkle.co.uk`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        useNameForId: false,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hurkle Huts',
        short_name: 'Hurkle',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#6d9c6c',
        display: 'minimal-ui',
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          anonymize: true,
        },
        googleTagManager: {
          trackingId: process.env.GOOGLE_TAG_MANAGER_TRACKING_ID,
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
