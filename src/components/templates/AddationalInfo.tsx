import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const AdditionalInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="flex hover:underline items-center text-3xl font-bold text-start mt-2 lg:mt-7 cursor-pointer">
          Additional Info
        </h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      {/* Animated Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden  bg-gray-50`}
      >
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg">
            Confirmation will be received at time of booking, unless booked
            within 4 days of travel. In this case, confirmation will be received
            within 48 hours, subject to availability.
          </li>
          <li className="text-lg">Not wheelchair accessible.</li>
          <li className="text-lg">Near public transportation.</li>
          <li className="text-lg">Most travelers can participate.</li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
