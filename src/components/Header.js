import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import logo from '../images/logo.svg';
import LogoIcon from '../images/LogoIcon';
import tw from 'twin.macro';

export default function Header({ pathname }) {
  console.log('pathname', pathname);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulNavigation(title: { eq: "Main navigation" }) {
        title
        page {
          slug
          pageTitle
        }
      }
    }
  `);

  // Filter out results with the slug "homepage"
  const filteredPages = data.contentfulNavigation.page.filter(
    (page) => page.slug !== 'homepage'
  );

  const isHomePage = pathname === '/';

  const middleIndex = Math.ceil(filteredPages.length / 2);

  // Map the filtered pages to list items
  const combinedItems = filteredPages.map((page, index) => {
    if (index === middleIndex) {
      // Insert logo at the middle index
      return (
        <React.Fragment key='logo'>
          <li className='mx-auto'>
            <Link to={`/`} activeClassName='active'>
              <LogoIcon />
            </Link>
          </li>
          <li className='mx-auto' key={page.slug}>
            <Link
              to={`/${page.slug}`}
              activeClassName='active'
              className='relative w-fit block after:block after:content after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'
            >
              {page.pageTitle}
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <li className='mx-auto' key={page.slug}>
          <Link
            to={`/${page.slug}`}
            activeClassName='active'
            className='relative w-fit block after:block after:content after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'
          >
            {page.pageTitle}
          </Link>
        </li>
      );
    }
  });

  return (
    <header
      css={[
        tw`relative text-center bg-white font-sans uppercase px-2 w-full z-10`,
        isHomePage &&
          tw`absolute top-0 left-0 z-10 w-full bg-transparent text-white`,
      ]}
    >
      <nav className='max-w-[945px] w-full m-auto'>
        <ul className='grid grid-cols-5 items-center'>
          {/* Render combined items */}
          {combinedItems}
        </ul>
      </nav>
    </header>
  );
}
