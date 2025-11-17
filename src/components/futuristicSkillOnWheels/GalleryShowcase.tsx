import React from "react";

const images = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
];

const GalleryShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-400">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Skill on Wheels"
              className="rounded-lg shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
