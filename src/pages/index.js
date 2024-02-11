import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ContentModules from '../content-modules';

const IndexPage = ({ data }) => {
  const { blocks } = data.contentfulPage;

  return <Layout>{blocks && <ContentModules blocks={blocks} />}</Layout>;
};

export default IndexPage;

export const Head = ({ data }) => {
  return (
    <>
      <title>{data.contentfulPage?.seoTitle}</title>
      <meta
        name='description'
        content={data.contentfulPage?.seoDescription?.seoDescription}
      />
      <meta property='og:title' content={data.contentfulPage?.seoTitle} />
      <meta
        property='og:description'
        content={data.contentfulPage?.seoDescription?.seoDescription}
      />
      <meta
        property='og:image'
        content={data.contentfulPage?.seoFeaturedImage?.file.url}
      />
    </>
  );
};

export const pageQuery = graphql`
  query pageQuery {
    contentfulPage(slug: { eq: "homepage" }) {
      slug
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
        __typename
        ... on Node {
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
          ... on ContentfulColumnImageimageBlock {
            __typename
            title
            hideBlockTitle
            leftImage {
              file {
                fileName
              }
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
            rightImage {
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
          ... on ContentfulTwoColumnTextPhotoBlock {
            __typename
            title
            hideBlockTitle
            text {
              raw
            }
            showTextBeforeImageFirstOnDesktop
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
  }
`;
