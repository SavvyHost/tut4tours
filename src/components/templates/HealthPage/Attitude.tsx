import Image from "next/image";
import React from "react";
import Tip from "../../../../public/assets/tip.webp";
type Props = {};

const Attitude = (props: Props) => {
  return (
    <div className="bg-[#93D5D5] lg:m-10 m-2 lg:p-24 p-3 font-[sans-serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-1 md:!leading-[55px]">
            Attitude in traveling
          </h2>
          <p className="text-base lg:text-lg text-black">
            Keeping it safe while traveling is fundamental for a good
            experience. Some measurements are a must while planning to travel or
            while traveling. Here we want to make sure that our customers have
            the best experience possible while enjoying our tours options, so we
            highly recommend some necessary safety procedures
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black mt-3 mb-1 md:!leading-[55px]">
            Travel Insurance
          </h2>
          <p className="text-base lg:text-lg text-black">
            Travel insurance is a great safety procedure while traveling
            overseas. Hospital bills can really add up and having access to
            insurance if an accident might occur it’s a great way to travel with
            some peace of mind. Travel insurance can also help with flight
            cancellations and lost or stolen items.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={Tip}
            alt="Premium Benefits"
            className="w-full mx-auto"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Attitude;
