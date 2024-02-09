import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import logo from '../images/logo.svg';

export default function Header() {
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

  const middleIndex = Math.ceil(filteredPages.length / 2);

  // Map the filtered pages to list items
  const combinedItems = filteredPages.map((page, index) => {
    if (index === middleIndex) {
      // Insert logo at the middle index
      return (
        <React.Fragment key='logo'>
          <li>
            <Link to={`/`} activeClassName='active'>
              <img className='w-36 h-auto' src={logo} alt='logo' />{' '}
            </Link>
          </li>
          <li key={page.slug}>
            <Link to={`/${page.slug}`} activeClassName='active'>
              {page.pageTitle}
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <li key={page.slug}>
          <Link to={`/${page.slug}`} activeClassName='active'>
            {page.pageTitle}
          </Link>
        </li>
      );
    }
  });

  return (
    <header className='text-center font-sans uppercase px-2 bg-white sticky top-0 w-full shadow-md z-10'>
      <nav>
        <ul className='flex gap-4 items-center justify-evenly'>
          {/* Render combined items */}
          {combinedItems}
        </ul>
      </nav>
    </header>
  );
}
