import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <div
            className="absolute object-cover inset-0 bg-cover bg-center"
            style={{
            backgroundImage: "url('/images/background.jpeg')",
            }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
                Handmade Gifts That Make Moments Special 💖
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-xl text-white-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
                Personalized bouquets, chocolate surprises and creative gifts crafted with love.
        </motion.p>

            <div className="space-x-4">
            <Link to="/products">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
                >
                    Explore Gifts
                </motion.button>
            </Link>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/918251915242"
                className="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-100 transition"
            >
                Order Now
            </motion.a>
            </div>
        </div>
    </section>

    </div>
  );
}
