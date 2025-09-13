import React from "react";
import SearchForm from "./SearchForm";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center
        px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32
        text-white
        bg-[url('/heroImage.png')]
        bg-no-repeat bg-cover bg-center
        min-h-[80vh] md:min-h-screen
        pt-20 md:pt-24 pb-12 md:pb-20"
    >
      {/* Tagline */}
      <p className="bg-[#49B9FF]/50 px-3 py-1 rounded-full text-sm sm:text-base">
        The Ultimate Hotel Experience
      </p>

      {/* Heading */}
      <h1
        className="font-playfair text-2xl sm:text-3xl md:text-5xl
        md:text-[56px] md:leading-[56px] font-bold md:font-extrabold
        max-w-full sm:max-w-xl mt-4"
      >
        Discover Your Perfect Gateway Destination
      </h1>

      {/* Subheading */}
      <p className="text-xs sm:text-sm md:text-base mt-2 max-w-full sm:max-w-lg md:max-w-xl">
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today.
      </p>

      {/* Search Form Wrapper */}
      <div className="w-full mt-6 md:mt-8">
        {/* Make container responsive */}
        <div className="w-full flex flex-col sm:flex-row gap-3 md:gap-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
