import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import CookieConsent from 'react-cookie-consent';

const PageContainer = tw.div`
  flex flex-col min-h-screen
`;

const GlobalStyle = createGlobalStyle`
  h1 {
    ${tw`text-3xl leading-9 md:text-5xl font-heading md:leading-12`}
  }

  h2 {
    ${tw`text-2xl leading-8 md:text-4xl font-heading md:leading-10`}
  }

  h3 {
    ${tw`text-xl leading-8 md:text-3xl font-heading md:leading-9`}
  }

  h4 {
    ${tw`text-xl leading-8 md:text-3xl font-heading md:leading-9`}
  }

  h5 {
    ${tw`md:text-2xl text-xl leading-8 font-heading md:leading-8`}
  }

  h6 {
    ${tw`text-xl font-heading leading-7`}
  }

  p {
    ${tw`mt-3 mx-auto text-sm leading-5 md:text-base md:leading-6`}
  }

  h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p {
      ${tw`mt-3 md:mt-5`}
  }

  p + p {
    ${tw`mt-3 md:mt-5`}
  }

  p {
    margin-top: 0;
  }

  .cookie-banner {
    ${tw`sticky left-0 bottom-0 w-full z-50 bg-white text-black p-4 text-center`}

    p {
      ${tw`mt-1 mb-4`}
    }
  }

  .cookie-buttons {
    button {
      ${tw`inline-flex rounded-md bg-primary-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    }
  }

  .slick-list {
    height: 100% !important;
  }

  .slick-track {
    display: flex !important;
    height: inherit !important;
  }

  .slick-slide {
      height: inherit !important;
      > div {
        height: inherit !important;
      }
  }

  .slick-prev {
    left: 0;
    height: 100%;
    width: 50%;
    color: transparent;
    outline: none;
    background: transparent;
    cursor: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 62.12 39.2'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M22.12,38.1,2.2,19.6,22.12,1.1m-20,18.5h60' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 16 16, w-resize;
    z-index: 1;
    &:before {
      display: none;
    }
    ${tw`hidden md:block`}
  }

  .slick-next {
    right: 0;
    height: 100%;
    width: 50%;
    color: transparent;
    outline: none;
    background: transparent;
    cursor: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 62.12 39.2'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M22.12,38.1,2.2,19.6,22.12,1.1m-20,18.5h60' fill='none' stroke='%23000'  transform='rotate(180 31 20)' stroke-miterlimit='10' stroke-width='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 16 16, pointer;
    z-index: 1;
    &:before {
      display: none;
    }
    ${tw`hidden md:block`}
  }

`;

export default function Layout({ children}) {
  const { pathname } = useLocation();

  let isFirstBlockPhotoBlockOrVideoBlock = false;

  React.Children.forEach(children, child => {
    // Check if child is not null and has the required props
    if (child && child.props && child.props.blocks && child.props.blocks.length > 0) {
      // Check if the first element in the blocks array is ContentfulPhotoBlock or ContentfulVideoBlock
      isFirstBlockPhotoBlockOrVideoBlock = child.props.blocks[0].__typename === 'ContentfulPhotoBlock' || child.props.blocks[0].__typename === 'ContentfulVideoBlock';

      // Exit loop after finding the first block
      return false;
    }
  });


  return (
    <PageContainer>
      <GlobalStyle />
      <Header pathname={pathname} isFirstBlockPhotoBlockOrVideoBlock={isFirstBlockPhotoBlockOrVideoBlock} />
      <main className='flex-1'>{children}</main>
      <Footer />
      <CookieConsent
        disableStyles={true}
        location='bottom'
        buttonWrapperClasses='cookie-buttons flex justify-center space-x-4'
        buttonText='Accept'
        enableDeclineButton
        declineButtonText='Decline'
        cookieName='gatsby-gdpr-google-tagmanager'
        buttonClasses='btn'
        containerClasses='cookie-banner'
        contentClasses='cookie-banner__inner'
        moreLink='/cookies-policy'
        moreText='More info'
      >
        <p>
          We use cookies to give you the best experience and to help improve our
          website.
        </p>
      </CookieConsent>
    </PageContainer>
  );
}
