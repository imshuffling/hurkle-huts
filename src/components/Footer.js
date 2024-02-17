import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className='text-center font-sans'>
    <div className='p-16 bg-secondary text-white'>
      Contact us
      <div className='text-primary-bistre pt-4'>
        <div>0800 123 4567</div>
        <div>
          <Link className='hover:underline' to='mailto:info@hurkle.co.uk'>
            info@hurkle.co.uk
          </Link>
        </div>
      </div>
      <div className='text-primary-bistre pt-4'>
        <div className='flex flex-row justify-center'>
          <Link
            className='hover:underline'
            to='https://www.instagram.com/hurkle.huts/'
          >
            <div className='flex flex-row items-center gap-1'>
              <FaInstagram /> Follow us on Instagram
            </div>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
