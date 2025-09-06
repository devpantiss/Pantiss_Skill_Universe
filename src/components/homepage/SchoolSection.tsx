import React from "react";
// import { motion } from "framer-motion";
import HorizontalScrollComponent from "./HorizontalComponent";

const SchoolSection: React.FC = () => {
  return (
    <section className="bg-black text-white pt-6">
      <div className="">
        <h2
          className="text-5xl font-bold text-center mb-8 text-white"
        //   initial={{ opacity: 0, y: 20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.8 }}
        //   id="schools-section-heading"
        >
          Our Different Schools
        </h2>
        <HorizontalScrollComponent />
      </div>
    </section>
  );
};

export default SchoolSection;