import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWishlist } from "@/contexts/wishlist-context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MapPin, Clock, Luggage } from "lucide-react";
import { TourPackage } from "@/types/tour";

interface ExcursionsProps {
  toursData: TourPackage[];
}

const ExcursionsHome: React.FC<ExcursionsProps> = ({ toursData }) => {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [clickStart, setClickStart] = useState({ x: 0, y: 0 });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only set click start if not clicking the wishlist button
    if (!(e.target as HTMLElement).closest("button")) {
      setClickStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e: React.MouseEvent, tourId: number) => {
    // Only handle navigation if not clicking the wishlist button
    if (!(e.target as HTMLElement).closest("button")) {
      const deltaX = Math.abs(e.clientX - clickStart.x);
      const deltaY = Math.abs(e.clientY - clickStart.y);

      if (deltaX < 5 && deltaY < 5) {
        router.push(`/top-excursions/${tourId}`);
      }
    }
  };

  const handleWishlistClick = (e: React.MouseEvent, tour: TourPackage) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleWishlist({
      id: tour.id,
      title: tour.title,
      location: tour.location,
      price: tour.min_price,
      image: tour.main_image.url,
      rating: tour.rating,
      duration: tour.duration,
      destination: tour.destination,
      ageRange: tour.age_range,
    });
  };

  // Filter tours that are marked as 'is_best_deal'
  const bestDeals = toursData.filter((tour) => tour.is_best_deal === 1);

  return (
    <div className="relative overflow-hidden">
      {bestDeals.length ? (
        <Slider {...settings} ref={sliderRef}>
          {bestDeals.map((tour) => (
            <div key={tour.id} className="px-2">
              <div
                onMouseDown={handleMouseDown}
                onMouseUp={(e) => handleMouseUp(e, tour.id)}
                className="bg-accent-white cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={tour.main_image.url}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary-light text-accent-white">
                      Top Rated
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleWishlistClick(e, tour)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-accent-white/80 hover:bg-accent-white transition-colors duration-200 shadow-md"
                    aria-label={
                      isInWishlist(tour.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    {isInWishlist(tour.id) ? (
                      <FaHeart className="text-red-500 w-5 h-5" />
                    ) : (
                      <FaRegHeart className="text-black w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-sm text-black mb-2">
                    <MapPin className="h-4 w-4 text-black" />
                    <span className="truncate">{tour.destination}</span>
                  </div>

                  <h2 className="font-medium text-base sm:text-lg mb-3 line-clamp-1 group-hover:underline group-hover:text-primary-light transition-colors">
                    {tour.title}
                  </h2>

                  <div className="space-y-3 flex-col justify-between text-sm text-black mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-black" />
                      <span>{tour.duration} Hours</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Luggage className="h-4 w-4 text-black" />
                      <span>Age: {tour.age_range}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm">
                      <span className="line-through text-black">
                        From ${tour.min_price + 20}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-medium text-primary-light">
                        From ${tour.min_price}
                      </span>
                      <span className="text-sm text-black">/ Person</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="mt-10">
          <p className="flex justify-center font-extrabold">
            No Best Deals Available
          </p>
        </div>
      )}
    </div>
  );
};

export default ExcursionsHome;
