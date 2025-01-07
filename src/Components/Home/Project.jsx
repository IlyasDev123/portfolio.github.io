import React, { useState, useEffect } from "react";
import projectsData from "./projects.json"; // Import the JSON file

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially
  const [selectedProject, setSelectedProject] = useState(null);

  // Load more projects when the user scrolls to the bottom
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight;
    if (bottom) {
      setVisibleProjects((prevVisibleProjects) => {
        const newVisibleProjects = prevVisibleProjects + 6;
        return newVisibleProjects > projectsData.length
          ? projectsData.length
          : newVisibleProjects;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoreDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-16" id="projects">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => handleMoreDetails(project)}
                  className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:from-sky-600 hover:via-sky-700 hover:to-sky-800 hover:shadow-xl"
                >
                  More Details
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="bg-gradient-to-r from-blue-600  via-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:shadow-xl"

                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        {visibleProjects < projectsData.length && (
          <div className="text-center mt-8">
            <button
              onClick={() =>
                setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6)
              }
              className="px-6 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-full"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto pt-16 px-4 sm:px-6">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative mx-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &#x2715;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Technologies Used:
            </h4>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Responsibilities:
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              {selectedProject.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
