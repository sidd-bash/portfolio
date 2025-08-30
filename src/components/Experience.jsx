import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Fenado.ai (Noida)",
      period: "Feb 2025 – Present",
      points: [
        "Built and launched Flutter app (5K+ downloads, 95% crash-free rate, 5.0 rating).",
        "Developed job marketplace app with 200+ users in the first month.",
        "Implemented AI-driven incident reporting + notification system.",
        "Integrated Stripe referral payouts (£10k+/month).",
      ],
    },
    {
      role: "Software Developer",
      company: "Clipwise.ai (Gurgaon)",
      period: "Jun 2024 – Jan 2025",
      points: [
        "Django + Alpine.js development of voice cloning, avatar videos, and templates.",
        "Contributed to full-stack features, DB design, and testing.",
        "Deployed AI models via RunPod and evaluated performance.",
        "Optimized signup-to-payment workflow for better user conversion.",
      ],
    },
    {
      role: "Backend Intern",
      company: "Clasc Artigenze Solutions (Remote)",
      period: "Jun 2023 – Dec 2023",
      points: [
        "Built AWS Lambda + MySQL CRUD APIs.",
        "Designed file storage pipeline with S3 + MediaConvert.",
        "Contributed to ReactJS + Amplify web application.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} @{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;