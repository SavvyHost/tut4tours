import fetchData from "@/helper/FetchData";
import React from "react";
import Health from "../../../public/assets/health.webp";

import Image from "next/image";
import MainSectionBg from "@/components/organisms/MainSectionBg";
import OurWelcome from "@/components/templates/AboutPage/OurWelcome";
import TravelPerfectionSteps from "@/components/templates/AboutPage/SecondAboutSection";
import PopularTours from "@/components/templates/AboutPage/PopularTours";
import Attitude from "@/components/templates/HealthPage/Attitude";
import Certificates from "@/components/templates/HealthPage/Certificates";
import SafetyTipsSection from "@/components/templates/HealthPage/SafetyTipsSection";
import CancellationPolicy from "@/components/templates/HealthPage/Cancelation";

const HealthTips = ({ data }) => {
  // Extract about content from API data
  const aboutContent = data?.data?.[0]?.value || { en: "", ar: "" };

  return (
    <main>
      {/* Hero Section */}
      <MainSectionBg
        title="Health Tips"
        backgroundImage={Health}
        breadcrumbs={[{ text: "Home", link: "/" }, { text: "Health Tips" }]}
      />

      {/* Content Section */}
      <div className="2xl:container  2xl:mx-auto lg:py-0 lg:px-0 md:py-12 md:px-6 py-9 px-4">
        <Attitude />
        <Certificates />
        <SafetyTipsSection />
        <CancellationPolicy />
      </div>
    </main>
  );
};

export default HealthTips;

export async function getServerSideProps() {
  const data = await fetchData("settings?collection=about");

  return {
    props: {
      data: data,
    },
  };
}
