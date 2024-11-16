import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  imageSrc: StaticImageData; // Type for Next.js static image imports
  location: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
};

const ReviewCard = ({
  imageSrc,
  location,
  title,
  rating,
  reviewsCount,
  price,
}: ReviewCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex justify-end">
      <div className="sm:w-80 w-[350px] cursor-pointer shadow-md rounded-lg overflow-hidden hover:shadow-lg bg-white mx-auto my-5 group">
        <div className="relative h-48">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-transparent rounded-full p-1.5"
          >
            <FaStar
              className={`w-5 h-5 ${
                isFavorite ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1 font-segoe">{location}</p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 font-segoe group-hover:underline group-hover:text-bold transition duration-200">
            {title}
          </h3>
          <div className="flex items-center mb-2">
            <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-semibold mr-1 font-segoe">
              {rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-600 font-segoe">
              ({reviewsCount} reviews)
            </span>
          </div>
          <div className="flex justify-end">
            <p className="text-sm text-gray-600">
              From{" "}
              <span className="text-lg font-semibold text-black font-segoe">
                ${price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
