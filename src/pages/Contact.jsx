import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contact() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
    Hello The Creative Corner 💖

    Name: ${name}
    Phone: ${phone}
    Message: ${message}
    `;

    const url = `https://wa.me/918251915242?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    window.open(url, "_blank");
    };

  return (
    <div className="min-h-screen bg-white px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Let’s Create Something Special 💖
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Have a custom request or want to place an order? We’re just a message away!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >


          <div className="flex items-center gap-4 bg-pink-50 p-5 rounded-2xl shadow-sm">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
              href="https://wa.me/918251915242"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-4 bg-pink-50 p-5 rounded-2xl shadow-sm">
            <FaInstagram className="text-pink-500 text-2xl" />
            <a
              href="https://www.instagram.com/_the_creative_corner________/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              @thecreativecorner
            </a>
          </div>

          <div className="flex items-center gap-4 bg-pink-50 p-5 rounded-2xl shadow-sm">
            <FaEnvelope className="text-purple-500 text-2xl" />

            <a
              href="mailto:mansijethwani2304@gmail.com"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              mansijethwani2304@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 bg-pink-50 p-5 rounded-2xl shadow-sm">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <p className="text-gray-700">
              Jabalpur M.P, India
            </p>
          </div>

        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-pink-50 p-8 rounded-3xl shadow-md"
        >

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              required
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              required
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
