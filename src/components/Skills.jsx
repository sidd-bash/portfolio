import React from "react";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <p className="font-semibold text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;