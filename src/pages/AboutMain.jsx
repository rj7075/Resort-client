// About.jsx
import React from "react";

const AboutMain = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "General Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in hospitality management, Sarah ensures our guests receive exceptional service.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael brings international culinary expertise with a focus on locally-sourced ingredients.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Guest Relations Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Emma specializes in creating personalized experiences for our valued guests.",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Head of Housekeeping",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David maintains our impeccable standards of cleanliness and comfort throughout the hotel.",
    },
  ];

  const milestones = [
    {
      year: "1995",
      event: "Grand opening of our first hotel in Beverly Hills",
    },
    { year: "2002", event: "Expanded to include resort properties in Hawaii" },
    { year: "2010", event: "Received AAA Five Diamond Award for excellence" },
    { year: "2015", event: "Launched eco-friendly sustainability initiative" },
    { year: "2020", event: "Implemented advanced health and safety protocols" },
    { year: "2023", event: "Opened our 50th property worldwide" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail of our service",
      icon: "⭐",
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices",
      icon: "🌿",
    },
    {
      title: "Community",
      description: "We support and invest in the local communities we serve",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "We continuously evolve to exceed guest expectations",
      icon: "💡",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b mt-20 from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Grand Luxe Hotels
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              For over 25 years, we've been creating unforgettable experiences
              for travelers around the world
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, Grand Luxe Hotels began as a single boutique
                property in Beverly Hills. Our founder, Robert Williams,
                envisioned a hotel experience that combined luxury
                accommodations with personalized service that made every guest
                feel truly special.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a single property has grown into a collection of
                50 luxury hotels and resorts across the world's most desirable
                destinations. Despite our growth, we've remained committed to
                our original philosophy: exceptional service, attention to
                detail, and creating memorable experiences for every guest.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate while staying true to our roots,
                blending timeless hospitality with modern comforts and
                sustainable practices.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Grand Luxe Hotel Lobby"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center`}
                  >
                    <div className="w-1/2 pr-8 flex justify-end">
                      {index % 2 === 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                          <h3 className="text-xl font-bold text-blue-600 mb-2">
                            {milestone.year}
                          </h3>
                          <p className="text-gray-700">{milestone.event}</p>
                        </div>
                      )}
                    </div>

                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <div className="absolute w-8 h-8 rounded-full bg-blue-500 border-4 border-white"></div>
                    </div>

                    <div className="w-1/2 pl-8">
                      {index % 2 !== 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                          <h3 className="text-xl font-bold text-blue-600 mb-2">
                            {milestone.year}
                          </h3>
                          <p className="text-gray-700">{milestone.event}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Meet Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable practices"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Commitment to Sustainability
              </h2>
              <p className="text-gray-600 mb-4">
                At Grand Luxe Hotels, we believe luxury and sustainability go
                hand in hand. We're committed to minimizing our environmental
                impact through innovative practices and responsible operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">
                    Energy-efficient buildings and operations
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">
                    Comprehensive waste reduction and recycling programs
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">
                    Locally-sourced and organic food options
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">
                    Water conservation initiatives
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">
                    Support for local communities and conservation projects
                  </span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn About Our Initiatives
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Experience the Grand Luxe Difference
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover why travelers have chosen us for over 25 years
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMain;
