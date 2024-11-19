import React from "react";
import { FaClock, FaChild, FaFlag, FaTags } from "react-icons/fa"; // Import icons
import { TourDetail } from "@/types/tour"; // Import the TourDetail interface

interface TripInfoProps {
  DetailTour: TourDetail; // Use the TourDetail interface for typing
}

const TripInfo: React.FC<TripInfoProps> = ({ DetailTour }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-start mt-3 lg:mt-4">
        Description
      </h1>

      {/* Two cards per row */}
      <div className="flex flex-wrap -mx-4">
        {/* Duration Card */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <FaClock className="text-primary-dark w-8 h-8 mr-4" />
            <h4 className="text-2xl font-semibold">
              Duration: {DetailTour.duration} Hours
            </h4>
          </div>
        </div>

        {/* Age Range Card */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <FaChild className="text-primary-dark w-8 h-8 mr-4" />
            <h4 className="text-2xl font-semibold">
              Age Range: {DetailTour.age_range}
            </h4>
          </div>
        </div>

        {/* Run Card */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <FaFlag className="text-primary-dark w-8 h-8 mr-4" />
            <h4 className="text-2xl font-semibold">Run: {DetailTour.run}</h4>
          </div>
        </div>

        {/* Category Card */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <FaTags className="text-primary-dark w-8 h-8 mr-4" />
            <h4 className="text-2xl font-semibold">
              Category: {DetailTour.category?.name || "No category available"}
            </h4>
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        className="font-segoe mt-5 text-xl"
        dangerouslySetInnerHTML={{
          __html: DetailTour.description ?? "No description available.",
        }}
      />
      <hr className="mt-2" />
    </div>
  );
};

export default TripInfo;
