import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Next Adventure Awaits</h2>
        <p className="text-lg mb-6">
          Discover amazing destinations and plan your perfect trip with ease.
        </p>
        <Link
          to="/plan"
          className="inline-block bg-blue-500 py-3 px-8 text-xl font-semibold text-white rounded-lg shadow-md hover:bg-blue-400 transform transition duration-300 hover:scale-105"
        >
          Start Exploring
        </Link>
      </section>

      {/* Featured Destinations Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Trending Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
              alt="Paris"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Paris</h3>
              <p className="text-lg mt-2">Cost: ₹80,000</p>
              <Link
                to="/plan"
                className="text-blue-400 mt-4 inline-block hover:underline"
              >
                Explore Now
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg"
              alt="New York"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">New York</h3>
              <p className="text-lg mt-2">Cost: ₹1,20,000</p>
              <Link
                to="/plan"
                className="text-blue-400 mt-4 inline-block hover:underline"
              >
                Explore Now
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/10/caption.jpg?w=1400&h=1400&s=1&cx=1005&cy=690&chk=v1_2ed86f729380ea073850"
              alt="Tokyo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Tokyo</h3>
              <p className="text-lg mt-2">Cost: ₹70,000</p>
              <Link
                to="/plan"
                className="text-blue-400 mt-4 inline-block hover:underline"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="bg-gray-800 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More, Spend Less</h2>
          <p className="text-lg mb-6">
            Your next adventure is just a click away! Find amazing deals and
            travel experiences that suit your budget and style.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 py-3 px-8 text-xl font-semibold text-white rounded-lg shadow-lg hover:bg-blue-500 transform transition duration-300 hover:scale-105"
          >
            Discover More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
