import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import Egy from "../../../public/assets/egys.jpeg";
import ReviewCard from "./ReviewCard";

type Props = {};

const PackageDetails = (props: Props) => {
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  const handleToggleFAQ = (index: number) => {
    setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className=" lg:px-16 px-4 ">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-segoe mb-4">The Basics</h2>
          <p className="text-gray-700 mb-6 font-segoe">
            Few structures on the planet are as immediately recognizable as the
            Giza Pyramids, and fewer still have served a similar purpose in
            stirring the imagination of travelers. Egypt’s history and culture
            have had an impact on the world for over 4,000 years, but none more
            so than the Great Pyramid of Giza. Built for Pharaoh Khufu, it’s the
            oldest of the Seven Wonders of the Ancient World and the only one
            still standing. With other major attractions such as the Sphinx, the
            Solar Boat Museum, the Pyramid of Djoser, and the Pyramid of Unas in
            Saqqara, this is an iconic sight not to be missed.
          </p>
          <button className="bg-yellow-500 text-white font-segoe px-4 py-2 rounded shadow hover:bg-yellow-600">
            View All Tours
          </button>
        </div>

        <ReviewCard
          imageSrc={Egy}
          location="Cairo, Egypt"
          title="Half-day tour, sound & light show, tour of the king"
          rating={4.5}
          reviewsCount={101}
          price={320}
        />
      </div>

      {/* Middle Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Things to know before you go
        </h2>
        <p className="text-gray-700">
          - Admission to the Great Pyramid of Giza requires a ticket separate
          from the general admission ticket to the Giza Plateau. It’s highly
          recommended to book in advance, as visitor numbers are limited each
          day. - Wear comfortable shoes, as there’s quite a bit of walking to
          do, especially if you want to explore inside the pyramids.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">How to get there</h3>
          <p className="text-gray-700">
            The Giza Plateau is about 12 miles from Cairo. Taxis and
            ride-hailing services such as Uber are readily available.
            Alternatively, many organized tours include transportation from
            Cairo hotels.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">When to get there</h3>
          <p className="text-gray-700">
            The cooler months between November and February offer the most
            comfortable weather for exploring the pyramids. Arriving early in
            the morning or late in the afternoon provides the best lighting for
            photography.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="border-t border-gray-200 pt-4">
              <h4
                className="flex justify-between items-center font-semibold cursor-pointer"
                onClick={() => handleToggleFAQ(idx)}
              >
                What are the nearest attractions to Giza Pyramids?
                {expandedFAQIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </h4>
              {expandedFAQIndex === idx && (
                <p className="text-gray-600 mt-2">
                  The Great Sphinx, the Solar Boat Museum, and the Pyramid of
                  Khafre are located nearby. Guided tours often include these
                  attractions.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
