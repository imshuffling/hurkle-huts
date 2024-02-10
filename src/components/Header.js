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
      <nav className='hidden md:block max-w-[945px] w-full m-auto'>
        <ul className='grid grid-cols-5 items-center'>
          {/* Render combined items */}
          {combinedItems}
        </ul>
      </nav>

      <nav className='block md:hidden'>
        <label class='relative z-40 cursor-pointer px-3 py-6' for='mobile-menu'>
          <input class='peer hidden' type='checkbox' id='mobile-menu' />
          <div class="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
          <div class='fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block'>
            &nbsp;
          </div>
          <div class='fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0'>
            <div class='float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl'>
              <menu>
                {filteredPages.map((page, index) => {
                  return (
                    <li className='flex' key={index}>
                      <Link
                        to={`/${page.slug}`}
                        activeClassName='active'
                        className='text-black justify-start'
                      >
                        {page.pageTitle}
                      </Link>
                    </li>
                  );
                })}
              </menu>
            </div>
          </div>
        </label>
      </nav>
    </header>
  );
}
