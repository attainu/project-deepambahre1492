import React from 'react'
// material-ui core components
import { List, ListItem } from "@material-ui/core";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footImg1 from '../../assets/images/footer/footer1.jpg'
import footImg2 from '../../assets/images/footer/footer2.jpg'
import footImg3 from '../../assets/images/footer/footer3.jpg'
import footImg4 from '../../assets/images/footer/footer4.jpg'
import footImg5 from '../../assets/images/footer/footer5.jpg'
import footImg6 from '../../assets/images/footer/footer6.jpg'
import footImg7 from '../../assets/images/footer/footer7.jpg'
import footImg8 from '../../assets/images/footer/footer8.jpg'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top-container">
                    <div className="footer-grid">
                        <h5 className="">About Us</h5>
                        <p className="">Creative Tim is a startup that creates design tools that make the web development process faster and easier.</p>
                        <p className="">We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world. </p>
                    </div> 
                    <div className="footer-grid">
                        <h5>Social Feed</h5>
                        <div className="social"><i className="fab fa-twitter"></i><p className="">How to handle ethical disagreements with your clients.</p></div>
                        <div className="social"><i className="fab fa-twitter"></i><p className="">The tangible benefits of designing at 1x pixel density.</p></div>
                        <div className="social"><i className="fab fa-facebook-square"></i><p className="">A collection of 25 stunning sites that you can use for inspiration.</p></div>
                    </div> 
                    <div className="footer-grid">
                        <h5>Instagram Feed</h5>
                        <div className="insta-image">
                            <img src={footImg1} alt="footer1.jpg"></img>
                            <img src={footImg2} alt="footer2.jpg"></img>
                            <img src={footImg3} alt="footer3.jpg"></img>
                            <img src={footImg4} alt="footer4.jpg"></img>
                            <img src={footImg5} alt="footer5.jpg"></img>
                            <img src={footImg6} alt="footer6.jpg"></img>
                            <img src={footImg7} alt="footer7.jpg"></img>
                            <img src={footImg8} alt="footer8.jpg"></img>
                        </div>
                    </div> 
        </div>
        <hr></hr>
        <div className="footer-bottom-container">
        <p>&copy; {1900 + new Date().getYear()} , made with{" "}
      <Favorite className="" /> &nbsp; by {" "}
      &nbsp;<a href="/#" className="footer-copyright"> Deepam Bahre</a>{" "}&nbsp;
      for a better web.</p>
        <List className="footer-bottom-right">
          <ListItem className="social-icon">
            <a href="/#" className="blogger"><i className="fab fa-blogger-b"></i></a>
            <a href="/#" className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="/#" className="github"><i className="fab fa-github-alt"></i></a>
            <a href="/#" className="google"><i className="fab fa-google"></i></a>
            <a href="/#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
          </ListItem>
        </List>
        </div>
        </div>
    </footer>


    )
}

export default Footer





