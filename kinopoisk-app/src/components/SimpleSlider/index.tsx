import React from "react";
import Slider from "react-slick";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowPrev } from "../assets/icons/arrows/ArrowPrev";
import { ArrowNext } from "../assets/icons/arrows/ArrowNext";

interface Props {
  children: React.ReactNode;
}

export const SimpleSlider = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    prevArrow: <ArrowPrev className="hover-arrow" />,
    nextArrow: <ArrowNext />,
  };

  return <Slider {...settings}>{props.children}</Slider>;
};
