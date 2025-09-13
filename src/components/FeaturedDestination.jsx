import React from "react";
import { useNavigate } from "react-router-dom";
import TitleSubtitle from "./TitleSubtitle";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import { useAppContext } from "../Context/useAppContext";

const FeaturedDestination = () => {
  const { navigate, rooms } = useAppContext();
  return (
    <div className="flex flex-col py-20 px-6 md:px-16 lg:px-24 bg-slate-50 items-center">
      <TitleSubtitle
        title="Featured Destination"
        subtitle="Discover our handpicked selection of exceptional properties 
        around the world ,offering unparelled luxury and unforgettable experiences"
        align="center"
        className=" text-2xl flex-wrap items-center flex justify-center"
      />

      <div className="flex flex-wrap mt-6 items-center justify-center gap-6">
        {rooms.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} index={index} room={room} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="flex border border-gray-500 px-3 py-2 hover:bg-amber-950 transition-all hover:text-white rounded-xl text-center items-center mt-6 mb-6 justify-center"
        >
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestination;
