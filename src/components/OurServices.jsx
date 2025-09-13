// OurServices.jsx
import React, { useState } from "react";

const OurServices = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const serviceCategories = [
    { id: "all", name: "All Services" },
    { id: "accommodation", name: "Accommodations" },
    { id: "dining", name: "Dining" },
    { id: "wellness", name: "Wellness" },
    { id: "events", name: "Events" },
    { id: "business", name: "Business" },
  ];

  const services = [
    {
      id: 1,
      title: "Luxury Accommodations",
      description:
        "Experience unparalleled comfort in our premium rooms and suites with stunning views and premium amenities.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "accommodation",
      features: [
        "King-size beds",
        "Premium linens",
        "Smart room controls",
        "24/7 room service",
      ],
      price: "From $199/night",
    },
    {
      id: 2,
      title: "Fine Dining Experience",
      description:
        "Savor exquisite culinary experiences at our award-winning restaurants with world-class chefs.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "dining",
      features: [
        "Multiple cuisine options",
        "Wine pairing",
        "Private dining",
        "Dietary accommodations",
      ],
      price: "Reservations recommended",
    },
    {
      id: 3,
      title: "Spa & Wellness Center",
      description:
        "Rejuvenate your mind and body with our holistic spa treatments and state-of-the-art fitness center.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "wellness",
      features: [
        "Massage therapies",
        "Sauna & steam room",
        "Yoga sessions",
        "Pool access",
      ],
      price: "Packages available",
    },
    {
      id: 4,
      title: "Event Spaces",
      description:
        "Host memorable events in our versatile venues with professional planning services.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "events",
      features: [
        "Wedding venues",
        "Conference rooms",
        "Custom catering",
        "AV equipment",
      ],
      price: "Custom quotes available",
    },
    {
      id: 5,
      title: "Concierge Services",
      description:
        "Our expert concierge team is ready to arrange unique experiences and handle all your requests.",
      image:
        "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      category: "services",
      features: [
        "Tour arrangements",
        "Transportation",
        "Ticket booking",
        "Local recommendations",
      ],
      price: "Complimentary for guests",
    },
    {
      id: 6,
      title: "Business Center",
      description:
        "Stay productive with our fully equipped business center and meeting facilities.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "business",
      features: [
        "High-speed internet",
        "Printing services",
        "Private workstations",
        "Video conferencing",
      ],
      price: "Hourly and daily rates",
    },
    {
      id: 7,
      title: "Pool & Recreation",
      description:
        "Enjoy our stunning infinity pool and recreational activities for all ages.",
      image:
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "wellness",
      features: [
        "Infinity pool",
        "Poolside service",
        "Children's area",
        "Recreational activities",
      ],
      price: "Complimentary for guests",
    },
    {
      id: 8,
      title: "Airport Transfers",
      description:
        "Enjoy seamless transportation with our luxury airport transfer service.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "services",
      features: [
        "Luxury vehicles",
        "Meet & greet",
        "Flight tracking",
        "24/7 availability",
      ],
      price: "From $49 per transfer",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the exceptional amenities and services that make your stay
            unforgettable
          </p>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From luxurious accommodations to exceptional dining experiences, we
            provide everything you need for a perfect stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all ${
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                  <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-200">Rooms Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-blue-200">Concierge Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-blue-200">Guest Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-blue-200">Restaurants & Bars</p>
            </div>
          </div>
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
              Hear what our guests have to say about our services and amenities
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
                "The spa services were absolutely incredible! Best massage I've
                ever had."
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
                "Our wedding was perfect thanks to the exceptional event
                planning team."
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
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-xl text-yellow-400">
                        ★
                      </span>
                    ))}
                    <span className="text-xl text-gray-300">★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The concierge recommended the most amazing local restaurants.
                Wonderful experience!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your stay now and enjoy our premium amenities and exceptional
            service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Book Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
