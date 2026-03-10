import { useState } from "react";
import products from "../data/products";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = products.map((product) => product.image);

  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Gallery 💖
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}