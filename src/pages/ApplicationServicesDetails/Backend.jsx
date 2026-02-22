import React from 'react';
import robustImg from '../../assets/robust.png';
import databaseImg from '../../assets/database.png';
import apidevImg from '../../assets/apidev.png';

const Backend = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Backend Development</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we revolutionize back-end development with robust architecture and advanced technologies. From scalable server solutions and secure data management to seamless API integrations and efficient processing systems, we empower businesses to build reliable and high-performing digital platforms. Our tailored strategies ensure optimized functionality, enhanced scalability, and flawless execution, bringing your vision to reality. Partner with Sklassics to transform your digital infrastructure into a powerful and dependable backbone today!
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
      Backend Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we revolutionize back-end development with robust architecture and advanced technologies. From scalable server solutions and secure data management to seamless API integrations and efficient processing systems, we empower businesses to build reliable and high-performing digital platforms. Our tailored strategies ensure optimized functionality, enhanced scalability, and flawless execution, bringing your vision to reality. Partner with Sklassics to transform your digital infrastructure into a powerful and dependable backbone today!
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
        {/* Card - Robust Architecture */}
        <div className="bg-[#e9ef34] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={robustImg} alt="Robust" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">ROBUST ARCHITECTURE</h2>
            <p className="text-base mb-4 mt-6" style={{ color: '#333300' }}>
              We build scalable, secure, and efficient backend systems, designed to handle your growing business needs. Whether it’s a simple website or a complex application, our architecture ensures stability and performance.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Modular and Scalable Codebase</li>
                <li>Efficient Data Handling and Storage</li>
                <li>High Availability and Fault Tolerance</li>
                <li>Secure Authentication and Authorization</li>
                <li>Comprehensive Testing and Debugging</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Database Management */}
        <div className="bg-[#d47fee] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={databaseImg} alt="API Development" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">DATABASE MANAGEMENT</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>
              We specialize in both SQL and NoSQL database solutions, ensuring your data is well-organized, secure, and easily accessible. Our team creates reliable data models that help streamline business processes and drive decision-making.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Data Modeling and Normalization</li>
                <li>Efficient Query Optimization</li>
                <li>Backup and Recovery Strategies</li>
                <li>Secure Data Access and Encryption</li>
                <li>Scalability and Performance Tuning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - API Development */}
        <div className="bg-[#3bdeff] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={apidevImg} alt="Cloud Deployment" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">API DEVELOPMENT</h2>
            <p className="text-base mb-4 mt-2" style={{ color: '#333300' }}>
              Seamlessly connect your web application with third-party services and internal systems through our custom-built RESTful and GraphQL APIs. We ensure fast, secure, and reliable data integration across platforms
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Clear and Consistent Endpoint Design</li>
                <li>Secure Authentication and Authorization</li>
                <li>Comprehensive Documentation</li>
                <li>Efficient Data Handling and Response Formats</li>
                <li>Robust Error Handling and Status Codes</li>
              </ul>
            </div>
          </div>
        </div>

      {/* Contact Form */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to scale your backend? Contact us to build future-proof infrastructure for your apps.
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

export default Backend;
