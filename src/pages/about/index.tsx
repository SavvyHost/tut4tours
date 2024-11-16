import fetchData from "@/helper/FetchData";
import React from "react";
import AboutUs from "../../../public/assets/egys.jpeg";

import Image from "next/image";
import MainSectionBg from "@/components/organisms/MainSectionBg";
import OurWelcome from "@/components/templates/AboutPage/OurWelcome";
import TravelPerfectionSteps from "@/components/templates/AboutPage/SecondAboutSection";
import PopularTours from "@/components/templates/AboutPage/PopularTours";

const About = ({ data }) => {
  // Extract about content from API data
  const aboutContent = data?.data?.[0]?.value || { en: "", ar: "" };

  return (
    <main>
      {/* Hero Section */}
      <MainSectionBg
        title="About Us"
        backgroundImage={AboutUs}
        breadcrumbs={[{ text: "Home", link: "/" }, { text: "About Us" }]}
      />

      {/* Content Section */}
      <div className="2xl:container 2xl:mx-auto lg:py-0 lg:px-0 md:py-12 md:px-6 py-9 px-4">
        <OurWelcome />
        <TravelPerfectionSteps />
        <PopularTours />
      </div>
    </main>
  );
};

export default About;

export async function getServerSideProps() {
  const data = await fetchData("settings?collection=about");

  return {
    props: {
      data: data,
    },
  };
}
