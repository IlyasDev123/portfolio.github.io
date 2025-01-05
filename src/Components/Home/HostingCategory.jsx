import React from "react";

const HostingCategory = ({ title, items }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105">
      <h4 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
        {title}
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="bg-blue-100 text-blue-800 font-medium text-center py-2 px-4 rounded-md shadow-sm hover:bg-blue-200 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostingCategory;
