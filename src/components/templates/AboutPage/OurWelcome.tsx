import Image from "next/image";
import React from "react";

type Props = {};

const OurWelcome = (props: Props) => {
  return (
    <div className="font-sans bg-blue-100 lg:px-16 p-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-full max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">
            Welcome to Our Store
          </h2>
          <p className="mb-4 text-sm text-gray-500">
            Your Gateway to See All Egypt By Our Eyes
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Since we believed in connecting and helping our curious travelers to
            explore, know, and connect with other cultures.
          </p>
          <p className="mb-4 text-sm text-gray-500">
            We connect curious travelers who want to discover Egypt, enjoy
            mother nature, and create friendships with local people who are
            passionate about designing tailor-made trips and showing travelers
            around the hidden gems of our homeland, creating unforgettable
            memories and moments.
          </p>
          <p className="mb-4 text-sm text-gray-500">
            We are online now, responding to drastic changes in the tourism
            market and believing in connection.
          </p>
          <p className="text-sm text-gray-500">
            We at Egypt Travel Lite Tours believe in innovation, growth, and
            ensuring the delivery of a safe, excellent, and flexible experience
            to our travelers throughout the booking process, journey, and
            beyond.
          </p>
        </div>
        <div>
          <Image
            src="https://readymadeui.com/management-img.webp"
            alt="Placeholder Image"
            className="rounded-lg object-contain w-full h-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWelcome;
