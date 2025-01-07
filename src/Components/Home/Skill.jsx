import React from "react";
import SkillCard from "./SkillCard";
import ApiCategory from "./ApiCategory";
import HostingCategory from "./HostingCategory";

const Skills = () => {
  const skillsData = [
    { name: "Laravel", years: 5 },
    { name: "PHP", years: 2 },
    { name: "Node.js", years: 0.5 },
    { name: "HTML", years: 2 },
    { name: "CSS", years: 1 },
    { name: "JavaScript", years: 1 },
    { name: "React.js", years: 1 },
    { name: "Vue.js", years: 1.5 },
    { name: "AngularJS", years: 1 },
    { name: "TailwindCSS", years: 0.4 },
    { name: "Bootstrap", years: 2 },
    { name: "Git", years: 2 },
    { name: "Mysql", years: 3 },
    { name: "Firebase", years: 0.3 },
    { name: "MongoDB", years: 0.3 },
  ];

  const thirdPartyAPIs = {
    paymentMethods: ["Stripe", "Paypal", "Jazz Cash", "authorize.net"],
    socialLogin: ["Facebook", "Gmail", "Twitter"],
    pushNotifications: ["Firebase", "One Signal"],
    messages: ["Twilio", "WhatsApp"],
    IntegrationTools: ["Acuity", "Zapier"],
    
  };

  const serverManagement = {
    hostingPlatforms: ["AWS", "S3", "Digital Ocean", "GoDaddy", "NameCheap", "WHM", "Hostinger"],
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50" id="skills">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Skills & Experience
        </h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} years={skill.years} />
            ))}
          </div>
        </div>

        {/* Third-Party APIs */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Third-Party APIs & Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(thirdPartyAPIs).map(([category, items]) => (
              <ApiCategory key={category} category={category} items={items} />
            ))}
          </div>
        </div>

        {/* Server Management */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Server Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <HostingCategory
              items={serverManagement.hostingPlatforms}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
