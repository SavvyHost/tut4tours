import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import a default image
import defaultImage from "../../../../public/assets/bgblogs.png"; // Update the path accordingly

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -top-8 lg:block hidden right-4 transform -translate-y-1/2 cursor-pointer rounded-full p-2 bg-white shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    <FiChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -top-8 right-20 lg:block hidden transform -translate-y-1/2 cursor-pointer rounded-full p-2 bg-white shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    <FiChevronLeft size={24} />
  </div>
);

// Define the type for the DestinationCard props
interface DestinationCardProps {
  name: string;
  imageUrl: string;
  id: number;
}

// DestinationCard component with typed props
const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  imageUrl,
  id,
}) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [clickStartX, setClickStartX] = useState<number | null>(null);
  const [clickStartY, setClickStartY] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setClickStartX(e.clientX);
    setClickStartY(e.clientY);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (clickStartX !== null && clickStartY !== null) {
      const deltaX = Math.abs(e.clientX - clickStartX);
      const deltaY = Math.abs(e.clientY - clickStartY);

      // If the mouse has moved less than a certain threshold, consider it a click
      if (deltaX < 5 && deltaY < 5) {
        router.push(`/destinations/${id}/`);
      }
    }
    setClickStartX(null);
    setClickStartY(null);
  };

  return (
    <div
      ref={cardRef}
      className="relative shadow-sm hover:shadow-xl cursor-pointer rounded-none overflow-hidden group  h-96 md:mx-2 my-2"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Image
        src={imageUrl || defaultImage}
        alt={name}
        width={256}
        height={160}
        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end pb-4">
        <h3 className="text-white text-xl font-semibold text-shadow-custom absolute top-4 left-4">
          {name}
          <div className="w-full border-b border-white my-1" />
        </h3>{" "}
      </div>
    </div>
  );
};

// Adjust the prop type to accept an array directly
interface DestinationRowProps {
  Destinations: {
    name: string;
    panar_image: string;
    id: number;
  }[];
}

// DestinationRow component
const DestinationRow: React.FC<DestinationRowProps> = ({ Destinations }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* Custom Arrows */}
      <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
      <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      <Slider {...settings} ref={sliderRef}>
        {Destinations.map((dest, index) => (
          <div key={`${dest.name}-${index}`} className="pr-3">
            <DestinationCard
              name={dest.name}
              imageUrl={dest.panar_image.url}
              id={dest.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationRow;
