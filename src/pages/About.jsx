import { FaHeart, FaGift, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About The Creative Corner 💖
        </h1>
        <p className="text-gray-500 text-lg">
          Turning simple moments into unforgettable memories through handmade gifts.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        
        <img
          src="/images/about.webp"
          alt="About"
          className="rounded-3xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story ✨
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The Creative Corner started with a simple idea — to create gifts that feel personal,
            meaningful and full of love. What began as a small passion project soon turned into
            a growing local gifting brand.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From handcrafted flower bouquets to custom photo frames and personalized keychains,
            every product is made with creativity and care.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-pink-50 py-16 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Us? 💕
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <FaHeart className="text-pink-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Handmade with Love
            </h3>
            <p className="text-gray-500 text-sm">
              Every product is carefully crafted to make your moments special.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <FaGift className="text-pink-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Personalized Touch
            </h3>
            <p className="text-gray-500 text-sm">
              We create customized gifts tailored to your unique ideas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <FaStar className="text-pink-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Trusted by Happy Customers
            </h3>
            <p className="text-gray-500 text-sm">
              Loved by college students, couples and gifting enthusiasts.
            </p>
          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let’s Create Something Beautiful Together 💝
        </h2>

        <a
          href="https://wa.me/918251915242"
          className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Order on WhatsApp
        </a>
      </div>

    </div>
  );
}
