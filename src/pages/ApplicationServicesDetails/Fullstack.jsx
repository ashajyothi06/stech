import React from 'react';
import endtoendImg from '../../assets/endtoend.png';
import developsImg from '../../assets/develops.png';

const Fullstack = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Full Stack Development</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, our full stack development services combine frontend finesse with powerful backend architecture. From UI/UX design and APIs to cloud infrastructure, we build complete solutions using the latest web technologies such as React, Node.js, Python, and MongoDB.
          </p>
        </div>
      </section> */}
      <section
  className="relative w-full h-[160vh] sm:h-[165vh] md:h-[160vh] lg:h-[150vh] xl:h-[135vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('/src/assets/computervision-banner.png')`,
  }}
>
  <div className="absolute inset-0 bg-black/55 z-10" />

  <div
    className="relative z-20 px-4 sm:px-8 md:px-10 py-8 md:py-12 rounded-xl w-full max-w-full md:max-w-[70%] text-white text-center sm:text-left animate-fadeSlideIn"
    style={{
      animation: 'fadeSlideIn 1s ease-out forwards',
    }}
  >
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
      Full Stack Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, our full stack development services combine frontend finesse with powerful backend architecture. From UI/UX design and APIs to cloud infrastructure, we build complete solutions using the latest web technologies such as React, Node.js, Python, and MongoDB.
    </p>
  </div>

  <style>
    {`
      @keyframes fadeSlideIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeSlideIn {
        animation: fadeSlideIn 1s ease-out forwards;
      }
    `}
  </style>
</section>

      {/* Information Cards Section */}
      <section className="px-4 md:px-12 py-10 flex flex-wrap justify-between gap-6">
        {/* Card - End-to-End Solutions */}
        <div className="bg-[#e9ef34] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={endtoendImg} alt="UI/UX Design" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">END-TO-END SOLUTIONS</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              Our full-stack development services cover both frontend and backend, ensuring a cohesive and seamless web experience. We handle everything from database design to UI/UX development, bringing your entire project to life with a unified vision.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Seamless Integration Across Platforms</li>
                <li>Scalable Architecture for Growth</li>
                <li>Real-Time Data Processing and Insights</li>
                <li>End-User Focused Design and Functionality</li>
                <li>Continuous Monitoring and Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - DevOps Integration */}
        <div className="bg-[#d47fee] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={developsImg} alt="Backend Logic" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">DEVOPS INTEGRATION</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>
              We streamline your development and deployment processes by integrating DevOps practices. With cloud solutions like AWS and Azure, we automate and optimize server setups, ensuring smooth, secure, and consistent operations.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Continuous Integration and Continuous Deployment </li>
                <li>Automated Testing and Quality Assurance</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Monitoring and Logging for Performance</li>
                <li>Collaboration Between Development and Operations Teams</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Let’s Build Together</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to bring your ideas to life? Contact us to build powerful full stack solutions that scale.
            </p>
          </div>
          <form className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">NAME</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">EMAIL ADDRESS</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">MESSAGE</label>
              <textarea rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Fullstack;
