import Image from "next/image";
import React from "react";
import Tip from "../../../../public/assets/secondone.webp";
type Props = {};

const Certificates = (props: Props) => {
  return (
    <div className="bg-[#F2E5D2] lg:m-10 m-2 lg:p-24 p-3 font-[sans-serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-x-12">
        <div className="text-center">
          <Image
            src={Tip}
            alt="Premium Benefits"
            className="w-full mx-auto"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl lg:text-2xl font-extrabold text-black mb-1 md:!leading-[55px]">
            Health Certificates and Vaccines
          </h2>
          <p className="text-sm lg:text-base text-black">
            Some countries are considered infested with some life-threatening
            diseases, so check all the required health certificates and vaccine
            information for the country you are traveling to.
          </p>
          <h2 className="text-xl lg:text-2xl font-extrabold text-black mt-3 mb-1 md:!leading-[55px]">
            Emergency Contact
          </h2>
          <p className="text-sm lg:text-base text-black">
            Whenever traveling to a foreign country it’s is highly recommended
            that you notify your hotel and family back home about your emergency
            contact information. Make sure to keep a document with your
            identification with you at all times in case necessary
          </p>
          <h2 className="text-xl lg:text-2xl font-extrabold text-black mt-3 mb-1 md:!leading-[55px]">
            Keep Your Money Safe
          </h2>
          <p className="text-sm lg:text-base text-black">
            Do not carry too much cash on you, only the necessary amount for
            each day, keep some emergency cash in a safe at your hotel. If
            possible, travel with 2 credit cards, make sure to keep the second
            credit card in a safe at your hotel in case of an emergency. Also,
            make sure to notify your bank of your travel plans before your
            departure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
