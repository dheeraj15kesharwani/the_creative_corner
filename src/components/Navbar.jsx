import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex gap-2">
          <img
            src="/images/newLo.png"
            alt="logo"
            className="h-10 rounded-4xl"
          />
          <h1 className="text-xl mt-1 md:text-2xl font-bold text-gray-800">
            <span className="font-sans md:font-[Playfair_Display]">
              The Creative Corner
            </span>
          </h1>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/products" className="hover:text-pink-500">Products</Link>
          <Link to="/about" className="hover:text-pink-500">AboutUs</Link>
          <Link to="/gallery" className="hover:text-pink-500">Gallery</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden font-sans md:font-[Playfair_Display]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Products
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            AboutUs
          </Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Gallery
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
