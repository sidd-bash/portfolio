import React from "react";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;