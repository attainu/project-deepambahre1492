import React from "react";
import InfiniteCarousel from 'react-leaf-carousel';
import HomeCarousel from '../Carousel/Carousel';
export default function Home() {

  return (
    <div className="page">
      <HomeCarousel />
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
    autoCycle={true}
  >
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/woman_jeans_jacket_khoicw.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/man_winter1_lqkkul.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/woman_jeans_afyrsj.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/leather-jacket_jr38dw.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/kurtas_ieiwny.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/casual-shirts_zhifye.jpg'
      />
    </div>
  </InfiniteCarousel>
    </div>
  );
}
