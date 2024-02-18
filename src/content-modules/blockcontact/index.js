import React, { useState } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { navigate } from 'gatsby-link';

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
    setMessage({ ...message, [e.target.name]: e.target.value });
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
            htmlFor='message'
            className='text-left block text-sm font-medium leading-6 text-black'
          >
            Your message
          </label>
          <div className='mt-1'>
            <textarea
              name='message'
              id='message'
              aria-label='Enter your message'
              placeholder='Your message'
              required
              onChange={handleChange}
              rows={4}
              className='block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='mt-1'>
          <button
            type='submit'
            className='text-left rounded-md bg-primary-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
