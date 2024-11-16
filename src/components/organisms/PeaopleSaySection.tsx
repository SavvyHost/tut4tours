import React from "react";
import PeopleSay from "../molecules/PeaopleSay/PeaopleSay";

type Props = {};

const PeopleSaySection = (props: Props) => {
  return (
    <>
      <div className="text-left text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer mb-4 mt-4">
        What People Say
      </div>
      <div>
        <PeopleSay />
      </div>
    </>
  );
};

export default PeopleSaySection;
