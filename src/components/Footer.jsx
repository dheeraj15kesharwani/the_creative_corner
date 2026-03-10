import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            The Creative Corner 💖
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Handmade gifts crafted with love.  
            We create personalized bouquets, frames, keychains and surprise
            hampers to make your special moments unforgettable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-pink-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-pink-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-600">

            <a
              href="https://wa.me/8251915242"
              className="flex items-center gap-3 hover:text-green-600 transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <a
              href="https://www.instagram.com/_the_creative_corner________/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition"
            >
              <FaInstagram />
              @thecreativecorner
            </a>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Jabalpur M.P, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-pink-200 text-center py-4 text-gray-600 text-sm">
        © {new Date().getFullYear()} The Creative Corner. All Rights Reserved.
      </div>
    </footer>
  );
}
