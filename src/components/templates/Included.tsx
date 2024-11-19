import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { TourDetail, TourIncludeItem } from "@/types/tour";

interface IncludedProps {
  DetailTour: TourDetail;
}

const Included: React.FC<IncludedProps> = ({ DetailTour }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage collapse/expand
  const includedItems = DetailTour.tour_includes?.filter(
    (item: TourIncludeItem) => item.status === "yes"
  );
  const notIncludedItems = DetailTour.tour_includes?.filter(
    (item: TourIncludeItem) => item.status !== "yes"
  );

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="flex items-center hover:underline text-3xl font-bold text-start mt-2 lg:mt-7 cursor-pointer">
          What’s Include / Exclude
        </h2>
        <span className="ml-2 cursor-pointer">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </div>

      {/* Transition for included items */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col md:flex-row lg:gap-16 gap-3 mt-4">
          {/* Column for Included Items */}
          <div className="w-full md:w-1/2">
            {includedItems?.map((item: TourIncludeItem, index: number) => (
              <div key={index} className="flex items-center p-0">
                <div className="flex">
                  <div className="text-primary-dark mr-2 mt-1">
                    <Check size={25} />
                  </div>
                  <div className="text-gray-700 font-segoe text-[18px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column for Not Included Items */}
          <div className="w-full md:w-1/2">
            {notIncludedItems?.map((item: TourIncludeItem, index: number) => (
              <div key={index} className="flex items-center">
                <div className="flex">
                  <div className="text-red-500 mr-2 mt-[2px]">
                    <X size={25} />
                  </div>
                  <div className="text-gray-700 flex font-segoe text-[18px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Included;
