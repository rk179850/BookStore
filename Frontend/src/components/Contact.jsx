import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input type="text" placeholder="Your name" className="w-full px-3 py-2 border rounded-md outline-none" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md outline-none" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea placeholder="Your message" className="w-full px-3 py-2 border rounded-md outline-none" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
