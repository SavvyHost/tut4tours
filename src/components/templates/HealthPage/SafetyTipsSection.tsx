import React from "react";
import Image from "next/image";
import Safe from "../../../../public/assets/safe.webp";
const SafetyTipsSection = () => {
  const tips = [
    {
      title: "Avoiding Being a Target",
      content:
        "If traveling to a high crime rate country, do not wear or carry jewelry or expensive gear. Keep your expensive stuff in a safe at your hotel room or reception. When going to the beach, take only what's really necessary and keep it simple at all times. Do not accept help from strangers while using ATM machines.",
    },
    {
      title: "Driving in a Foreign Country",
      content:
        "If renting a car in a foreign country, make sure you understand the road rules before you start driving, different countries have different road regulations. Also, watch out for fake police officers on the road. Carry your ID with you at all times and possibly state your blood type in a document ID and always let family and friends know your whereabouts and your travel plans during and before the trip.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-3 px-1 bg-blue-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Tip */}
        <div className=" p-6 ">
          <h3 className="text-2xl font-bold mb-4 font-cursive">
            {tips[0].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{tips[0].content}</p>
        </div>

        {/* Center Image */}
        <div className="relative h-[300px] lg:h-[280px] w-full">
          <Image
            src={Safe} // Replace with your actual image path
            alt="Safety First"
            fill
            className="object-cover rounded-none"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Right Tip */}
        <div className=" p-6 ">
          <h3 className="text-2xl font-bold mb-4 font-cursive">
            {tips[1].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{tips[1].content}</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyTipsSection;
