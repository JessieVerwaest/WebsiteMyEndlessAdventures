import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  images: string[];
}

const MyCarousel = ({
  images,
  imageLinks,
}: {
  images: string[];
  imageLinks: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward" | null>(
    null
  );

  const nextSlide = () => {
    setDirection("forward");
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("backward");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    const newIndex = index;
    setDirection(newIndex > activeIndex ? "forward" : "backward");
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Auto-rotate every 3 seconds (adjust the interval as needed)
    const autoRotateInterval = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds
    return () => {
      // Clear the interval when the component unmounts to avoid memory leaks
      clearInterval(autoRotateInterval);
    };
  }, [activeIndex]); // Re-run the effect when the activeindex changes

  return (
    <div className="relative">
      {images.map((image, index) => (
        <Transition
          key={index}
          show={index === activeIndex}
          enter={`transition-transform duration-1000 ${
            index === activeIndex && direction === "forward"
              ? "translate-x-full"
              : index === activeIndex && direction === "backward"
              ? "-translate-x-full"
              : "translate-x-0"
          }`}
          enterFrom={`${
            direction === "forward" ? "translate-x-full" : "translate-x-[-100%]"
          }`}
          enterTo="translate-x-0"
          leave={`transition-transform duration-1000 ${
            index === activeIndex && direction === "forward"
              ? "-translate-x-full"
              : index === activeIndex && direction === "backward"
              ? "translate-x-full"
              : "translate-x-0"
          }`}
          leaveFrom="translate-x-0"
          leaveTo={`${
            direction === "forward" ? "-translate-x-full" : "translate-x-[-100%"
          }`}
        >
          <div className="w-full h-[950px] top-0 left-0 overflow-hidden">
            <a
              href={imageLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform translate-x-0"
              />
            </a>
          </div>
        </Transition>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 p-2 rounded-full focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          style={{ color: "white", opacity: "40%" }}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 p-2 rounded-full focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{ color: "white", opacity: "40%" }}
        />
      </button>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-5 h-5 mx-4 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            style={{ opacity: "50%" }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
