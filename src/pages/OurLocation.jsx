// OurLocation.jsx
import React, { useState } from "react";

const OurLocation = () => {
  const [activeTab, setActiveTab] = useState("map");

  const hotelInfo = {
    name: "Grand Luxe Hotel & Resort",
    address: "123 Luxury Avenue, Beverly Hills, CA 90210",
    phone: "+1 (555) 123-4567",
    email: "info@grandluxehotel.com",
    coordinates: { lat: 34.0736, lng: -118.4004 },
  };

  const transportationOptions = [
    {
      id: 1,
      type: "Airport Transfer",
      description: "Complimentary shuttle service from LAX airport",
      schedule: "Every 30 minutes from 6:00 AM to 11:00 PM",
      icon: "✈️",
    },
    {
      id: 2,
      type: "Public Transit",
      description: "Bus stop located just 200m from the hotel entrance",
      schedule: "Lines 12, 45, and 720 stop nearby",
      icon: "🚌",
    },
    {
      id: 3,
      type: "Taxi & Rideshare",
      description: "Taxi stand at hotel entrance, Uber/Lyft pickup zone",
      schedule: "Available 24/7",
      icon: "🚖",
    },
    {
      id: 4,
      type: "Car Rental",
      description: "On-site car rental service through our concierge",
      schedule: "7:00 AM to 9:00 PM daily",
      icon: "🚗",
    },
  ];

  const nearbyAttractions = [
    {
      id: 1,
      name: "Rodeo Drive",
      description: "World-famous shopping destination",
      distance: "0.8 miles",
      image:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Shopping",
    },
    {
      id: 2,
      name: "Getty Center",
      description: "Art museum with stunning architecture and gardens",
      distance: "4.2 miles",
      image:
        "https://images.unsplash.com/photo-1586822339136-979ac587f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Museum",
    },
    {
      id: 3,
      name: "Santa Monica Pier",
      description: "Iconic pier with amusement park and ocean views",
      distance: "9.5 miles",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Entertainment",
    },
    {
      id: 4,
      name: "Griffith Observatory",
      description: "Observatory with panoramic views of Los Angeles",
      distance: "11.3 miles",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Landmark",
    },
    {
      id: 5,
      name: "Hollywood Walk of Fame",
      description: "Famous sidewalk with celebrity stars",
      distance: "5.7 miles",
      image:
        "https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Entertainment",
    },
    {
      id: 6,
      name: "The Grove",
      description: "Popular shopping and entertainment complex",
      distance: "3.1 miles",
      image:
        "https://images.unsplash.com/photo-1592415493-45a9ff0f9210?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      category: "Shopping",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Location</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our prime location in the heart of Beverly Hills
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Hotel Information */}
          <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {hotelInfo.name}
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Address</h3>
                  <p className="text-gray-600">{hotelInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <p className="text-gray-600">{hotelInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-600">{hotelInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Directions
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Map Tabs */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-3 font-medium ${
                    activeTab === "map"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("map")}
                >
                  Map View
                </button>
                <button
                  className={`flex-1 py-3 font-medium ${
                    activeTab === "street"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("street")}
                >
                  Street View
                </button>
                <button
                  className={`flex-1 py-3 font-medium ${
                    activeTab === "transport"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("transport")}
                >
                  Transportation
                </button>
              </div>

              {/* Map Content */}
              <div className="h-96 relative">
                {activeTab === "map" && (
                  <div className="h-full w-full bg-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-blue-600 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <p className="text-gray-600">
                        Interactive map would be displayed here
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Lat: {hotelInfo.coordinates.lat}, Lng:{" "}
                        {hotelInfo.coordinates.lng}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "street" && (
                  <div className="h-full w-full bg-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-blue-600 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <p className="text-gray-600">
                        Street view would be displayed here
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "transport" && (
                  <div className="h-full p-6 overflow-y-auto">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Transportation Options
                    </h3>
                    <div className="space-y-4">
                      {transportationOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-start p-4 bg-gray-50 rounded-lg"
                        >
                          <span className="text-2xl mr-4">{option.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {option.type}
                            </h4>
                            <p className="text-gray-600">
                              {option.description}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {option.schedule}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nearby Attractions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the best of Beverly Hills and Los Angeles right from our
              doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {attraction.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {attraction.category}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                      More info
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Our Prime Location
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your stay at our conveniently located hotel and explore the
            best of Beverly Hills
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Book Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Contact Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLocation;
