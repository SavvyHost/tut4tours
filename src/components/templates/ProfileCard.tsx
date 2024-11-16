import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import User from "../../../public/assets/infocard.png";

type ProfileCardProps = {
  name: string;
  imgSrc: string;
  alt: string;
  id: number;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imgSrc, alt }) => {
  return (
    <div className="relative lg:mr-0 mr-5 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      {/* Icon positioned in the top-right corner */}
      <div className="absolute top-4 right-4 bg-white rounded-full shadow-md">
        <Image
          className="w-8 h-8"
          src={imgSrc}
          alt={alt}
          width={32}
          height={32}
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        {/* Centered profile image */}
        <div className="relative mb-3">
          <Image
            className="w-20 h-20 rounded-full object-cover"
            src={User}
            alt="Profile"
            width={80}
            height={80}
          />
        </div>

        {/* Stars and text */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2 font-segoe">{name}</h2>
        <p className="text-sm text-gray-600 text-center font-segoe">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
