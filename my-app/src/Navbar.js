// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-2xl font-bold">MonkeyNewsNetwork (MNN)</a>

        <div className="flex space-x-4">
          <a href="/" className="text-black hover:text-gray-300">Home</a>
          <a href="/politics" className="text-black hover:text-gray-300">Politics</a>
          <a href="/business" className="text-black hover:text-gray-300">Business</a>
          <a href="/technology" className="text-black hover:text-gray-300">Technology</a>
          <a href="/entertainment" className="text-black hover:text-gray-300">Sports</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
