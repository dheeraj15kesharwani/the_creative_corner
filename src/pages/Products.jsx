import { Link } from "react-router-dom";

export default function Products() {
  const categories = [
    {
      name: "bouquets",
      title: "Bouquets 💐",
      image: "/images/bouquet/flow-1.webp",
    },
    {
      name: "frames",
      title: "Photo Frames 🖼️",
      image: "/images/frames/frame-13.webp",
    },
    {
      name: "hampers",
      title: "Gift Hampers 🎁",
      image: "/images/hampers/hamperB.jpg",
    },
    {
      name: "resin art",
      title: "Resin Art 🔑",
      image: "/images/resinArt/img27.jpeg",
    },
    {
      name: "ring plater",
      title: "Ring Plater 💍✨",
      image: "/images/ringPlate/ring-1.jpeg",
    },

    {
      name: "crochet gifts",
      title: "Crochet Gifts 🛍️",
      image: "/images/crochet/boqu1.jpeg",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Our Creative Collections 💖
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Beautiful handmade gifts crafted for birthdays, anniversaries and special moments.
        </p>
      </section>

      {/* Category Cards */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/products/${cat.name}`}
              className="relative h-64 rounded-3xl overflow-hidden shadow-lg group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl font-semibold tracking-wide text-center px-4">
                  {cat.title}
                </h2>
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="text-center py-16 bg-pink-50">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Can't Find What You're Looking For?
        </h2>

        <p className="text-gray-600 mb-6">
          We also take custom orders for special occasions 💝
        </p>

        <a
          href="https://wa.me/918251915242"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Request Custom Gift
        </a>
      </section>

    </div>
  );
}
