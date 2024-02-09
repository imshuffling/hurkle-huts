import React from 'react';

export default function BlockVideo({ video, videoPosterImage }) {
  return (
    <div className='section video w-full'>
      <video
        muted
        playsInline
        track={video.description}
        poster={videoPosterImage.file.url}
        // controls
        autoPlay
        loop
        alt={video.description}
        className='aspect-video max-w-full h-lvh w-full'
      >
        <source src={video.file.url} type='video/mp4' />
        <track kind='captions' />
      </video>
    </div>
  );
}
