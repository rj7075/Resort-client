// Experience.jsx
import React, { useState } from "react";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Experiences" },
    { id: "dining", name: "Dining" },
    { id: "wellness", name: "Wellness" },
    { id: "adventure", name: "Adventure" },
    { id: "culture", name: "Local Culture" },
    { id: "family", name: "Family Activities" },
  ];

  const experiences = [
    {
      id: 1,
      title: "Sunset Yoga Sessions",
      description:
        "Unwind with our sunset yoga classes overlooking the ocean. Suitable for all levels, these sessions combine physical practice with mindfulness meditation.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "wellness",
      duration: "1.5 hours",
      difficulty: "Beginner",
      price: "$35 per person",
    },
    {
      id: 2,
      title: "Private Beach Dinner",
      description:
        "Experience a romantic gourmet dinner on our private beach. Our chefs will prepare a customized menu featuring local seafood and premium ingredients.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "dining",
      duration: "2-3 hours",
      difficulty: "None",
      price: "From $250 per couple",
    },
    {
      id: 3,
      title: "Guided Snorkeling Adventure",
      description:
        "Explore vibrant coral reefs and marine life with our expert guides. All equipment provided with safety briefing and photographic service included.",
      image:
        "https://images.unsplash.com/photo-1530541930197-08816c521934?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "adventure",
      duration: "3 hours",
      difficulty: "Moderate",
      price: "$75 per person",
    },
    {
      id: 4,
      title: "Local Market Culinary Tour",
      description:
        "Join our executive chef for a tour of local markets, selecting fresh ingredients before returning for a private cooking class.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "culture",
      duration: "4 hours",
      difficulty: "Easy",
      price: "$120 per person",
    },
    {
      id: 5,
      title: "Kids Adventure Club",
      description:
        "Our supervised program offers fun, educational activities for children ages 4-12, including treasure hunts, crafts, and beach games.",
      image:
        "https://images.unsplash.com/photo-1536599018109-73a94d7f40e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "family",
      duration: "Flexible",
      difficulty: "None",
      price: "Complimentary for guests",
    },
    {
      id: 6,
      title: "Luxury Spa Journey",
      description:
        "Indulge in our signature spa experience featuring traditional techniques, premium products, and personalized treatments in a serene environment.",
      image:
        "https://images.unsplash.com/photo-1544164350-6c6cef0e7e37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "wellness",
      duration: "2-4 hours",
      difficulty: "None",
      price: "From $150",
    },
    {
      id: 7,
      title: "Sunset Sailing Cruise",
      description:
        "Set sail on a luxury catamaran for breathtaking sunset views, complimentary drinks, and light appetizers served by our attentive crew.",
      image:
        "https://images.unsplash.com/photo-1508317824422-5fc2a5d8ad81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "adventure",
      duration: "2 hours",
      difficulty: "Easy",
      price: "$95 per person",
    },
    {
      id: 8,
      title: "Wine Tasting Experience",
      description:
        "Sample curated selections from our extensive wine cellar, guided by our sommelier who will pair each wine with artisanal cheeses and small bites.",
      image:
        "https://images.unsplash.com/photo-1558702809-3add2f17e1b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "dining",
      duration: "1.5 hours",
      difficulty: "None",
      price: "$65 per person",
    },
  ];

  const filteredExperiences =
    activeCategory === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unforgettable Experiences
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover curated activities and amenities designed to make your stay
            extraordinary
          </p>
        </div>
      </section>

      {/* Experiences Filter */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Curated Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From adventurous excursions to relaxing retreats, we offer something
            for every type of traveler
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {experience.category.charAt(0).toUpperCase() +
                    experience.category.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {experience.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {experience.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">
                    {experience.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Guest Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their unforgettable
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg mr-4">
                  SJ
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The sunset sailing cruise was the highlight of our trip. The
                crew was exceptional and the views were breathtaking!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg mr-4">
                  MC
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Michael Chen</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The culinary tour and cooking class was an incredible
                experience. We learned so much about local ingredients and
                techniques."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg mr-4">
                  ER
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Emma Rodriguez</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our kids loved the Adventure Club so much they asked to go
                every day! It gave us time to relax while they had fun."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay and experiences now to create memories that will last
            a lifetime
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Book Experiences
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-300">
              Contact Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
