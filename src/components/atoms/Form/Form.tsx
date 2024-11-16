import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Autocomplete, TextField, Modal, Button } from "@mui/material";
import DatePickerInput from "../SearchExcursions/DatePickerInput";
import dayjs from "dayjs";

const destinations = [
  { label: "New York", id: 1 },
  { label: "Paris", id: 2 },
  { label: "Tokyo", id: 3 },
  { label: "London", id: 4 },
  { label: "Sydney", id: 5 },
];

export default function SearchForm() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [location, setLocation] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log(
      "Searching for:",
      location,
      "on",
      selectedDate?.format("MM/DD/YYYY")
    );
    toggleForm(); // Close the modal after searching
  };
  const handleSearchDesktop = () => {
    // Handle search logic here
    console.log(
      "Searching for:",
      location,
      "on",
      selectedDate?.format("MM/DD/YYYY")
    );
  };

  return (
    <>
      <div className="lg:hidden">
        <div
          className="bg-white rounded-full shadow-lg p-4 flex items-center cursor-pointer"
          onClick={toggleForm}
        >
          <FiSearch className="text-gray-500 mr-2" />
          <span className="text-gray-500">Search for a place or activity</span>
        </div>

        <Modal
          open={isFormOpen}
          onClose={toggleForm}
          aria-labelledby="search-modal-title"
          aria-describedby="search-modal-description"
        >
          <div className="fixed inset-0 h-[325px] bg-white z-50 overflow-y-auto px-2">
            <div className="container mx-auto p-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Search</h2>
                <button onClick={toggleForm} className="text-gray-500">
                  <FiX size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="mobile-destination"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Where to?
                  </label>
                  <Autocomplete
                    id="mobile-destination"
                    options={destinations}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, newValue) => {
                      setLocation(newValue?.label || "");
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Search for a place or activity"
                        fullWidth
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    When?
                  </label>
                  <DatePickerInput
                    selectedDate={selectedDate}
                    onDateChange={handleDateChange}
                    width="100%"
                    height="56px"
                    labelProps={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.6)",
                      transform: "translate(14px, 16px) scale(1)",
                    }}
                  />
                </div>
                <Button
                  className="bg-blue-900 text-white hover:bg-blue-300 hover:text-black"
                  fullWidth
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div className="hidden lg:block mt-14">
        <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-3xl mx-auto">
          <div className="flex flex-1 items-center p-4">
            <Autocomplete
              id="destination"
              options={destinations}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => setLocation(newValue?.label || "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Search for a place or activity"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    className: "bg-transparent text-gray-600",
                  }}
                />
              )}
              className="w-full"
            />
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="flex flex-1 items-center p-4">
            <DatePickerInput
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              width="100%"
              height="40px"
              labelProps={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.6)",
                transform: "translate(14px, 12px) scale(1)",
              }}
            />
          </div>
          <button
            onClick={handleSearchDesktop}
            className="bg-blue-500 hover:bg-blue-600 p-4 flex items-center justify-center"
          >
            <FiSearch className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}
