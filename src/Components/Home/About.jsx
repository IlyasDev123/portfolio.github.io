import React from 'react';

const Section = ({ id, title, description }) => {
  return (
    <section id={id} className="py-16 bg-gradient-to-r from-indigo-50 to-blue-100">
      <div className="container mx-auto text-center px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          {/* GitHub Button */}
          <a
            href="https://github.com/IlyasDev123"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-400 via-sky-400 to-sky-400 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:from-sky-400 hover:via-sky-500 hover:to-sky-600 hover:shadow-xl"
          >
            GitHub
          </a>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/muhammad-ilyas-873a17178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-700  via-blue-700 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:shadow-xl"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      description="Experienced Senior Software Engineer with over 5 years of expertise in designing and building scalable web applications.
       Skilled in full-stack development, specializing in Laravel, AngularJS, ReactJS, and VueJS. Proficient in integrating third-party APIs, 
       designing efficient database structures, and creating seamless user experiences.
       Known for leading projects from initial concept through to successful deployment while ensuring high-quality standards and best practices."
    />
  );
};

export default About;
