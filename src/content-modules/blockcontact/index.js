import React, { useState } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { navigate } from 'gatsby-link';
import { Link } from 'gatsby';

export default function BlockContact({ title, text, hideBlockTitle }) {
  const [message, setMessage] = useState({});

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox'
        ? e.target.checked
          ? 'yes'
          : 'no'
        : e.target.value;

    setMessage({
      ...message,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...message }),
    })
      .then(() => navigate('/thanks/'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className='section contact p-4'>
      {!hideBlockTitle && <h3 className='text-center p-4'>{title}</h3>}
      <div className='text-center'>{renderRichText(text)}</div>
      <form
        name='contact'
        method='post'
        action='/thanks'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
        className='space-y-4 md:space-y-6 max-w-lg mx-auto py-8'
      >
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input
              name='bot-field'
              aria-label='bot-field'
              onChange={handleChange}
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
            />
          </label>
        </p>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          About you
        </h2>
        <div>
          <label
            htmlFor='firstName'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            First name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              required
              onChange={handleChange}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Last name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='lastName'
              id='lastName'
              required
              onChange={handleChange}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='email'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Email
          </label>
          <div className='mt-1'>
            <input
              type='email'
              name='email'
              id='email'
              required
              onChange={handleChange}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
              placeholder='you@example.com'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='phone'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Phone
          </label>
          <div className='mt-1'>
            <input
              type='tel'
              name='phone'
              id='phone'
              onChange={handleChange}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
              placeholder='+44 1234 567890'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='typeOfCustomer'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Type of customer
          </label>
          <select
            id='typeOfCustomer'
            name='typeOfCustomer'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>Private</option>
            <option>Glamping site</option>
            <option>Hotel</option>
            <option>Land/Estate Owner</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor='whereHearAboutUs'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Where did you hear about us?
          </label>
          <select
            id='whereHearAboutUs'
            name='whereHearAboutUs'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>Instagram</option>
            <option>Google Search</option>
            <option>Word of mouth</option>
            <option>Other</option>
          </select>
        </div>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Requirements
        </h2>
        <div>
          <label
            htmlFor='whatWouldYouLikeToUseTheHutFor'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            What would you like to use the hut for?
          </label>
          <select
            id='whatWouldYouLikeToUseTheHutFor'
            name='whatWouldYouLikeToUseTheHutFor'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>Accommodation</option>
            <option>Home Office</option>
            <option>Artist Studio</option>
            <option>Toilet block</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor='leaseOrBuy'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Are you looking to buy or lease a hut?
          </label>
          <select
            id='leaseOrBuy'
            name='leaseOrBuy'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>Buy</option>
            <option>Lease</option>
          </select>
        </div>

        <div>
          <label
            htmlFor='howManyHuts'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            How many huts are you looking for?
          </label>
          <select
            id='howManyHuts'
            name='howManyHuts'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>One</option>
            <option>Multiple</option>
            <option>Don't know yet</option>
          </select>
        </div>

        <div>
          <label
            htmlFor='hutETA'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            When would you like your hut to be ready for?
          </label>
          <select
            id='hutETA'
            name='hutETA'
            className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            onChange={handleChange}
            defaultValue='Select your option'
          >
            <option className='text-gray-400' value='' disabled>
              Select your option
            </option>
            <option>0-3 months</option>
            <option>3-6 months</option>
            <option>6months+</option>
            <option>Not sure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor='message'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Tell us what you are looking for
          </label>
          <div className='mt-1'>
            <textarea
              name='message'
              id='message'
              aria-label='Enter your message'
              placeholder='Message...'
              required
              onChange={handleChange}
              rows={4}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='relative flex items-start'>
          <div className='flex h-6 items-center'>
            <input
              id='signUpMailingList'
              aria-describedby='signUpMailingList-description'
              name='signUpMailingList'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-primary-green focus:ring-primary-green'
            />
          </div>
          <div className='ml-3 text-sm leading-5'>
            <label
              htmlFor='signUpMailingList'
              className='font-medium text-gray-900'
            >
              Would you like to sign up to our mailing list so that we can stay
              in touch with you about all things Hurkle?
            </label>
          </div>
        </div>

        <div>
          Read our{' '}
          <Link className='underline' to='/privacy-policy'>
            Privacy Notice
          </Link>
        </div>

        <div className='mt-1'>
          <button
            type='submit'
            className='text-left rounded-md bg-primary-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
