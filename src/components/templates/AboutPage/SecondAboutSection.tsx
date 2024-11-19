import React from "react";
import { Backpack, Camera, Fingerprint, Plane } from "lucide-react";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="w-20 h-20 cursor-pointer rounded-full border-2 border-yellow-500 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-95">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-gray-600 text-sm">
          <div className="pr-4">
            <Fingerprint color="gray" />
          </div>
          <span
            className="text-center font-medium text-base text-yellow-800 "
            style={{ lineHeight: "" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const TravelPerfectionSteps = () => {
  const steps = [
    {
      icon: <Backpack className="w-8 h-8 text-yellow-500" />,
      title: "Research and Plan",
      items: [
        "Create an Itinerary: Outline the major activities, sights, and experiences you want to enjoy. Include time for relaxation and spontaneity",
        "Create an Itinerary: Outline the major activities, sights, and experiences you want to enjoy. Include time for relaxation and spontaneity",
        "Destination Selection: Choose a destination based on your interests, budget, and travel preferences.",
      ],
    },
    {
      icon: <Camera className="w-8 h-8 text-yellow-500" />,
      title: "Book Essentials",
      items: [
        "Activities and Tours: Book popular options ahead of time to avoid disappointment.",
        "Transportation: Arrange for local transportation, whether it's car rentals, public transit passes, or airport transfers.",
        "Accommodation: Secure your accommodation well in advance for the best prices and availability.",
      ],
    },
    {
      icon: <Plane className="w-8 h-8 text-yellow-500" />,
      title: "Prepare and Pack",
      items: [
        "Final Checks: Confirm all bookings, check the weather forecast, and make sure you have travel insurance.",
        "Documents: Organize your passport, tickets, itinerary, and other necessary documents. Keep digital copies in the cloud.",
        "Packing: Pack according to the climate and planned activities. Don't forget essentials like travel adapters, medications, and important documents.",
      ],
    },
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-medium mb-2">
          3 Steps For The Perfect Trip
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Find Travel Perfection
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Planning the perfect trip involves careful preparation to ensure
          everything goes smoothly. Here are three key steps:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            items={step.items}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelPerfectionSteps;
