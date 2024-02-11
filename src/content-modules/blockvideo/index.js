import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function BlockVideo({
  video,
  videoPosterImage,
  title,
  text,
  hideBlockTitle,
}) {
  return (
    <div className='section video w-full relative'>
      <div className='absolute text-white drop-shadow-xl text-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {hideBlockTitle && <h3 className='text-center p-2'>{title}</h3>}
        {text && renderRichText(text)}
      </div>

      <div className='absolute z-8 top-0 right-0 bg-gradient-to-b from-[#231f20] h-dvh w-full' />

      <video
        muted
        playsInline
        track={video.description}
        poster={videoPosterImage.file.url}
        autoPlay
        loop
        alt={video.description}
        className='object-cover max-w-full h-svh w-full'
      >
        <source src={video.file.url} type='video/mp4' />
        <track kind='captions' />
      </video>
    </div>
  );
}
