import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400">
            Have questions? We'd love to hear from you! Reach out to us through
            the form below or our social channels.
          </p>
        </div>

        {/* Contact Form & Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Get Connected!</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 w-full md:w-1/2">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
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
                <h4 className="text-lg font-semibold">Our Address</h4>
                <p className="text-gray-400">
                  123 Dream Street, Innovation City, India - 123456
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10a5.002 5.002 0 001.757 3.757L9.9 20.9a3 3 0 004.242 0l3.343-3.343a2 2 0 00-.364-2.828L14 13a8.034 8.034 0 01-4-4l-1.414-1.414A2 2 0 006.757 6.1L3.757 9.1A5.002 5.002 0 003 10z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Call Us</h4>
                <p className="text-gray-400">+91-9876543210</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 5H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="text-gray-400">support@bookmyway.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
