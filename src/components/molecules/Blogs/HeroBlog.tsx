import React from "react";
import Image from "next/image";
import Blogs from "../../../../public/assets/phar.jpg";

const HeroBlog = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[90vh]">
      <Image
        src={Blogs}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority={true} // Optional: loads the image with high priority
      />

      {/* Optional overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-0 left-0 p-4 md:p-6 m-4 md:m-8 max-w-sm md:max-w-xl rounded-xl text-white z-10">
        <h2 className="text-lg md:text-xl font-semibold text-white shadow-lg">
          4 Must-Dos in Nuwara Eliya, Sri Lanka
        </h2>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-white/90 shadow-md">
          Industry
        </p>
        <p className="text-[10px] md:text-xs text-gray-300/90 shadow-md">
          12 April 2024
        </p>
        <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/90 shadow-md">
          No visit to Sri Lanka is complete without a stop in Nuwara Eliya,
          often dubbed Little England due to its colonial past. Founded in 1846
          by Samuel Baker, this picturesque town quickly became a preferred
          retreat for British colonists.
        </p>
        <div className="mt-3 md:mt-4 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full shadow-md"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full shadow-md"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full shadow-md"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
