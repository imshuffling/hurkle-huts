import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { TbPhone, TbMail } from 'react-icons/tb';
import LogoText from '../images/LogoText';

const Footer = () => (
  <footer className='text-center font-sans'>
    <div className='p-8 md:p-20 bg-secondary text-white'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-auto flex justify-center items-center'>
          <Link className='hover:underline' to='/privacy-policy/'>
            Privacy policy
          </Link>
        </div>
        <div className='flex-auto flex justify-center items-center'>
          <div className='p-4 md:p-8'>
            <LogoText />
          </div>
        </div>
        <div className='flex-auto flex justify-center items-center'>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-center py-2 md:py-4'>
              <Link className='hover:underline' to='mailto:info@hurkle.co.uk'>
                <div className='flex flex-row items-center gap-1'>
                  <TbMail /> Email
                </div>
              </Link>
            </div>
            <div className='flex flex-row justify-center py-2 md:py-4'>
              <Link className='hover:underline' to='tel:+447786244245'>
                <div className='flex flex-row items-center gap-1'>
                  <TbPhone /> Phone
                </div>
              </Link>
            </div>
            <div className='flex flex-row justify-center py-2 md:py-4'>
              <Link
                className='hover:underline'
                to='https://www.instagram.com/hurkle.huts/'
              >
                <div className='flex flex-row items-center gap-1'>
                  <FaInstagram /> Instagram
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className='p-16 bg-secondary text-white'>
      <Link to='/contact/'>Contact us</Link>
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
    </div> */}
  </footer>
);

export default Footer;
