import React, { useState } from "react";
import { Calendar, Globe, Heart, MapPin, Users } from "lucide-react";
import defaultImage from "../../../../public/assets/Secondimage.jpeg";
import Link from "next/link";
import { Button } from "@mui/material";
import { ToursData } from "@/types/tour"; // Import from your types file
import Pagination from "../Pagination"; // Import the Pagination component
import Image from "next/image";

interface TravelPackagePageProps {
  toursData: ToursData;
}

const TravelPackagePage: React.FC<TravelPackagePageProps> = ({ toursData }) => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const toursPerPage = 6;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const indexOfLastTour = (currentPage + 1) * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.data.slice(indexOfFirstTour, indexOfLastTour);
  const pageCount = Math.ceil(toursData.data.length / toursPerPage);

  return (
    <div className="w-full lg:mt-0 mt-3">
      <div className="grid grid-cols-1 gap-6">
        {currentTours.map((pkg) => (
          <Link href={`/top-excursions/${pkg.id}`} key={pkg.id}>
            <div
              className="w-full bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-sm cursor-pointer"
              onMouseEnter={() => setHoveredCardId(pkg.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/6 h-64 md:h-auto relative overflow-hidden">
                  <Image
                    src={pkg.main_image.url || defaultImage}
                    alt={pkg.title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-500 ease-in-out ${
                      hoveredCardId === pkg.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 text-sm font-segoe rounded-sm shadow-md">
                    Special Offer 20%
                  </div>
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 group">
                    <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
                  </button>
                </div>
                <div className="w-full md:w-4/6 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-segoe mb-4 text-gray-800">
                      {pkg.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Destination</p>
                          <p className="font-segoe text-gray-800">
                            {pkg.destination}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="font-segoe text-gray-800">
                            {pkg.duration} Days
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Age range</p>
                          <p className="font-segoe text-gray-800">
                            {pkg.age_range}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Operated in</p>
                          <p className="font-segoe text-gray-800">
                            {pkg.language}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="text-center sm:text-left">
                      <p className="text-black font-segoe text-3xl">
                        ${pkg.min_price}
                      </p>
                      <p className="text-sm text-gray-600">Per Person</p>
                    </div>
                    <div className="flex lg:w-auto w-full sm:flex-row sm:space-y-0 sm:space-x-2">
                      <Button className="bg-custom-gradient capitalize mr-3 md:mr-0 text-white font-segoe sm:py-2 px-3 sm:px-6 rounded-sm transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105 w-full sm:w-auto">
                        View tour
                      </Button>

                      <button className="border md:mx-0 mx-1 px-2 md:px-2 text-nowrap border-custom-gradient text-custom-gradient hover:bg-yellow-50 font-segoe sm:py-2 sm:px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                        Download brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default TravelPackagePage;
