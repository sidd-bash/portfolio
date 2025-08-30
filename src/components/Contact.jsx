import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          Contact Me
        </h2>
        <p className="text-lg mb-8">
          Interested in collaborating, freelance opportunities, or just want to
          say hello? Let’s connect!
        </p>

        <div className="space-y-4">
          <p>
            📧{" "}
            <a
              href="mailto:siddian17.7@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              siddian17.7@gmail.com
            </a>
          </p>
          <p>
            📱 <span className="text-gray-700 dark:text-gray-300">+91 8816096346</span>
          </p>
          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/siddharth-bhardwaj-10a417201/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              linkedin.com/in/siddharth-bhardwaj-10a417201
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;