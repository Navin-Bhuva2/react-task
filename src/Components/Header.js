import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bmw1 from "./img/bmw1.jpg"
import bmw2 from "./img/bmw2.jpg"
import audi1 from "./img/audi1.jpg"
import lembo1 from "./img/lembo1.jpg"
import image1 from "./img/image1.jpg"
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import './compo.css';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }
      const settings = {
         dots: true,
         arrows: true,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         appendDots: dots => {
            return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
         }
      };
      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About Travel</a></li>
                  <li><a className="smoothscroll" href="#resume">Detail</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Ratio</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <Slider {...settings}>
                     <div>

                        <img  src={bmw2} className="severity-content" alt="bmw2"></img>
                     </div>
                     <div>
                     <img  src={lembo1} className="severity-content" alt="lembo1"></img>
                     </div>
                     <div>
                        <img  src={audi1} className="severity-content" alt="audi1"></img>
                     </div>
                     <div>
                     <img src={bmw1} className="severity-content" alt="bmw1"></img>
                     </div>
                  </Slider>

               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
