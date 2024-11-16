import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { Phone, Star, Calendar, Globe } from "lucide-react"; // Added Globe icon

const BenefitItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div
      className="rounded-full p-3 mb-4"
      style={{ backgroundColor: icon.color }}
    >
      {icon.component}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ViatorBenefits = () => {
  const benefits = [
    {
      icon: {
        component: <Phone className="w-6 h-6 text-blue-900" />,
        color: "#FADADD",
      },
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help.",
    },
    {
      icon: {
        component: <Star className="w-6 h-6 text-blue-900" />,
        color: "#FFFACD",
      },
      title: "Millions of reviews",
      description:
        "Plan and book with confidence using reviews from fellow travelers.",
    },
    {
      icon: {
        component: <Calendar className="w-6 h-6 text-blue-900" />,
        color: "#F0F8FF",
      },
      title: "Plan your way",
      description:
        "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
    },
    {
      icon: {
        component: <Globe className="w-6 h-6 text-blue-900" />, // New Globe icon
        color: "#E6E6FA",
      },
      title: "Worldwide destinations",
      description: "Explore tours and activities in destinations worldwide.",
    },
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Only show slider on mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 769, // For larger screens, show the grid
        settings: "unslick", // This tells Slick to not apply any settings
      },
    ],
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why book with Egypt Travel Lite ?
      </h2>
      <div className="hidden md:block">
        {/* Grid layout for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
      <div className="md:hidden">
        {/* Slider for mobile devices */}
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ViatorBenefits;
