import React from "react";

const HostingCategory = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:translate-y-1 hover:scale-105"
        >
          <p className="text-xl font-medium text-gray-800 text-center">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default HostingCategory;
