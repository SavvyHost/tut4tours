// components/PrivacyPolicySection.tsx

import Image from "next/image";
import React from "react";
import PrivacyImage from "../../../public/assets/egys.jpeg";
import fetchData from "@/helper/FetchData";
import MainSectionBg from "@/components/organisms/MainSectionBg";
type PrivacyPolicyItem = {
  title: string;
  content: string;
};

const PrivacyPolicySection: React.FC = ({ data }) => {
  return (
    <>
      <MainSectionBg
        title="Privacy Data"
        backgroundImage={PrivacyImage}
        breadcrumbs={[{ text: "Home", link: "/" }, { text: "Privacy Data" }]}
      />
      <div className="bg-blue-100 m-10 lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 font-segoe ">
        <div className="grid gap-10">
          <div className="mt-4">
            <p
              className=""
              dangerouslySetInnerHTML={{
                __html: data?.data[0]?.value?.privacyData,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicySection;
export async function getServerSideProps() {
  const data = await fetchData("settings?collection=privacy");

  return {
    props: {
      data: data,
    },
  };
}
