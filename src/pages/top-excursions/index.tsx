import React from "react";
import Excursions from "@/components/molecules/Excursions/Excursions";
import fetchData from "@/helper/FetchData";
import { TourPackage } from "@/types/tour";
import SearchExcursions from "@/components/atoms/SearchExcursions/SearchExcursios";
import Explore from "@/components/molecules/ExploreExcursios";
import Drops from "@/components/atoms/drops";

interface HomeProps {
  toursData: TourPackage[];
}

const Home: React.FC<HomeProps> = ({ toursData }) => {
  return (
    <div className="lg:px-16 p-4 mt-24">
      {/* <div className="mt-28">
        <SearchExcursions />
      </div>
      <div className="">
        <Explore />
      </div>
      <div className="">
        <h1 className="md:text-3xl text-xl font-segoe  mb-4 text-start lg:mt-0 mt-4">
          Filters
        </h1>
        <Drops />
      </div> */}
      <div>
        <h2 className="md:text-3xl text-xl font-bold my-4 text-start">
          Available Excursions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:p-0">
          {toursData.map((tour) => (
            <Excursions
              key={tour.id}
              id={tour.id}
              title={tour.title}
              location={tour.location}
              price={tour.min_price}
              image={tour.main_image.url}
              rating={2}
              destination={tour.destination}
              duration={tour.duration}
              ageRange={tour.age_range}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await fetchData("tours?type=excursion");

  return {
    props: {
      toursData: data.data as TourPackage[], // Ensure this matches the type
    },
  };
}
