"use client";
import styled from "@emotion/styled";
export const CarouselSlider = styled.div({});

export const CarouselSliderCarouselButton = styled.div<{
  isNext: boolean;
}>(({ isNext }) => ({
  "&.simple-btn": {
    position: "absolute",
    top: "50%",
    display: "block",
    right: isNext ? "-2rem" : "unset",
    left: isNext ? "unset" : "-2rem",
    padding: 0,
    width: "1.5rem",
    heigh: "3rem",
    transform: "translate(0, -50%)",
    cursor: "pointer",

    borderRight: isNext ? "unset" : `1rem solid white`,
    borderLeft: isNext ? `1rem solid white` : "unset",
    margin: "0 0.5rem",
    zIndex: 2,
    borderTop: "1.5rem solid transparent",
    opacity: 0.4,
    borderBottom: "1.5rem solid transparent",

    "&:hover, &:focus": {
      opacity: 1,
    },
  },
}));
