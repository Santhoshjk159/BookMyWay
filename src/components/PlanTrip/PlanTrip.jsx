import React, { useState, useEffect } from "react";
import axios from "axios";

// Array of destinations with their unique cost data
const destinations = [
  { 
    id: 1, 
    name: "Manali, India", 
    query: "manali",
    cost: {
      flight: "₹12,000",
      accommodation: "₹8,000",
      food: "₹3,000",
      localTravel: "₹1,500",
      total: "₹24,500"
    }
  },
  { 
    id: 2, 
    name: "Jaipur, India", 
    query: "jaipur",
    cost: {
      flight: "₹9,000",
      accommodation: "₹6,500",
      food: "₹2,500",
      localTravel: "₹1,000",
      total: "₹19,000"
    }
  },
  { 
    id: 3, 
    name: "Paris, France", 
    query: "paris",
    cost: {
      flight: "₹55,000",
      accommodation: "₹40,000",
      food: "₹15,000",
      localTravel: "₹5,000",
      total: "₹1,15,000"
    }
  },
  { 
    id: 4, 
    name: "Maldives", 
    query: "maldives",
    cost: {
      flight: "₹60,000",
      accommodation: "₹50,000",
      food: "₹10,000",
      localTravel: "₹7,000",
      total: "₹1,27,000"
    }
  },
  { 
    id: 5, 
    name: "New York, USA", 
    query: "new york",
    cost: {
      flight: "₹70,000",
      accommodation: "₹60,000",
      food: "₹20,000",
      localTravel: "₹8,000",
      total: "₹1,58,000"
    }
  },
  { 
    id: 6, 
    name: "Dubai, UAE", 
    query: "dubai",
    cost: {
      flight: "₹25,000",
      accommodation: "₹20,000",
      food: "₹8,000",
      localTravel: "₹3,000",
      total: "₹56,000"
    }
  },
  { 
    id: 7, 
    name: "London, UK", 
    query: "london",
    cost: {
      flight: "₹65,000",
      accommodation: "₹45,000",
      food: "₹18,000",
      localTravel: "₹6,000",
      total: "₹1,34,000"
    }
  },
  { 
    id: 8, 
    name: "Singapore", 
    query: "singapore",
    cost: {
      flight: "₹32,000",
      accommodation: "₹22,000",
      food: "₹10,000",
      localTravel: "₹4,000",
      total: "₹68,000"
    }
  },
  { 
    id: 9, 
    name: "Bali, Indonesia", 
    query: "bali",
    cost: {
      flight: "₹35,000",
      accommodation: "₹18,000",
      food: "₹7,000",
      localTravel: "₹3,000",
      total: "₹63,000"
    }
  },
  { 
    id: 10, 
    name: "Tokyo, Japan", 
    query: "tokyo",
    cost: {
      flight: "₹50,000",
      accommodation: "₹35,000",
      food: "₹12,000",
      localTravel: "₹4,500",
      total: "₹1,01,500"
    }
  },
  { 
    id: 11, 
    name: "Rome, Italy", 
    query: "rome",
    cost: {
      flight: "₹48,000",
      accommodation: "₹38,000",
      food: "₹13,000",
      localTravel: "₹4,500",
      total: "₹1,03,500"
    }
  },
  { 
    id: 12, 
    name: "Sydney, Australia", 
    query: "sydney",
    cost: {
      flight: "₹55,000",
      accommodation: "₹45,000",
      food: "₹14,000",
      localTravel: "₹5,000",
      total: "₹1,19,000"
    }
  },
  { 
    id: 13, 
    name: "Cape Town, South Africa", 
    query: "cape town",
    cost: {
      flight: "₹50,000",
      accommodation: "₹25,000",
      food: "₹10,000",
      localTravel: "₹3,000",
      total: "₹88,000"
    }
  },
  { 
    id: 14, 
    name: "Amsterdam, Netherlands", 
    query: "amsterdam",
    cost: {
      flight: "₹45,000",
      accommodation: "₹35,000",
      food: "₹12,000",
      localTravel: "₹4,500",
      total: "₹96,500"
    }
  },
  { 
    id: 15, 
    name: "Barcelona, Spain", 
    query: "barcelona",
    cost: {
      flight: "₹48,000",
      accommodation: "₹32,000",
      food: "₹10,500",
      localTravel: "₹3,500",
      total: "₹94,000"
    }
  },
  { 
    id: 16, 
    name: "Istanbul, Turkey", 
    query: "istanbul",
    cost: {
      flight: "₹40,000",
      accommodation: "₹30,000",
      food: "₹10,000",
      localTravel: "₹3,000",
      total: "₹83,000"
    }
  },
  { 
    id: 17, 
    name: "Seoul, South Korea", 
    query: "seoul",
    cost: {
      flight: "₹45,000",
      accommodation: "₹28,000",
      food: "₹11,000",
      localTravel: "₹4,500",
      total: "₹88,500"
    }
  },
  { 
    id: 18, 
    name: "Kuala Lumpur, Malaysia", 
    query: "kuala lumpur",
    cost: {
      flight: "₹22,000",
      accommodation: "₹15,000",
      food: "₹7,500",
      localTravel: "₹2,500",
      total: "₹47,000"
    }
  },
  { 
    id: 19, 
    name: "Phuket, Thailand", 
    query: "phuket",
    cost: {
      flight: "₹28,000",
      accommodation: "₹20,000",
      food: "₹8,000",
      localTravel: "₹3,000",
      total: "₹59,000"
    }
  },
  { 
    id: 20, 
    name: "Dubai, UAE", 
    query: "dubai",
    cost: {
      flight: "₹25,000",
      accommodation: "₹18,000",
      food: "₹9,000",
      localTravel: "₹4,000",
      total: "₹56,000"
    }
  },
  { 
    id: 21, 
    name: "London, UK", 
    query: "london",
    cost: {
      flight: "₹60,000",
      accommodation: "₹45,000",
      food: "₹12,000",
      localTravel: "₹7,000",
      total: "₹1,24,000"
    }
  },
  { 
    id: 22, 
    name: "Vienna, Austria", 
    query: "vienna",
    cost: {
      flight: "₹50,000",
      accommodation: "₹30,000",
      food: "₹11,000",
      localTravel: "₹3,500",
      total: "₹94,500"
    }
  },
  { 
    id: 23, 
    name: "Cairo, Egypt", 
    query: "cairo",
    cost: {
      flight: "₹35,000",
      accommodation: "₹20,000",
      food: "₹8,500",
      localTravel: "₹2,500",
      total: "₹66,000"
    }
  },
  { 
    id: 24, 
    name: "Lisbon, Portugal", 
    query: "lisbon",
    cost: {
      flight: "₹45,000",
      accommodation: "₹28,000",
      food: "₹9,500",
      localTravel: "₹3,000",
      total: "₹85,500"
    }
  },
  { 
    id: 25, 
    name: "Athens, Greece", 
    query: "athens",
    cost: {
      flight: "₹42,000",
      accommodation: "₹30,000",
      food: "₹9,000",
      localTravel: "₹3,000",
      total: "₹84,000"
    }
  },
  { 
    id: 26, 
    name: "Dubai, UAE", 
    query: "dubai",
    cost: {
      flight: "₹35,000",
      accommodation: "₹25,000",
      food: "₹10,000",
      localTravel: "₹3,500",
      total: "₹73,500"
    }
  },
  { 
    id: 27, 
    name: "Mumbai, India", 
    query: "mumbai",
    cost: {
      flight: "₹8,000",
      accommodation: "₹6,000",
      food: "₹2,500",
      localTravel: "₹1,500",
      total: "₹18,000"
    }
  },
  { 
    id: 28, 
    name: "Goa, India", 
    query: "goa",
    cost: {
      flight: "₹6,500",
      accommodation: "₹5,000",
      food: "₹2,000",
      localTravel: "₹1,000",
      total: "₹14,500"
    }
  },
  { 
    id: 29, 
    name: "Kochi, India", 
    query: "kochi",
    cost: {
      flight: "₹5,500",
      accommodation: "₹3,500",
      food: "₹1,500",
      localTravel: "₹1,000",
      total: "₹11,500"
    }
  },
  { 
    id: 30, 
    name: "Udaipur, India", 
    query: "udaipur",
    cost: {
      flight: "₹7,000",
      accommodation: "₹5,500",
      food: "₹2,000",
      localTravel: "₹1,500",
      total: "₹16,000"
    }
  },
];
const Plan = () => {
  const [images, setImages] = useState({});
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const UNSPLASH_API_KEY = "5U7kdABE1IP8wxXwzMbCNVWRgwKXysYRQrsZ-XGJ79s";

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
          },
        }
      );
      return response.data.results[0]?.urls?.small || "";
    } catch (error) {
      console.error("Error fetching image:", error);
      return "";
    }
  };

  const fetchAllImages = async () => {
    const fetchedImages = {};
    for (let destination of destinations) {
      const imageUrl = await fetchImage(destination.query);
      fetchedImages[destination.id] = imageUrl;
    }
    setImages(fetchedImages);
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  const handleDetails = (destination) => {
    setSelectedDestination(destination);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedDestination(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Plan Your Trip</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleDetails(destination)}
          >
            {images[destination.id] && (
              <img
                src={images[destination.id]}
                alt={destination.name}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-2xl mt-4 font-semibold">{destination.name}</h2>
            <p className="mt-2 text-sm">Total Cost: {destination.cost.total}</p>
          </div>
        ))}
      </div>

      {isPopupOpen && selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">
              {selectedDestination.name}
            </h2>
            <ul className="space-y-2">
              <li>Flight: {selectedDestination.cost.flight}</li>
              <li>Accommodation: {selectedDestination.cost.accommodation}</li>
              <li>Food: {selectedDestination.cost.food}</li>
              <li>Local Travel: {selectedDestination.cost.localTravel}</li>
              <li className="font-bold text-lg">
                Total: {selectedDestination.cost.total}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
