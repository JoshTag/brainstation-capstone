import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.scss";

export class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      pauseOnHover: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
             initialSlide: 1,
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             initialSlide: 1
           }
         }
       ]
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel__item ">
            <p>AKUNDA'S BITE</p>
            <p>1,330 g</p>
          </div>
          <div className="carousel__item ">
            <p>ANCHOR WEED</p>
            <p>4,018 g</p>
          </div>
          <div className="carousel__item ">
            <p>GOBLIN GLIDER KIT</p>
            <p>1,159 g</p>
          </div>
          <div className="carousel__item ">
            <p>MONELITE ORE</p>
            <p>2045 g</p>
          </div>
          <div className="carousel__item ">
            <p>PLATINUM ORE</p>
            <p>6,344 g</p>
          </div>
          <div className="carousel__item ">
            <p>TIDESPRAY LINEN</p>
            <p>2 g</p>
          </div>
          <div className="carousel__item ">
            <p>SEA STALK</p>
            <p>1256 g</p>
          </div>
          <div className="carousel__item ">
            <p>SIREN'S POLLEN</p>
            <p>2,225 g</p>
          </div>
          <div className="carousel__item ">
            <p>STORM SILVER ORE</p>
            <p>3,739 g</p>
          </div>
          <div className="carousel__item ">
            <p>TOUGH JERKY</p>
            <p>4,165 g</p>
          </div>
          <div className="carousel__item ">
            <p>MEATY HAUNCH</p>
            <p>1 g</p>
          </div>
          <div className="carousel__item ">
            <p>MINING PICK</p>
            <p>7 g</p>
          </div>
          <div className="carousel__item ">
            <p>SNOBOLD RUNT</p>
            <p>243,123 g</p>
          </div>
          <div className="carousel__item ">
            <p>COARSE LEATHER</p>
            <p>3 g</p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
