// OurPortFolio.jsx
import React from "react";

const OurPortFolio = () => {
  const services = [
    {
      id: 1,
      title: "Luxury Accommodations",
      description:
        "Experience unparalleled comfort in our premium rooms and suites with stunning views and premium amenities.",
      icon: "🏨",
      features: [
        "King-size beds",
        "Premium linens",
        "Smart room controls",
        "24/7 room service",
      ],
    },
    {
      id: 2,
      title: "Fine Dining",
      description:
        "Savor exquisite culinary experiences at our award-winning restaurants with world-class chefs.",
      icon: "🍽️",
      features: [
        "Multiple cuisine options",
        "Wine pairing",
        "Private dining",
        "Dietary accommodations",
      ],
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description:
        "Rejuvenate your mind and body with our holistic spa treatments and state-of-the-art fitness center.",
      icon: "💆",
      features: [
        "Massage therapies",
        "Sauna & steam room",
        "Yoga sessions",
        "Pool access",
      ],
    },
    {
      id: 4,
      title: "Event Spaces",
      description:
        "Host memorable events in our versatile venues with professional planning services.",
      icon: "🎉",
      features: [
        "Wedding venues",
        "Conference rooms",
        "Custom catering",
        "AV equipment",
      ],
    },
    {
      id: 5,
      title: "Concierge Services",
      description:
        "Our expert concierge team is ready to arrange unique experiences and handle all your requests.",
      icon: "🎫",
      features: [
        "Tour arrangements",
        "Transportation",
        "Ticket booking",
        "Local recommendations",
      ],
    },
    {
      id: 6,
      title: "Business Center",
      description:
        "Stay productive with our fully equipped business center and meeting facilities.",
      icon: "💼",
      features: [
        "High-speed internet",
        "Printing services",
        "Private workstations",
        "Video conferencing",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment:
        "The spa services were absolutely incredible! Best massage I've ever had.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      comment:
        "Our wedding was perfect thanks to the exceptional event planning team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      comment:
        "The concierge recommended the most amazing local restaurants. Wonderful experience!",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our PortFolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the exceptional amenities and services that make your stay
            unforgettable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From luxurious accommodations to exceptional dining experiences, we
            provide everything you need for a perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
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
              Hear what our guests have to say about our services and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay now and enjoy our premium amenities and exceptional
            service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Book Now
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPortFolio;
