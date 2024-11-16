import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainSectionBgProps {
  title?: string;
  breadcrumbs?: {
    text: string;
    link?: string;
  }[];
  backgroundImage?: StaticImageData;
  minHeight?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const MainSectionBg: React.FC<MainSectionBgProps> = ({
  title = "About Us",
  breadcrumbs = [{ text: "Home", link: "/" }, { text: "About Us" }],
  backgroundImage = "/beach-background.jpg",
  minHeight = "300px",
  overlayColor = "rgba(0, 0, 0, 1)",
  overlayOpacity = 0.5,
}) => {
  return (
    <div
      className="relative w-full overflow-hidden mt-16"
      style={{ minHeight }}
    >
      {/* Next.js Image Component */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background Image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-white">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2">›</span>}
              {item.link ? (
                <Link
                  href={item.link}
                  className="hover:text-gray-200 transition-colors"
                >
                  {item.text}
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainSectionBg;
