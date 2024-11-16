import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DefaultImage from "../../../../public/assets/pyr.jpeg";

interface CardProps {
  imageSrc: string | StaticImageData;
  title: string;
  content: string;
  created_at: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  content,
  created_at,
  id,
}) => {
  // Fallback to default image if imageSrc is undefined, null, or an empty string
  const imageToUse = imageSrc && imageSrc !== "" ? imageSrc : DefaultImage;

  return (
    <Link href={`/blogs/${id}`}>
      <div className="group flex-shrink-0 lg:mx-2 mx-0 cursor-pointer overflow-hidden lg:h-[444px] bg-[#FAFAFA] transition-transform duration-300 ease-in-out hover:shadow-lg shadow-md">
        <div className="overflow-hidden">
          <Image
            src={imageToUse}
            alt={title}
            width={512}
            height={208} // Matching h-52 class (208px)
            className="w-full h-52 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:underline">
            {title}
          </h3>
          <h2
            className="text-gray-700 text-base line-clamp-2"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <p className="text-gray-800 text-[13px] font-semibold mt-4">
            {new Date(created_at).toLocaleDateString()}
          </p>
          <span className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-blue-600 hover:bg-blue-700 text-white text-[13px] transition-colors duration-300 ease-in-out">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
