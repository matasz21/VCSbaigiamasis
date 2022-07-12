import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import strawberry from '../images/strawberries.jpg';
import blueberry from '../images/blueberries.jpg';
import raspberry from '../images/raspberries.jpg';


const Owl = () => {
  return (
    <OwlCarousel
    className="owl-theme"
    items="1"
    autoplay
    dots="false"
    loop
    smartSpeed="500">
        <div className="item">
            <img src={strawberry} alt="Braškės" />
        </div>
        <div className="item">
            <img src={blueberry} alt="Šilauogės" />
        </div>
        <div className="item">
            <img src={raspberry} alt="Avietės" />
        </div>
    </OwlCarousel>
  )
};

export default Owl;
