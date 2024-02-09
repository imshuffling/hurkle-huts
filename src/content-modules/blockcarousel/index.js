import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BlockCarousel({ carouselItem }) {
  console.log('carouselItem', carouselItem);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: function (i) {
      return (
        <>
          {carouselItem.map((item, index) => {
            return (
              <div key={index}>
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  alt={item.image?.file?.fileName}
                />
              </div>
            );
          })}
        </>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='section image w-full'>
      <Slider {...settings}>
        {carouselItem.map((item, index) => {
          return (
            <div key={index} className='flex flex-row items-center'>
              <h3 className='text-xl font-heading mb-2'>{item.title}</h3>
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.image?.file?.fileName}
                className='max-w-full h-lvh w-full'
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
