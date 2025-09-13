// Hotel.jsx
import React, { useState } from "react";

const HotelPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const hotel = {
    name: "Grand Luxe Resort & Spa",
    location: "Beverly Hills, California",
    rating: 4.8,
    reviewCount: 427,
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Experience unparalleled luxury at our 5-star resort nestled in the heart of Beverly Hills. With stunning views, world-class amenities, and exceptional service, we provide an unforgettable stay for discerning travelers.",
    amenities: [
      { name: "Swimming Pool", icon: "🏊" },
      { name: "Spa & Wellness", icon: "💆" },
      { name: "Free WiFi", icon: "📶" },
      { name: "Restaurant", icon: "🍽️" },
      { name: "Fitness Center", icon: "💪" },
      { name: "Room Service", icon: "🔔" },
      { name: "Parking", icon: "🚗" },
      { name: "Business Center", icon: "💼" },
      { name: "Concierge", icon: "🎫" },
      { name: "Beach Access", icon: "🏖️" },
    ],
    rooms: [
      {
        id: 1,
        name: "Deluxe King Room",
        description:
          "Spacious room with a king-sized bed, city view, and luxurious bathroom",
        price: 299,
        size: "45 m²",
        capacity: 2,
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "King Bed",
          "City View",
          "Free WiFi",
          "Air Conditioning",
          "Smart TV",
        ],
      },
      {
        id: 2,
        name: "Premium Suite",
        description:
          "Luxurious suite with separate living area, balcony, and premium amenities",
        price: 459,
        size: "75 m²",
        capacity: 3,
        image:
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "Separate Living Area",
          "Balcony",
          "Premium Amenities",
          "Free WiFi",
          "Coffee Maker",
        ],
      },
      {
        id: 3,
        name: "Ocean View Room",
        description:
          "Beautiful room with stunning ocean views and direct beach access",
        price: 399,
        size: "50 m²",
        capacity: 2,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "Ocean View",
          "Beach Access",
          "King Bed",
          "Free WiFi",
          "Mini Bar",
        ],
      },
      {
        id: 4,
        name: "Presidential Suite",
        description:
          "The ultimate luxury experience with panoramic views and exclusive services",
        price: 899,
        size: "120 m²",
        capacity: 4,
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "Panoramic Views",
          "Private Butler",
          "Jacuzzi",
          "Dining Area",
          "Premium Bar",
        ],
      },
      {
        id: 5,
        name: "Ocean View Room",
        description:
          "Beautiful room with stunning ocean views and direct beach access",
        price: 399,
        size: "50 m²",
        capacity: 2,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "Ocean View",
          "Beach Access",
          "King Bed",
          "Free WiFi",
          "Mini Bar",
        ],
      },
      {
        id: 6,
        name: "Presidential Suite",
        description:
          "The ultimate luxury experience with panoramic views and exclusive services",
        price: 899,
        size: "120 m²",
        capacity: 4,
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        features: [
          "Panoramic Views",
          "Private Butler",
          "Jacuzzi",
          "Dining Area",
          "Premium Bar",
        ],
      },
    ],
    policies: [
      { title: "Check-in", description: "3:00 PM - 12:00 AM" },
      { title: "Check-out", description: "12:00 PM" },
      {
        title: "Cancellation",
        description: "Free cancellation up to 48 hours before check-in",
      },
      { title: "Children", description: "Children of all ages are welcome" },
      { title: "Pets", description: "Pets are not allowed" },
      { title: "Smoking", description: "Non-smoking rooms available" },
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2023-05-15",
        comment:
          "Absolutely stunning hotel with exceptional service. The spa was incredible and our room had an amazing view of the city.",
        avatar: "SJ",
      },
      {
        id: 2,
        name: "Michael Chen",
        rating: 4,
        date: "2023-04-22",
        comment:
          "Great location and beautiful property. The staff was very helpful and the rooms were spacious and clean.",
        avatar: "MC",
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        rating: 5,
        date: "2023-03-10",
        comment:
          "We had our wedding here and it was perfect! The event team made everything seamless and our guests loved the accommodations.",
        avatar: "ER",
      },
      {
        id: 4,
        name: "Sarah Johnson",
        rating: 5,
        date: "2023-05-15",
        comment:
          "Absolutely stunning hotel with exceptional service. The spa was incredible and our room had an amazing view of the city.",
        avatar: "SJ",
      },
      {
        id: 5,
        name: "Michael Chen",
        rating: 4,
        date: "2023-04-22",
        comment:
          "Great location and beautiful property. The staff was very helpful and the rooms were spacious and clean.",
        avatar: "MC",
      },
      {
        id: 6,
        name: "Emma Rodriguez",
        rating: 5,
        date: "2023-03-10",
        comment:
          "We had our wedding here and it was perfect! The event team made everything seamless and our guests loved the accommodations.",
        avatar: "ER",
      },
    ],
  };

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const totalPrice = selectedRoom ? selectedRoom.price * calculateNights() : 0;

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-96 md:h-[500px]">
        <div className="grid grid-cols-3 grid-rows-2 h-full gap-2">
          <div className="col-span-2 row-span-2">
            <img
              src={hotel.images[0]}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={hotel.images[1]}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 relative">
            <img
              src={hotel.images[2]}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-tr-lg"
            />
            <button className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-lg text-sm font-medium">
              View All Photos
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Hotel Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <span className="ml-2 text-gray-700">{hotel.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">
                  {hotel.reviewCount} reviews
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{hotel.location}</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  className={`py-1 font-medium ${
                    activeTab === "overview"
                      ? "text-blue-600 border-b-2 py-0.4"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`py-4 font-medium ${
                    activeTab === "rooms"
                      ? "text-blue-600 border-b-2 py-1"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("rooms")}
                >
                  Rooms & Suites
                </button>
                <button
                  className={`py-4 font-medium ${
                    activeTab === "amenities"
                      ? "text-blue-600 border-b-2 py-1"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("amenities")}
                >
                  Amenities
                </button>
                <button
                  className={`py-4 font-medium ${
                    activeTab === "reviews"
                      ? "text-blue-600 border-b-2 py-1"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
                <button
                  className={`py-4 font-medium ${
                    activeTab === "policies"
                      ? "text-blue-600 border-b-2 py-1 "
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("policies")}
                >
                  Policies
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div>
                <p className="text-gray-600 mb-6">{hotel.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  {hotel.amenities.slice(0, 5).map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-2xl mr-2">{amenity.icon}</span>
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
                  Show all amenities
                </button>
              </div>
            )}

            {activeTab === "rooms" && (
              <div className="space-y-6">
                {hotel.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="md:w-1/3">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {room.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{room.description}</p>
                      <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-4">{room.size}</span>
                        <span className="text-gray-700">
                          Sleeps {room.capacity}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-gray-800">
                            ${room.price}
                          </span>
                          <span className="text-gray-600"> / night</span>
                        </div>
                        <button
                          onClick={() => handleBookNow(room)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "amenities" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hotel Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-2xl mr-4">{amenity.icon}</span>
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-6 text-center">
                    <span className="text-5xl font-bold text-gray-800">
                      {hotel.rating}
                    </span>
                    <div className="flex justify-center mt-1">
                      <span className="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p className="text-gray-600 mt-1">
                      {hotel.reviewCount} reviews
                    </p>
                  </div>
                  <div className="flex-1">
                    {/* Rating bars would go here */}
                  </div>
                </div>
                <div className="space-y-6">
                  {hotel.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-3">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {review.name}
                          </h4>
                          <div className="flex items-center">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="text-gray-500 text-sm ml-2">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "policies" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hotel Policies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hotel.policies.map((policy, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {policy.title}
                      </h4>
                      <p className="text-gray-600">{policy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:w-1/3">
            <div className="sticky top-4 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Book Your Stay
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">
                      ${hotel.price} x {calculateNights()} nights
                    </span>
                    <span className="text-gray-800">
                      ${hotel.price * calculateNights()}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Taxes & fees</span>
                    <span className="text-gray-800">
                      ${(hotel.price * calculateNights() * 0.12).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>
                      ${(hotel.price * calculateNights() * 1.12).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mt-4"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Complete Your Booking
            </h3>
            {selectedRoom && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">
                  {selectedRoom.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {calculateNights()} nights • {guests} guests
                </p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="border border-gray-300 text-gray-700 font-medium py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelPage;
