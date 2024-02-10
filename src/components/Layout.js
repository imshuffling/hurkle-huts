import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const PageContainer = tw.div`
flex flex-col min-h-screen
`;

const GlobalStyle = createGlobalStyle`
  h1 {
    ${tw`text-6xl font-heading leading-12`}
  }

  h2 {
    ${tw`text-5xl font-heading leading-11`}
  }

  h3 {
    ${tw`text-xl leading-8 md:text-4xl font-heading md:leading-10`}
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

`;

// p {
//   ${tw`mt-3 max-w-md mx-auto text-base sm:text-sm md:mt-5 md:max-w-3xl`}
// }

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <PageContainer>
      <GlobalStyle />
      <Header pathname={pathname} />
      <main className='flex-1'>{children}</main>
      <Footer />
    </PageContainer>
  );
}
