import React, { useState } from "react";
import Image from "next/image";
import Map from "../../../public/assets/map.jpeg";
import { FaDownload } from "react-icons/fa";
import { Button } from "@mui/material";
import { TourDetail, TourItineraryItem } from "@/types/tour"; // Correct import
import { ChevronDown, ChevronUp } from "lucide-react";

interface TourItineraryProps {
  DetailTour: TourDetail;
}

const TourItinerary: React.FC<TourItineraryProps> = ({ DetailTour }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage collapse/expand
  const includedItems = DetailTour.tour_includes?.filter(
    (item: any) => item.status === "yes"
  );
  const notIncludedItems = DetailTour.tour_includes?.filter(
    (item: any) => item.status !== "yes"
  );

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  }; // State for toggling the visibility of the itinerary section

  // Default itinerary items if API does not return any
  const defaultItinerary = [
    {
      title: "Sample",
      description: "Description",
      duration: "8 hours",
    },
    {
      title: "Sample",
      description: "Description",
      duration: "6 hours",
    },
    {
      title: "Sample",
      description: "Description",
      duration: "5 hours",
    },
  ];

  // Get itinerary items from API or fallback to default
  const itineraryItems = DetailTour?.tour_itineraries?.length
    ? DetailTour.tour_itineraries
    : defaultItinerary;

  // Toggle function for the main itinerary section
  const toggleItinerary = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="flex hover:underline items-center text-3xl font-bold text-start mt-2 lg:mt-7 cursor-pointer">
          Tour Itinerary
        </h2>
        <span className="ml-2 cursor-pointer">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </div>

      {/* Itinerary Section with Transition */}
      <div
        className={`flex flex-col md:flex-row max-w-6xl mx-auto overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {/* Right side - Scrollable Itinerary with Stepper */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[600px] relative">
          {/* <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-yellow-700"></div> */}
          {itineraryItems.map((item: TourItineraryItem, index: number) => (
            <div key={index} className="mb-10 relative pl-12">
              <div className="absolute left-0 -ml-[5px] mt-1.5 w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-sm">
                {index + 1}
              </div>
              <h3 className="text-xl font-segoe text-black flex items-center">
                {item.title}
              </h3>
              <p className="mt-2 font-segoe text-gray-700">
                {item.description}
              </p>
              <p className="mt-1 font-segoe text-sm text-gray-500">
                {item.duration}
              </p>
            </div>
          ))}
          <div>
            {/* <Button className="mt-1 flex capitalize items-center px-4 py-2 border border-opacity-60 border-yellow-700 bg-yellow-100 text-yellow-700 font-segoe text-lg rounded-md hover:bg-yellow-950 hover:text-white transition-colors duration-300">
              <FaDownload className="mr-2 text-[#389bd4]" />
              Download Brochure
            </Button> */}
          </div>
        </div>
      </div>

      <hr className="mt-2" />
    </div>
  );
};

export default TourItinerary;
