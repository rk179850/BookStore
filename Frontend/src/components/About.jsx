import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 text-lg">
          Welcome to <strong>BookStore</strong>, your go-to platform for discovering and buying books online. 
          Our mission is to provide an easy, enjoyable, and fast book shopping experience for all readers. 
          We are constantly expanding our catalog and working to improve your experience.
        </p>
      </div>
    </div>
  );
};

export default About;
