import React from "react";

const ContactUs = () => {
  return (
    <div className="py-20 bg-white-100" id="contact">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Reach out to us via WhatsApp or email, and we'll respond as soon as possible!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* WhatsApp Contact */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-center mb-4">
                Chat with us instantly via WhatsApp for quick support.
              </p>
              <a
                href="https://wa.me/03490523972"
                className="text-white bg-teal-500 hover:bg-teal-600 py-2 px-6 rounded-full text-lg font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-center mb-4">
                Prefer email? Drop us a line, and we'll respond promptly.
              </p>
              <a
                href="mailto:milyasnurani94@gmail.com"
                className="text-white bg-teal-500 hover:bg-teal-600 py-2 px-6 rounded-full text-lg font-medium transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
