import React, { useState, useEffect } from "react";
import Starrating from "./Startrating";
import { testimonials } from "../assets/assets"; // your testimonials array

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // ✅ Responsive items per slide (1 on mobile, 3 on lg+ screens)
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // ✅ Auto slide every 5s
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - itemsPerSlide ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerSlide : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) {
    return <p className="text-center mt-10">No testimonials available.</p>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20">
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full lg:w-1/3 flex-shrink-0 px-4"
            >
              <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-playfair text-xl">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Starrating />
                </div>
                <p className="text-gray-500 mt-4">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default TestimonialSlider;
