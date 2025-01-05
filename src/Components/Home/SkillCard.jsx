import React from "react";

const SkillCard = ({ name, years }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600 mt-2">
        {years} year{years > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default SkillCard;
