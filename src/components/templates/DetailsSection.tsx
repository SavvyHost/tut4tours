import React from "react";
import Included from "./Included";
import TourItinerary from "./Itinerary";
import PricePlans from "./PriceSection";
import UserProfilePage from "./Travelers";
import FAQ from "./Freq";
import Reviews from "./Reviews";
import RandomButtons from "./RandomButtons";
import { TourDetail } from "@/types/tour";
import TripInfo from "./Trip";
import ExploreDetails from "./ExploreDetails";
import AdditionalInfo from "./AddationalInfo";

interface MyPagedeailsProps {
  DetailTour: TourDetail;
}
const DetailsSection: React.FC<MyPagedeailsProps> = ({ DetailTour }) => {
  return (
    <div>
      {" "}
      <div className="lg:px-28 pt-5">
        {/* <ExploreDetails /> */}
        <TripInfo DetailTour={DetailTour} />
        <Included DetailTour={DetailTour} />
        <hr className="mt-2" />
        <TourItinerary DetailTour={DetailTour} />
        <PricePlans DetailTour={{ tour_prices: DetailTour.tour_prices }} />
        {/* <UserProfilePage /> */}
        {/* <AdditionalInfo /> */}
        <hr className="mt-2" />
        <FAQ DetailTour={DetailTour} />
        <hr className="mt-2" />
        {/* <Reviews /> */}
        <RandomButtons DetailTour={{ tags: DetailTour.tags }} />
      </div>
    </div>
  );
};

export default DetailsSection;
