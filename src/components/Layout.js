import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from '@reach/router';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header pathname={pathname} />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
