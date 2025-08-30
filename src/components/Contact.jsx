import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out for collaborations, freelance work, or just to
          say hello 👋
        </p>

        <div className="space-y-4">
          <p>
            📧 <a href="mailto:yourname@example.com" className="text-indigo-600 hover:underline">yourname@example.com</a>
          </p>
          <p>
            💼 <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/yourprofile</a>
          </p>
          <p>
            💻 <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">github.com/yourusername</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;