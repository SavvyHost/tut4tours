import React from "react";
import Excursions from "../molecules/Excursions/Excursions";
import ExcursionsHome from "./ExcursionsHome";

type Props = {
  toursData: any; // Adjust this type according to your actual data structure
};

const ExcursionsSection: React.FC<Props> = ({ toursData }) => {
  return (
    <div className="">
      <div className="lg:px-16 px-4">
        <ExcursionsHome toursData={toursData} />{" "}
      </div>
    </div>
  );
};

export default ExcursionsSection;
