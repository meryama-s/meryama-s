<<<<<<< HEAD
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site Title */}
          <div className="text-xl font-bold text-blue-600">AutoSouk.ma</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Posts</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Sign In</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Posts</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
=======
const Header=() =>{
    return (
        <>
        Header
        </>
    )
}

export default Header;
>>>>>>> origin/sarah
