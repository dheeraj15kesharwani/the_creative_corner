import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 capitalize text-gray-800">
        {category} Collection 💖
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}

            // 🔥 ENTRY ANIMATION
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}

            // 🔥 HOVER ANIMATION
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
