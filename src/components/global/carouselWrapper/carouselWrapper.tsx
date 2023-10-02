"use client";
import React, { FC, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

import * as styled from "./carouselWrapper.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ICarouselSliderComp {
  children: ReactNode;
  settings: Settings;
}

export const CarouselWrapper: FC<ICarouselSliderComp> = ({
  children,
  settings,
}) => {
  return (
    <styled.CarouselSlider>
      <Slider
        {...settings}
        nextArrow={<SampleNextArrow isNext={true} />}
        prevArrow={<SamplePrevArrow isNext={false} />}
      >
        {children}
      </Slider>
    </styled.CarouselSlider>
  );
};

//TODO: add some styling to the buttons
const SampleNextArrow = (props: any) => {
  const { onClick, isNext } = props;
  return (
    <styled.CarouselSliderCarouselButton
      className={"simple-btn"}
      isNext={isNext}
      onClick={onClick}
    >
      <div> {">"} </div>
    </styled.CarouselSliderCarouselButton>
  );
};

//TODO: add some styling to the buttons
const SamplePrevArrow = (props: any) => {
  const { onClick, isNext } = props;
  return (
    <styled.CarouselSliderCarouselButton
      className={"simple-btn"}
      isNext={isNext}
      onClick={onClick}
    >
      <div>{"<"}</div>
    </styled.CarouselSliderCarouselButton>
  );
};
