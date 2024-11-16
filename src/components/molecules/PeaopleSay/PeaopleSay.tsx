import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/templates/ProfileCard";
import Slider from "react-slick";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProfileCardProps = {
  name: string;
  icon: JSX.Element;
  imgSrc: string;
  alt: string;
  id: number;
};

const cardData: ProfileCardProps[] = [
  {
    id: 1,
    name: "Sarah Nichols",
    icon: <FaGoogle className="w-8 h-8 text-blue-500" />,
    imgSrc: "https://www.google.com/favicon.ico",
    alt: "Google logo",
  },
  {
    id: 2,
    name: "John Doe",
    icon: <FaApple className="w-8 h-8 text-gray-800" />,
    imgSrc: "https://www.apple.com/favicon.ico",
    alt: "Apple logo",
  },
  {
    id: 3,
    name: "Jane Smith",
    icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
    imgSrc: "https://www.facebook.com/favicon.ico",
    alt: "Facebook logo",
  },
  {
    id: 4,
    name: "Robert Brown",
    icon: <FaTwitter className="w-8 h-8 text-blue-400" />,
    imgSrc: "https://www.twitter.com/favicon.ico",
    alt: "Twitter logo",
  },
];

const ProfileCardsContainer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      {" "}
      {/* Adjust container width and overflow */}
      {isMobile ? (
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="slick-slide-custom mx-3">
              <ProfileCard
                key={card.id}
                name={card.name}
                imgSrc={card.imgSrc}
                alt={card.alt}
                id={card.id}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-wrap justify-center mb-2">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center"
            >
              <ProfileCard
                name={card.name}
                imgSrc={card.imgSrc}
                alt={card.alt}
                id={card.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCardsContainer;
