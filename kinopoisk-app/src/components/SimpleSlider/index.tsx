import React from "react";
import Slider from "react-slick";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowPrev } from "../assets/icons/arrows/ArrowPrev";
import { ArrowNext } from "../assets/icons/arrows/ArrowNext";

interface Props{
  children:React.ReactNode,
}

export const SimpleSlider = (props:Props) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth:true,
    arrows:true,
    prevArrow:<ArrowPrev className="hover-arrow"/>,
    nextArrow:<ArrowNext/>
  };

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}