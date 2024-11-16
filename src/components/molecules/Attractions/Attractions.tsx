import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Attraction } from "@/types/tour";
import defaultImage from "../../../../public/assets/bgblogs.png";
import Link from "next/link";
type AttractionCardProps = {
  name: string;
  imageSrc: string; // Updated to string for dynamic image URLs
  toursCount: number;
  id: number;
};

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  imageSrc,
  toursCount,
  id,
}) => {
  return (
    <Link
      href={`/attractions/${id}`}
      className="group cursor-pointer bg-white shadow-md hover:shadow-xl w-full h-full rounded-lg overflow-hidden font-sans"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 text-xl font-bold line-clamp-2">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {toursCount} Tours and Activities
        </p>
      </div>
    </Link>
  );
};

type Props = {
  attractions: Attraction[]; // Accept dynamic data for attractions
};

const Attractions: React.FC<Props> = ({ attractions }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden p-0">
      {isMobile ? (
        <Slider {...sliderSettings}>
          {attractions.map((attraction) => (
            <div className="flex justify-start pr-3 pb-2" key={attraction.id}>
              <AttractionCard
                name={attraction.name}
                id={attraction.id}
                imageSrc={attraction.paner_image?.url || defaultImage} // Use the dynamic image
                toursCount={attraction.toursCount || 0} // Assuming the API has toursCount or related field
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-3">
          {attractions.map((attraction) => (
            <div className="flex justify-start" key={attraction.id}>
              <AttractionCard
                name={attraction.name}
                id={attraction.id}
                imageSrc={attraction.paner_image?.url || defaultImage}
                toursCount={attraction.toursCount || 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attractions;
