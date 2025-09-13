import React from "react";
import TitleSubtitle from "./TitleSubtitle";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-slate-50 py-10">
      <div className="flex flex-col w-full items-center justify-between md:flex-row ">
        <TitleSubtitle
          title="Exclusive Offers"
          subtitle="The Advantage of our Limitted offers and special pacages
         to Enhance your stay and create unforgettable memories"
          align="left"
        />

        <button className=" group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 
             md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center "
            style={{ background: `url(${item.image})` }}
          >
            <p className="absolute text-sm bg-white px-3 py-1 top-4 left-4 text-gray-800 font-medium rounded-full">
              {item.priceOff} % OFF
            </p>
            <div>
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs  text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt="arrowicon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
