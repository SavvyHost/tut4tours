import React from "react";
import { Radio, Checkbox, Slider, Button } from "@mui/material";
import FilterSection from "./FilterSection";

interface LargeScreenSidebarProps {
  price: [number, number];
  selectedDestination: string;
  selectedStarRating: string;
  selectedAmenities: string[];
  selectedAccommodationType: string;
  handlePriceChange: (event: Event, newValue: number | number[]) => void;
  handleClearFilters: () => void;
  handleApplyFilters: () => void;
  setSelectedDestination: (destination: string) => void;
  setSelectedStarRating: (rating: string) => void;
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedAccommodationType: (type: string) => void;
}

const LargeScreenSidebar: React.FC<LargeScreenSidebarProps> = ({
  price,
  selectedDestination,
  selectedStarRating,
  selectedAmenities,
  selectedAccommodationType,
  handlePriceChange,
  handleClearFilters,
  handleApplyFilters,
  setSelectedDestination,
  setSelectedStarRating,
  setSelectedAmenities,
  setSelectedAccommodationType,
}) => {
  return (
    <div className="p-6 rounded-md shadow-sm">
      {/* Filters Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-segoe">Applied filters</h2>
        <Button
          className="text-red-600 hover:text-red-500 font-segoe"
          onClick={handleClearFilters}
        >
          Clear All
        </Button>
      </div>

      {/* Destination Filter */}
      <FilterSection title="Destinations">
        <div className="space-y-2">
          {["Spain", "Italy", "Greece", "Turkey", "Croatia"].map((country) => (
            <div
              key={country}
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedDestination(country)}
            >
              <Radio
                checked={selectedDestination === country}
                // Prevent div click when clicking on radio
                sx={{
                  color: "#9D6C1E",
                  "&.Mui-checked": {
                    color: "#9D6C1E",
                  },
                }}
              />
              <span className="ml-2 font-segoe">{country}</span>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Price">
        <div className="px-2">
          <Slider
            value={price}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{
              color: "#9D6C1E",
              "& .MuiSlider-thumb": {
                backgroundColor: "#9D6C1E",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#9D6C1E",
              },
            }}
          />
          <div className="flex justify-between mt-2 font-segoe">
            <span>${price[0]}</span>
            <span>${price[1]}</span>
          </div>
        </div>
      </FilterSection>

      {/* Star Rating Filter */}
      <FilterSection title="Star rating">
        <div className="space-y-2">
          {["5 stars", "4 stars", "3 stars", "2 stars", "1 star"].map(
            (rating) => (
              <div
                key={rating}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedStarRating(rating)}
              >
                <Checkbox
                  checked={selectedStarRating === rating}
                  // Prevent div click when clicking on checkbox
                  sx={{
                    color: "#9D6C1E",
                    "&.Mui-checked": {
                      color: "#9D6C1E",
                    },
                  }}
                />
                <span className="ml-2 font-segoe">{rating}</span>
              </div>
            )
          )}
        </div>
      </FilterSection>

      {/* Amenities Filter */}
      <FilterSection title="Amenities">
        <div className="space-y-2">
          {[
            "Restaurant",
            "Hotel bar",
            "Free breakfast",
            "Room service",
            "Fitness center",
          ].map((amenity) => (
            <div
              key={amenity}
              className="flex items-center cursor-pointer"
              onClick={() =>
                setSelectedAmenities((prev) =>
                  prev.includes(amenity)
                    ? prev.filter((item) => item !== amenity)
                    : [...prev, amenity]
                )
              }
            >
              <Checkbox
                checked={selectedAmenities.includes(amenity)}
                // Prevent div click when clicking on checkbox
                sx={{
                  color: "#9D6C1E",
                  "&.Mui-checked": {
                    color: "#9D6C1E",
                  },
                }}
              />
              <span className="ml-2 font-segoe">{amenity}</span>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Accommodation Type Filter */}
      <FilterSection title="Accommodation Type">
        <div className="space-y-2">
          {["Hotel", "Apartment", "Resort", "Villa", "Bed & Breakfast"].map(
            (type) => (
              <div
                key={type}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedAccommodationType(type)}
              >
                <Checkbox
                  checked={selectedAccommodationType === type}
                  // Prevent div click when clicking on checkbox
                  sx={{
                    color: "#9D6C1E",
                    "&.Mui-checked": {
                      color: "#9D6C1E",
                    },
                  }}
                />
                <span className="ml-2 font-segoe">{type}</span>
              </div>
            )
          )}
        </div>
      </FilterSection>

      {/* Apply Filters Button */}
      <div className="mt-4">
        <Button
          className="bg-custom-gradient text-white w-full"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default LargeScreenSidebar;