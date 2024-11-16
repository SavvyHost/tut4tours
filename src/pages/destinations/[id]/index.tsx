import React from "react";
import HeroBannerAttraction from "@/components/molecules/Attractions/HeroBannerAttraction";
import AttractionImage from "../../../../public/assets/bgblogs.png";
import Breadcrumb from "@/components/molecules/Attractions/BreadCrumb";
import OverViewAttraction from "@/components/molecules/Attractions/OverViewAttraction";
import {
  ToursSection,
  ExcursionsSection,
  AttractionsSection,
} from "@/components/organisms";
import fetchData from "@/helper/FetchData";
import { TourPackage, ToursData } from "@/types/tour";
import Excursions from "@/components/molecules/Excursions/Excursions";

// Define the Props for the component
type City = {
  id: number;
  name: string;
  country_id: number;
};

type Props = {
  city?: City;
  toursData: ToursData;
  excursionData: TourPackage[];
};

const destinationMapping: { [key: string]: string } = {
  "4": "Luxor",
  "7": "Hurghada",
  "5": "Aswan",
  "8": "Marsa Alam",
  "1": "Cairo",
};

const AttractionsDetails: React.FC<Props> = ({
  city,
  toursData,
  excursionData,
  attractionsData,
}) => {
  if (!city) {
    return <div>City not found or data not available.</div>;
  }

  const breadcrumbItems = [
    { label: "Destinations", href: "/" },
    {
      label: city.name,
      href: `/destinations/${city.country_id}/${city.name.toLowerCase()}`,
    },
  ];

  return (
    <div className="">
      <HeroBannerAttraction
        title="Things to do in"
        subtitle={city.name}
        imageUrl={AttractionImage}
      />

      <Breadcrumb items={breadcrumbItems} />

      <OverViewAttraction
        title="Overview"
        description={`Discover the beauty and history of ${city.name}, one of the most renowned destinations. Explore its landmarks and enjoy cultural experiences.`}
      />

      <div className="lg:px-16 px-4">
        <div className="text-left  mt-3 text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer mb-4">
          Top Excursions in {city.name}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:p-0">
          {excursionData.map((tour) => (
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

export default AttractionsDetails;

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  try {
    // Fetch all required data
    const attractionsResponse = await fetchData("cities");
    const attractionsData = await fetchData("places");
    const toursData: ToursData = await fetchData("tours");

    // Find the city with the matching id
    const city =
      attractionsResponse?.data?.find(
        (city: City) => city.id.toString() === id
      ) || null;

    // Get the destination name from the mapping
    const destinationName = destinationMapping[id];

    // Fetch excursions and filter them based on destination
    const excursionResponse = await fetchData("tours?type=excursion");
    const allExcursions = excursionResponse.data as TourPackage[];

    // Filter excursions based on destination
    const filteredExcursions = allExcursions.filter((excursion) => {
      const excursionDestination = excursion.destination.toLowerCase();
      return (
        destinationName &&
        excursionDestination.includes(destinationName.toLowerCase())
      );
    });

    return {
      props: {
        city,
        toursData,
        attractionsData: attractionsData.data,
        excursionData: filteredExcursions,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        city: null,
        toursData: [],
        attractionsData: [],
        excursionData: [],
      },
    };
  }
}
