import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import ImageMain from "../../../public/assets/Secondimage.jpeg";
import SecondMain from "../../../public/assets/firstImage.jpeg";

export default function HeroSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: ImageMain,
      text: "Discover Beautiful Places Do more with Egypt Travel",
    },
    {
      image: SecondMain,
      text: " Do more with Egypt Travel Plan Your Next Adventure",
    },
    {
      image: ImageMain,
      text: "Book Unique Do more with Egypt Travel Experiences",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white w-2/3 lg:text-4xl text-2xl font-bold text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
