import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

// Define the types for the props
interface OfferProps {
  imageSrc: StaticImageData; // URL or path to the image
  title: string; // Title of the offer
  description: string; // Description of the offer
  linkHref: string; // URL to navigate to
}

export default function Offer({
  imageSrc,
  title,
  description,
  linkHref,
}: OfferProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full group">
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={imageSrc}
          alt={title} // Use title for alt text to improve accessibility
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-20">
          <div className="w-full p-6 text-left text-white">
            <h2 className="md:text-2xl text-xl mb-2 font-segoe">{title}</h2>
            <p className="mb-4 font-segoe">{description}</p>
            <Button>
              <Link
                href={linkHref} // Use linkHref for navigation
                className="inline-block capitalize py-2 px-4 font-segoe rounded-md  hover:bg-yellow-700 hover:text-white  text-white bg-custom-gradient"
              >
                Explore
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div
        className="absolute top-2 right-2 p-2 bg-gradient-to-b from-[#945e13] to-[#cfb758] text-white font-bold text-xs flex items-center justify-center uppercase h-[70px] w-[50px] clip-path-polygon transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-10px]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)",
        }}
      >
        30%
      </div>
    </div>
  );
}
