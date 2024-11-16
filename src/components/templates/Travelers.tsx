import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Back from "../../../public/assets/userbg.jpeg";
import User from "../../../public/assets/infocard.png";
import Image from "next/image";
import { Button } from "@mui/material";

const UserProfileCard = ({
  imageSrc,
  userPhoto,
  username,
  rating,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt="User Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col md:flex-row items-start">
        <div className="flex-shrink-0">
          <Image
            src={userPhoto}
            alt={username}
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-300 mr-4"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{username}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CarouselModal = ({ isOpen, onClose }) => {
  const cards = [
    {
      imageSrc: Back,
      userPhoto: User,
      username: "John Doe",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageSrc: Back,
      userPhoto: User,
      username: "Jane Smith",
      rating: 5,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Profile Carousel"
      className="absolute inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      style={{
        content: {
          borderRadius: "10px",
          border: "none",
          padding: 0,
          inset: "auto",
          maxWidth: "90%",
          maxHeight: "90%",
        },
      }}
    >
      <div className="relative w-full max-w-4xl">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4">
              <UserProfileCard
                imageSrc={card.imageSrc}
                userPhoto={card.userPhoto}
                username={card.username}
                rating={card.rating}
                description={card.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Modal>
  );
};

const UserProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cards = [
    {
      imageSrc: Back,
      userPhoto: User,
      username: "John Doe",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageSrc: Back,
      userPhoto: User,
      username: "Jane Smith",
      rating: 5,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-segoe text-start mt-6 md:mt-9 mb-4 md:mb-6">
        Travelers Photos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <UserProfileCard key={index} {...card} />
        ))}
      </div>
      <Button
        onClick={openModal}
        className="mt-6 flex items-center capitalize px-4 py-2 border border-opacity-60 border-yellow-700 bg-yellow-100 text-[#A16207] font-segoe text-lg rounded-md hover:bg-[#8a4c03] hover:text-white transition-colors duration-300"
      >
        View More Details
      </Button>
      <CarouselModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default UserProfilePage;
