import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-indigo-800 text-white text-center px-4"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m <span className="text-yellow-300">Siddharth Bhardwaj</span>
      </motion.h2>

      <motion.p
        className="text-xl md:text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A passionate Software Developer 🚀
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;