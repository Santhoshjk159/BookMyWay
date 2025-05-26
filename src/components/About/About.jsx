import React from "react";
import logo from "../img/bmw.jpg";


const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Us Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>

        {/* Company Description and Logo */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src={logo}
              alt="BookMyWay Logo"
              className="w-40 h-auto mx-auto mb-4"
            />
          </div>
          <p className="text-lg max-w-3xl mx-auto">
            At <strong>BookMyWay</strong>, we are committed to helping people
            save money while planning their dream vacations. With our unique
            platform, users can discover the best travel destinations at
            unbeatable prices. We believe in making travel accessible to
            everyone without compromising on experience. Whether you're
            exploring new cities or relaxing at a serene resort, we're here to
            make your journey unforgettable.
          </p>
        </div>

        {/* Meet Our Team Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full sm:w-96 text-center mx-auto">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqug3iSVgZGFZZKr5E4Ku5PHzjo100fqCOw&s"
                alt="Team"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We are a passionate team of travel enthusiasts, designers, and
                tech experts, working together to bring you the best travel
                deals and experiences. Our mission is to help you plan your
                trips efficiently and at the best prices possible.
              </p>
              <p className="text-sm text-gray-500">
                Together, we strive to create memorable travel experiences while
                ensuring great value for every journey you take.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
