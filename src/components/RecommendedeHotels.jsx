import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";

import { useNavigate } from "react-router-dom";

import TitleSubtitle from "./TitleSubtitle";
import { useAppContext } from "../Context/useAppContext";

const RecommendedHotels = () => {
  const { rooms, searchedCities } = useAppContext();

  const [recommendedHotel, setRecommendedHotel] = useState([]);

  const FilterHotels = () => {
    const filteredHotels = rooms.filter((room) => {
      if (!room?.hotel?.city) return false; // guard against missing data
      return (
        Array.isArray(searchedCities) &&
        searchedCities.includes(room.hotel.city)
      );
    });
    setRecommendedHotel(filteredHotels);
  };
  // call the function
  useEffect(() => {
    FilterHotels();
  }, [rooms, searchedCities]);

  return (
    recommendedHotel.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <TitleSubtitle
          title="Recommended Hotels"
          subTitle="Discover our handpicked selection of exceptional properties  around the world 
        ,offering unparelled luxury and unforgettable experiences"
        />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {recommendedHotel.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default RecommendedHotels;
