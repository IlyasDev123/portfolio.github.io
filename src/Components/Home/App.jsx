import React from 'react';
import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";
import Footer from "../Footer/Footer";
import About from "./About";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fadeInUp">
            Building Interactive Web Experiences
          </h2>
          <p className="text-xl mb-8 animate-fadeInUp delay-2">
            Full-Stack Developer | Laravel & JavaScript Frameworks Specialist
          </p>
        </div>
      </section>
      <About
        title="About"
        id="about"
        description="I'm Muhammad Ilyas, a passionate Full-Stack Developer with over 4 years of experience in building dynamic web applications."
      />
      <Project />
      <Skill />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
