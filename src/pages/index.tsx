import {
  AdventuresSection,
  AttractionsSection,
  DestinationSection,
  ExcursionsSection,
  HeroSection,
  OffersSection,
  PeaopleSaySection,
  ToursSection,
  WhyUsSection,
} from "@/components/organisms";
import BlogSection from "@/components/organisms/BlogSection";

import fetchData from "@/helper/FetchData";
import { Attraction, TourPackage, ToursData } from "@/types/tour";
import { Destination } from "./blogs";
import ViatorBenefits from "@/components/organisms/OffersSection";
import ExploreEgyptSection from "@/components/molecules/NewHome";
import RelatedBlog from "@/components/molecules/Blogs/RelatedBlog";
import TrustpilotReviewComponent from "@/components/organisms/TripAdvisorSection";

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

interface HomeProps {
  toursData: ToursData; // Tours data for general tours
  excursionData: TourPackage[]; // Rename for excursion tours data
  blogData: {
    data: Blog[]; // blogData will contain a data array
  };
  Destinations: Destination[];
  attractionsData: Attraction[];
}

export default function Home({
  toursData,
  attractionsData,
  excursionData,
  blogData,
  Destinations,
}: HomeProps) {
  // Limit Destinations to a maximum of 8
  const limitedDestinations = Destinations.slice(0, 8);
  const limitedAttractions = attractionsData.slice(0, 8);
  return (
    <>
      <HeroSection />
      <div className="lg:px-16 px-4">
        <ViatorBenefits />
      </div>
      <WhyUsSection />
      {/* <ToursSection toursData={toursData} /> */}
      <div className=" pt-3 bg-[#FAFAFA]">
        <div>
          <div className="text-left lg:px-16 px-4 mt-3 text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer mb-4">
            Top Excursions
          </div>
          <ExcursionsSection toursData={excursionData} />
        </div>
      </div>{" "}
      <div className="lg:px-16 px-4 pt-3 bg-[#FAFAFA]">
        {/* <DestinationSection Destinations={limitedDestinations} /> */}
      </div>{" "}
      {/* <div className="lg:px-16 px-4 pt-3 bg-[#FAFAFA]">
        <AttractionsSection attractions={limitedAttractions} />
      </div>{" "} */}
      {/* <WhyUsSection /> */}
      <div className="lg:px-16 px-4 pt-3 ">{/* <AdventuresSection /> */}</div>
      <ExploreEgyptSection />
      {/* <div className="lg:px-16 px-4 ">
        <PeaopleSaySection />
      </div> */}
      <div className="lg:px-16 px-4 ">
        <div className="text-left my-4 text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer mb-4">
          Trustpilot Review
        </div>
        <div className="">
          <TrustpilotReviewComponent />
        </div>
      </div>
      {/* Add Blog Section */}
      <div className="lg:px-16 px-4 ">
        <BlogSection blogData={blogData} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const toursData: ToursData = await fetchData("tours");
  const excursionData = await fetchData("tours?type=excursion"); // Rename this variable
  const Destinations = await fetchData("cities");
  const attractionsData = await fetchData("places");
  const blogData = await fetchData("blogs");

  return {
    props: {
      toursData: toursData,
      excursionData: excursionData.data as TourPackage[], // Pass the renamed variable
      blogData: blogData,
      Destinations: Destinations.data,
      attractionsData: attractionsData.data,
    },
  };
}
