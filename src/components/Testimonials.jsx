import React from "react";

import TitleSubtitle from "./TitleSubtitle";
import Starrating from "./Startrating";
import { testimonials } from "../assets/assets";
import TestimonialSlider from "./TestimonialsSlider.jsx";

const Testimonials = () => {
  return (
    <div
      className="flex flex-col items-center px-6 md:px-16 
     lg:px-24 bg-slate-50 pt-20 pb-30"
    >
      <TitleSubtitle
        title="What our Guest Say"
        subtitle="Discover why discreening travellers consistantly choose QuickStay  for their 
        exclusive  and luxurious  accomodation around the world"
      />
      <TestimonialSlider />
      {/* <div className="flex flex-wrap items-center justify-center gap-4 mt-20">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow ">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12  rounded-full "
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className=" font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <Starrating />
            </div>
            <p className="text-gray-500 max-w-90 mt-4">{testimonial.review}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonials;
