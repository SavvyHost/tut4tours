import React from "react";
import Image from "next/image";
import Main from "../../../public/assets/bgblogs.png";
import Link from "next/link";
const ExploreEgyptSection: React.FC = () => {
  return (
    <div className="relative h-[400px] mt-4 flex items-center justify-center text-center">
      {/* Image as the background */}
      <Image
        src={Main} // Replace with your image path
        alt="Egypt's Wonders"
        layout="fill" // Ensures the image fills the div
        objectFit="cover" // Makes sure the image covers the entire area
        className="-z-10" // Send image to the back
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Explore Egypt’s Wonders?
        </h2>
        <p className="text-lg mb-6">
          Find Your Perfect Tour and Start Your Adventure Today
        </p>
        <Link
          href="/top-excursions"
          className="inline-block px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition duration-300"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default ExploreEgyptSection;
