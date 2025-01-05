import React from "react";

const ApiCategory = ({ category, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <h4 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
        {category.replace(/([A-Z])/g, " $1")}
      </h4>
      <ul className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="bg-blue-100 text-gray-700 text-center py-2 px-3 rounded-md shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCategory;
