import Laptop from "@/components/templates/laptop/Laptop";
import Mobile from "@/components/templates/mobile/Mobile";
import fetchData from "@/helper/FetchData";
import { ToursData } from "@/types/tour";

interface HomeProps {
  toursData: ToursData;
}

export default function Home({ toursData }: HomeProps) {
  console.log("🚀 ~ Home ~ toursData:", toursData)
  return (
    <div className=" lg:p-3 bg-[#FAFAFA]">
      {/* Mobile view */}
      <div className="block lg:hidden">
        <Mobile toursData={toursData} />
      </div>

      {/* Laptop view */}
      <div className="hidden lg:block">
        <Laptop toursData={toursData} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data: ToursData = await fetchData("tours?type=tour_package");

  return {
    props: {
      toursData: data,
    },
  };
}
