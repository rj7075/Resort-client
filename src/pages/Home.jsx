import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonials from "../components/Testimonials";
import NewsLeter from "../components/Newsletter";
import TestimonialSlider from "../components/TestimonialsSlider";
import RecommendedHotels from "../components/RecommendedeHotels";

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedHotels />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLeter />
    </>
  );
};

export default Home;
