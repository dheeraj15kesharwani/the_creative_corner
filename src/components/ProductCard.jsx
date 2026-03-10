import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({
  name,
  image,
  category,
  badge,
}) {
  const whatsappMessage = `Hi, I'm interested in the 

  Product: ${name} 
  Image : ${window.location.origin + image} 

  from The Creative Corner 💖`;

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500 capitalize mt-1">
          {category}
        </p>

        <p className="text-pink-500 font-semibold text-lg mt-3">
          Contact for Price
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/918251915242?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition"
        >
          <FaWhatsapp />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
