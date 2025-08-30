import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-indigo-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I am a Software Developer with a passion for building modern web
          applications and solving real-world problems.  
          {/* Replace this with your real intro later */}
        </motion.p>
      </div>
    </section>
  );
}

export default About;