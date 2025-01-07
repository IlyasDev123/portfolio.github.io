import React from "react";

const SkillCard = ({ name, years }) => {
  // If the value is less than 1 year, convert it to months
  const isFractional = years < 1;
  const displayValue = isFractional ? Math.round(years * 12) : years;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600 mt-2">
        {displayValue} {isFractional ? "month" : "year"}{displayValue > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default SkillCard;
