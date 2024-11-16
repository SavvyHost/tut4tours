import React from "react";
import {
  Ship,
  Palmtree,
  Compass,
  Waves,
  Building,
  ShipWheel,
} from "lucide-react";

interface TourCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TourCard: React.FC<TourCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-start space-x-4">
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <span className="m-2"> {icon}</span>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const PopularTours = () => {
  const tours = [
    {
      icon: <Waves size={30} className=" text-blue-500" />,
      title: "Snorkeling and Diving Tours Giftun Island:",
      description:
        "Spend your day exploring the crystal-clear waters of the Red Sea. Our expert marine team can offer diving and snorkeling excursions around the island, helping lessons if you're new to snorkeling. Take a boat to natural beaches and explore beautiful coral reefs. Just a 45-minute boat ride, although it's a bit of a drive from Hurghada, this is one of the best diving and snorkeling spots in the Red Sea, offering an incredible variety of marine life.",
    },
    {
      icon: <Compass size={30} className=" text-blue-500" />,
      title: "Desert Safari Tours",
      description:
        "Head deep into the Western Desert on a thrilling quad bike adventure to a Bedouin village, where you can learn about the local culture and enjoy a traditional meal. Camel Safari: Experience the desert like a true Bedouin by taking a sunset through the sand dunes. Jeep Safari: A guided tour through the desert in a 4x4 vehicle, often combined with a stop at a Bedouin camp and a traditional barbecue dinner under the stars.",
    },
    {
      icon: <Ship size={30} className=" text-blue-500" />,
      title: "Boat Trips and Water Sports Paradise Island:",
      description:
        "Spend the day exploring the crystal-clear waters and beaches of Paradise Island, part of the Giftun Islands. Tours typically include snorkeling spots and lunch on the beach. Fishing Trips: The Red Sea is known for its excellent fishing spots, with several operators for deep-sea fishing tours. Glass-Bottom Boat Tours: For those who aren't up for underwater work without getting wet, a glass-bottom boat tour is a great option.",
    },
    {
      icon: <Palmtree size={30} className=" text-blue-500" />,
      title: "Day Trips to Luxor:",
      description:
        "Visit one or more of Egypt's greatest monuments in the Ancient Temple, Luxor Temple, the Valley of the Kings, and the Temple of Hatshepsut. The River Cruise: Enjoy views over the Nile River Valley near sunset, where you can enjoy a relaxing boat ride while soaking in the historical sites along the river.",
    },
    {
      icon: <Waves size={30} className=" text-blue-500" />,
      title: "Submarine and Semi-Submarine Boat Sindbad:",
      description:
        "Explore the underwater world of the Red Sea in a real submarine that takes you down to observe a vibrant coral garden from below the surface. Semi-Submarine: Enjoy comfortable seating while watching the marine life from below the surface, offering a unique experience in a submarine without fully submerging.",
    },
    {
      icon: <Building size={30} className=" text-blue-500" />,
      title: "Cultural and City Tours Hurghada City Tour:",
      description:
        "Discover the best parts of Hurghada, including the Marina, the old town (El Dahar), and the local market. Grand Mosque Tour: Experience the Sand City sculpture park. Medieval Dinner: Enjoy a traditional Bedouin dinner in the desert, often combined with a camel ride and a cultural show.",
    },
  ];

  const luxuryBoatTour = {
    icon: <ShipWheel size={30} className=" text-blue-500" />,
    title: "Luxurious Boat Cruises Private Yacht Hire",
    description:
      "For a more exclusive experience, you can hire a private yacht for the day, perfect for a special occasion or just a luxurious day on the water. These tours provide a variety of experiences, whether you're interested in adventure, luxury, or simply relaxing in the stunning natural surroundings.",
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Our Popular Tours
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hurghada, a beautiful resort town on the Red Sea coast of Egypt,
          offers a wide range of tours and activities for visitors. Here are
          some of the most popular tours in Hurghada:
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            icon={tour.icon}
            title={tour.title}
            description={tour.description}
          />
        ))}
      </div>

      {/* Luxury Boat Section */}
      <div className="mt-8">
        <TourCard
          icon={luxuryBoatTour.icon}
          title={luxuryBoatTour.title}
          description={luxuryBoatTour.description}
        />
      </div>
    </div>
  );
};

export default PopularTours;
