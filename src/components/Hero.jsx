import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-center"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Siddharth Bhardwaj
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Software Developer passionate about building modern apps, solving
        real-world problems, and crafting smooth user experiences.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
        <a
        href="/SiddharthBhardwajResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
        📄 View Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;