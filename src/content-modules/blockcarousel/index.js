import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BlockCarousel({ carouselItem }) {
  console.log('carouselItem', carouselItem);

  const thumbs = carouselItem.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <img className='aspect-square h-auto w-60' src={item.image.file.url} />
      </React.Fragment>
    );
  });

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: function (i) {
      return <a>{thumbs[i]}</a>;
    },

    dots: true,
    dotsClass: 'slick-dots slick-thumb flex flex-row gap-2',
    speed: 500,
  };

  return (
    <div className='section image w-full max-w-[1200px] mx-auto'>
      <Slider {...settings}>
        {carouselItem.map((item, index) => {
          return (
            <div key={index} className='flex flex-row items-center mx-auto'>
              <h3 className='text-xl font-heading mb-2'>{item.title}</h3>
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.image?.file?.fileName}
                className='h-dvh w-full'
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
