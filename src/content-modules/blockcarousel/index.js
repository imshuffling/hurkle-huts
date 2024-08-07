import React, { useState, useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineClose } from 'react-icons/md';
import tw from 'twin.macro';

export default function BlockCarousel({ carouselItem, backgroundColour }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const sliderRef = useRef(null);

  const bgWhite = backgroundColour === 'White';
  const bgBlack = backgroundColour === 'Black';
  const bgGreen = backgroundColour === 'Green';
  const bgPink = backgroundColour === 'Pink';
  const bgBlue = backgroundColour === 'Blue';
  const hurkleGreen = backgroundColour === 'Hurkle Green';
  const hurkleBeige = backgroundColour === 'Hurkle Beige';

  const thumbs = carouselItem.map((item, index) => {
    return (
      <button type='button' key={index} onClick={() => handleImageClick(index)}>
        <GatsbyImage
          className='mx-auto text-center'
          image={item.image.gatsbyImageData}
          alt={item.image?.file?.fileName}
        />
      </button>
    );
  });

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      sliderRef.current.slickNext();
    } else if (event.key === 'ArrowLeft') {
      sliderRef.current.slickPrev();
    } else if (event.key === 'Escape') {
      handleCloseCarousel();
    }
  };

  const settings = {
    ref: sliderRef,
    initialSlide: selectedImageIndex || 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    dotsClass: '!flex flex-row gap-4 !items-center py-4 justify-center',
    speed: 300,
    fade: false,
    prevArrow: '',
    nextArrow: '',
    accessibility: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          swipeToSlide: true,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (isCarouselOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCarouselOpen]);

  console.log('carouselItem:', carouselItem);

  return (
    <div
      className='section image w-full p-4 md:p-16'
      css={[
        bgWhite && tw`text-secondary bg-white`,
        bgPink && tw`text-primary-blue bg-primary-pink`,
        bgBlack && tw`text-white bg-secondary`,
        bgGreen && tw`text-white bg-primary-green`,
        bgBlue && tw`text-primary-pink bg-primary-blue`,
        hurkleGreen && tw`text-white bg-primary-hurkleGreen`,
        hurkleBeige && tw`text-secondary bg-primary-hurkleBeige`,
      ]}
    >
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
        {thumbs}

        {isCarouselOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full z-50'
            css={[
              bgWhite && tw`text-secondary bg-white`,
              bgPink && tw`text-primary-blue bg-primary-pink`,
              bgBlack && tw`text-white bg-secondary`,
              bgGreen && tw`text-white bg-primary-green`,
              bgBlue && tw`text-primary-pink bg-primary-blue`,
              hurkleGreen && tw`text-white bg-primary-hurkleGreen`,
              hurkleBeige && tw`text-secondary bg-primary-hurkleBeige`,
            ]}
          >
            <div className='w-full h-full relative z-50'>
              <button
                className='absolute top-4 left-4 text-2xl text-current md:p-4 z-10 hover:opacity-75'
                onClick={handleCloseCarousel}
              >
                <MdOutlineClose />
              </button>
              <div className='carousel-container z-50 h-full w-full'>
                <Slider {...settings} className='h-full w-full'>
                  {carouselItem.map((item, index) => {
                    // Placeholder for image dimensions (if available)
                    const width = item.image.gatsbyImageData.width;
                    const height = item.image.gatsbyImageData.height;

                    const isPortrait = width < height;

                    return (
                      <div
                        key={index}
                        className='w-full h-full !flex items-center justify-center flex-col p-4'
                      >
                        <GatsbyImage
                          image={item.image.gatsbyImageData}
                          alt={item.image?.file?.fileName}
                          objectFit='contain'
                        />
                        <h3 className='mt-2 md:mt-4 text-base text-current md:text-xl justify-start font-heading leading-6 flex'>
                          {index + 1} / {carouselItem.length}
                          {item.title && (
                            <span className='pl-6 inline-block'>
                              {item.title}
                            </span>
                          )}
                        </h3>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
