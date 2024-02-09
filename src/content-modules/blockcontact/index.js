import React, { useState } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { navigate } from 'gatsby-link';

export default function BlockContact({ title, text }) {
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
    <div className='section contact text-center p-24'>
      <h3 className='text-xl font-heading mb-2'>{title}</h3>
      {renderRichText(text)}
      <form
        name='contact'
        method='post'
        action='/thanks'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
        className='space-y-8 max-w-lg m-auto p-14'
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
        <input
          type='email'
          aria-label='Enter your email'
          name='email'
          placeholder='Your email'
          required
          onChange={handleChange}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
        />
        <textarea
          name='message'
          aria-label='Enter your message'
          placeholder='Your message'
          required
          onChange={handleChange}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
