import React from "react";
import Slider from "react-slick";
import {
  FaHiking,
  FaMountain,
  FaLandmark,
  FaUmbrellaBeach,
  FaPagelines,
  FaMapMarkedAlt,
  FaUtensils,
  FaMusic,
  FaHeart,
  FaShip,
} from "react-icons/fa";

const interests = [
  {
    name: "Activities",
    icon: <FaHiking size={32} className="text-blue-700" />,
  },
  {
    name: "Adventure",
    icon: <FaMountain size={32} className="text-blue-700" />,
  },
  {
    name: "Attractions",
    icon: <FaLandmark size={32} className="text-blue-700" />,
  },
  {
    name: "Beaches",
    icon: <FaUmbrellaBeach size={32} className="text-blue-700" />,
  },
  {
    name: "Culture",
    icon: <FaPagelines size={32} className="text-blue-700" />,
  },
  {
    name: "Destination",
    icon: <FaMapMarkedAlt size={32} className="text-blue-700" />,
  },
  {
    name: "Festivals",
    icon: <FaMusic size={32} className="text-blue-700" />,
  },
  { name: "Food", icon: <FaUtensils size={32} className="text-blue-700" /> },
  {
    name: "Life Style",
    icon: <FaHeart size={32} className="text-blue-700" />,
  },
  { name: "Shore", icon: <FaShip size={32} className="text-blue-700" /> },
];

const InterestsSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 2 items on mobile
          slidesToScroll: 1,
          centerMode: false, // Center mode off for mobile
        },
      },
    ],
  };

  return (
    <div className=" lg:px-16 p-4 bg-[#FAFAFA]">
      <div className="text-left text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer mb-4">
        Interests
      </div>
      {/* Mobile carousel */}
      <div className="block lg:hidden">
        <Slider {...settings} className="overflow-hidden">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 space-y-4"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full border border-blue-600 bg-white">
                {interest.icon}
              </div>
              <p className="text-sm font-segoe text-center">{interest.name}</p>
            </div>
          ))}
        </Slider>
      </div>
      {/* Desktop grid */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-8">
        {interests.map((interest, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border border-blue-600 bg-white">
              {interest.icon}
            </div>
            <p className="mt-4 text-sm font-segoe text-center">
              {interest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;