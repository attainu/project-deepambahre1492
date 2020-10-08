import React from "react";
import InfiniteCarousel from 'react-leaf-carousel';
import HomeCarousel from '../Carousel/Carousel';
import Contact from './Contact';
import AboutImg from '../../assets/images/temp_banner.jpg';

export default function Home() {

  return (
    <div className="page">
      <HomeCarousel />
      
      <div className="About" id="about">
      <h2>About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <div class="about-image">
             <img src={AboutImg} alt={AboutImg} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div class="about-text-content">
              <h3>About Our Fashion Store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!</p>
              <p>Proin gravida nibh vel velit auctor aliquet. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.</p>
              <button className="btn btn-ecommarce">Read More</button>
          </div>
        </div>
      </div>
    </div>

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
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/casual-shirts_zhifye.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601356192/shopping/slider/fashion1_fesjas.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601356192/shopping/slider/fashion2_i54q08.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/woman_jeans_afyrsj.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/woman_jeans_jacket_khoicw.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/man_winter1_lqkkul.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/leather-jacket_jr38dw.jpg'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://res.cloudinary.com/dts4wxk4i/image/upload/v1601265619/shopping/slider/kurtas_ieiwny.jpg'
      />
    </div>
    
  </InfiniteCarousel>
  <Contact />
    </div>
  );
}
