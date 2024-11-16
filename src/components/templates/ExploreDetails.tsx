import React from "react";
import ReviewCard from "./ReviewCard";
import Egy from "../../../public/assets/egys.jpeg";
type Props = {};

const ExploreDetails = (props: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-start mt-3 lg:mt-4 ">
        Explore our promoted experiences
      </h2>
      <div className="flex justify-center lg:flex-nowrap flex-wrap lg:gap-2 gap-0">
        <ReviewCard
          imageSrc={Egy}
          location="Cairo, Egypt"
          title="Half-day tour, sound & light show, tour of the king"
          rating={4.5}
          reviewsCount={101}
          price={320}
        />
        <ReviewCard
          imageSrc={Egy}
          location="Cairo, Egypt"
          title="Half-day tour, sound & light show, tour of the king"
          rating={4.5}
          reviewsCount={101}
          price={320}
        />
        <ReviewCard
          imageSrc={Egy}
          location="Cairo, Egypt"
          title="Half-day tour, sound & light show, tour of the king"
          rating={4.5}
          reviewsCount={101}
          price={320}
        />
      </div>
    </div>
  );
};

export default ExploreDetails;
