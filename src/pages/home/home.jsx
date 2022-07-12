import React from "react";
import './home.css';
import Owl from "../../contents/Carousel/Owl";
import ProductPreview from "../../contents/productPreview/productPreview";
import WhyChoose from "../../contents/whyChoose/whyChoose";
import Reviews from "../../contents/reviews/reviews";
import Modal from "../../contents/modal/modal";

const Home = () => {
  return (
  <div>
    <Owl className="owl-theme"/>
    <ProductPreview />
    <Modal />
    <WhyChoose />
    <Reviews />
  </div>)
};

export default Home;
