import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { cardData } from "@/data";


// Sample Data


export default function Adventures() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    centerMode: false, // Disable center mode for better fit
    centerPadding: "0", // Remove padding
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for even smaller screens
        },
      },
    ],
  };

  return (
    <div className="p-">
      <Slider {...settings} className="flex justify-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex justify-center px-2" // Add horizontal padding between cards
          >
            <div className="flex flex-col items-center mx-auto hover:rounded-lg relative group">
              {/* Card Container */}
              <div className="flex flex-col items-center mx-auto group relative">
                <div className="relative bg-white shadow-md overflow-hidden transition-all duration-500 rounded-md group-hover:rounded-lg">
                  {/* Image Container */}
                  <div className="relative">
                    <Image
                      className="w-full h-[300px] object-cover transition-transform transform group-hover:scale-110 duration-500"
                      src={card.image}
                      alt={card.title}
                    />
                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col font-segoe justify-center items-center text-center p-4 text-white bg-black bg-opacity-30 hover:bg-opacity-40 hover:transition-all transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                      <h2 className="text-xl font-bold text-white text-shadow-custom">
                        {card.title}
                      </h2>
                      <div className="absolute bottom-4 rounded-lg w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-opacity-75 p-2">
                        <p className="text-sm">{card.hoverText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
