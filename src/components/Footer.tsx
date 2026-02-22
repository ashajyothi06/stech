import React from "react";
import logo from "../assets/sklassics-tech.png"; // import your local logo

const Footer = () => {
  return (
    <footer className="relative bg-[#b02a23] text-white font-sans overflow-hidden">
      {/* Diagonal Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, #7d1e1e 25%, transparent 25%), linear-gradient(-45deg, transparent 75%, #7d1e1e 75%)",
          backgroundSize: "100% 100%",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-8">

          
          {/* Logo Section */}
          
            <div className="flex flex-col items-center sm:items-start -mt-3">

            <img
              src={logo}
              alt="Sklassics Tech Logo"
              className="w-36 sm:w-44 h-auto mb-0"
            />
            
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg md:text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 md:space-y-3 text-center sm:text-left">
              <li className="cursor-pointer hover:underline">AI Solutions</li>
              <li className="cursor-pointer hover:underline">Cloud Services</li>
              <li className="cursor-pointer hover:underline">Enterprise Software</li>
              <li className="cursor-pointer hover:underline">Web Development</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg md:text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 md:space-y-3 text-center sm:text-left">
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Case Studies</li>
              <li className="cursor-pointer hover:underline">Whitepapers</li>
              <li className="cursor-pointer hover:underline">API Documentation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-center sm:text-left leading-relaxed">
              <p>Rajiv Enclave, Ranga Reddy,</p>
              <p>Hyderabad, Telangana, 500062</p>
              <p className="mt-2">Email: info@sklassicstech.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
