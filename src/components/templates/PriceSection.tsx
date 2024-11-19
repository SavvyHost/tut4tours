import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { FaUser, FaUsers, FaBed, FaHotel } from "react-icons/fa";

// Define the types for price plans
type PricePlan = {
  title: string;
  price: string;
};

type PricePlanDetail = {
  title: string;
  from_month: string;
  to_month: string;
  prices: PricePlan[];
};

interface DetailTour {
  tour_prices: PricePlanDetail[];
}

// PricePlanCard Component
const PricePlanCard: React.FC<{
  title: string;
  period: string;
  plans: PricePlan[];
}> = ({ title, period, plans }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaUser className="h-6 w-6 text-yellow-600 m-5" />;
      case 1:
        return <FaUsers className="h-6 w-6 text-yellow-600 m-5" />;
      case 2:
        return <FaBed className="h-6 w-6 text-yellow-600 m-5" />;
      case 3:
        return <FaHotel className="h-6 w-6 text-yellow-600 m-5" />;
      default:
        return <FaUser className="h-6 w-6 text-yellow-600 m-5" />;
    }
  };

  // Filter out unwanted price plans (if needed)
  const filteredPlans = plans.filter(
    (plan) => plan.title !== "Beach View" && plan.title !== "Mountain View"
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mb-3 cursor-pointer">
      <h2 className="text-xl font-segoe mb-4">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{period}</p>
      <div className="space-y-4">
        {/* Display Single and Double in the same row */}
        <div className="flex items-center space-x-4">
          {filteredPlans.slice(0, 2).map((plan, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2">{getIcon(index)}</div>
              <div>
                <p className="text-sm font-medium">{plan?.title}</p>
                <p className="text-lg font-bold text-nowrap">{plan?.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Display Triple and Family in the same row */}
        <div className="flex items-center space-x-4">
          {filteredPlans.slice(2, 4).map((plan, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2">{getIcon(index + 2)}</div>
              <div>
                <p className="text-sm font-medium">{plan?.title}</p>
                <p className="text-lg font-bold text-nowrap">{plan?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PricePlans Component
const PricePlans: React.FC<{ DetailTour: DetailTour }> = ({ DetailTour }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="container mx-auto  ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="flex items-center mb-4 hover:underline text-3xl font-bold text-start mt-2 lg:mt-7 cursor-pointer">
          Prices
        </h2>
        <span className="ml-2 cursor-pointer">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DetailTour.tour_prices.map((plan, index) => (
            <PricePlanCard
              key={index}
              title={plan.title}
              period={`${plan.from_month} - ${plan.to_month}`}
              plans={plan.prices}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePlans;
