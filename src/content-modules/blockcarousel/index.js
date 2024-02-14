import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BlockCarousel({ carouselItem }) {
  const thumbs = carouselItem.map((item, index) => {
    return (
      <div key={index} className='cursor-pointer'>
        <img
          className='aspect-square h-auto w-20 mx-auto text-center'
          src={item.image.file.url}
          alt={item.image?.file?.fileName}
        />
      </div>
    );
  });

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: function (i) {
      return <button>{thumbs[i]}</button>;
    },
    dots: true,
    dotsClass: '!flex flex-row gap-4 !items-center py-4',
    speed: 500,
  };

  return (
    <div className='section image w-full max-w-[1200px] mx-auto px-2'>
      <Slider {...settings}>
        {carouselItem.map((item, index) => {
          return (
            <div
              key={index}
              className='flex flex-row items-center mx-auto relative overflow-hidden'
            >
              <h3 className='text-xl font-heading mb-2 absolute bottom-0 left-0 z-20 text-white p-6'>
                {item.title}
              </h3>
              {/* <div className='fixed z-8 bottom-0 right-0 bg-gradient-to-t from-[#231f20] h-1/2 w-full z-10' /> */}
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.image?.file?.fileName}
                className='min-h-[40rem] w-full'
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
