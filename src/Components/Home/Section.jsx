import React from 'react';

const Section = ({ id, title, description, children }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
          {title}
        </h2>

        {description && (
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};

export default Section;
