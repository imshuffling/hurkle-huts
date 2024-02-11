import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ContentModules from '../content-modules';

const Page = ({ data }) => {
  const { pageTitle, blocks } = data.contentfulPage;

  console.log(data);

  return (
    <Layout>
      <h1 className='text-2xl leading-8 p-4 md:text-5xl text-center font-heading md:p-12'>
        {pageTitle}
      </h1>
      {blocks && <ContentModules blocks={blocks} />}
    </Layout>
  );
};

export default Page;

export const Head = ({ data }) => {
  const { seoTitle, seoDescription, seoFeaturedImage } = data.contentfulPage;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription?.seoDescription} />
      <meta property='og:title' content={seoTitle} />
      <meta
        property='og:description'
        content={seoDescription?.seoDescription}
      />
      <meta property='og:image' content={seoFeaturedImage?.file.url} />
    </>
  );
};

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      pageTitle
      seoTitle
      seoFeaturedImage {
        file {
          url
        }
      }
      seoDescription {
        seoDescription
      }
      blocks {
        ... on ContentfulVideoBlock {
          __typename
          title
          hideBlockTitle
          text {
            raw
          }
          video {
            file {
              url
            }
          }
          videoPosterImage {
            file {
              url
            }
          }
        }
        ... on ContentfulTwoColumnTextPhotoBlock {
          __typename
          title
          hideBlockTitle
          showTextBeforeImageFirstOnDesktop
          text {
            raw
          }
          image {
            file {
              fileName
            }
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
        ... on ContentfulPhotoBlock {
          __typename
          title
          hideBlockTitle
          image {
            file {
              fileName
            }
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
        ... on ContentfulFullWidthTextBlock {
          __typename
          title
          hideBlockTitle
          text {
            raw
          }
        }
        ... on ContentfulContactBlock {
          __typename
          title
          hideBlockTitle
          text {
            raw
          }
        }
        ... on ContentfulCarousel {
          __typename
          carouselItem {
            __typename
            title
            image {
              file {
                fileName
                url
              }
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`;
