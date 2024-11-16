import Image from "next/image";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { Twitter, Facebook, Instagram } from "lucide-react";
import LOGO from "../../../public/assets/trip-advisor-logo-png-1024x483.png";
import useFetch from "@/hooks/UseFetch";

type Props = {};

const Footer = (props: Props) => {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["settings?collection=contact"],
    endpoint: `settings?collection=contact`,
  });

  return (
    <footer className="bg-gradient-to-r mt-4 from-blue-900 via-blue-700 to-blue-900 py-7 px-8 font-sans tracking-wide relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center text-white lg:justify-center">
          <Link href="/" className="inline-block">
            LOGO Tut4tours
          </Link>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Tut4tours</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: data?.data[0]?.value?.footerDesc,
            }}
            className="mb-6"
          />
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/terms"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                Travel Tips
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                Travel Blog & Tips
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/health-tips"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                Health Tips
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-400 text-base hover:text-white transition-all"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Contact Info
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href={`mailto:${data?.data[0]?.value?.email}`}
                className="text-blue-300 hover:text-white text-sm transition-all flex items-center gap-2"
              >
                <CiMail size={20} />
                {data?.data[0]?.value?.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${data?.data[0]?.value?.phone}`}
                className="text-blue-300 hover:text-white text-sm transition-all flex items-center gap-2"
              >
                <CiPhone size={20} />
                {data?.data[0]?.value?.phone}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-blue-300 hover:text-white text-sm transition-all flex items-center gap-2"
              >
                <LiaMapMarkerAltSolid size={20} />
                {data?.data[0]?.value?.address}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${data?.data[0]?.value?.whatsApp}`}
                className="text-blue-300 hover:text-white text-sm transition-all flex items-center gap-2"
              >
                <PiWhatsappLogoLight size={20} />
                {data?.data[0]?.value?.whatsApp}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-blue-100 text-sm">
        <p
          dangerouslySetInnerHTML={{ __html: data?.data[0]?.value?.footerDesc }}
          className="mb-6"
        />
      </div>
      <hr className="my-8 border-blue-600" />
      <div className="flex sm:justify-center flex-wrap gap-6">
        <div className="flex space-x-5">
          <a
            href="javascript:void(0)"
            className="text-white hover:text-white text-sm transition-all"
          >
            <Facebook className="w-5 h-5 hover:text-blue-300 transition-colors" />
          </a>
          <div className="">
            <Image alt="" src={LOGO} className="w-10 h-8 " />
          </div>
        </div>
        <p className="text-white text-sm">© Tut4tours . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
