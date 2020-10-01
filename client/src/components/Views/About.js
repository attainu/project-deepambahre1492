import React from "react";
import AboutImg from '../../assets/images/temp_banner.jpg';
export default function About() {

  return (
    <div className="page">
      <div className="About">
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
    </div>
  );
}
