import React from 'react';
import customApi from '../../assets/customapi.png';
import apiInt from '../../assets/apiInt.png';
import restfulapi from '../../assets/restfulapi.png';
import apiSecurity from '../../assets/apiSecurity.png';
import apiOptimization from '../../assets/apiOptimization.png';
import apiDoc from '../../assets/apiDoc.png';

const ApiIntegration = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-center">API Integration and <br />Development</h1>
          <p className="text-lg md:text-xl max-w-2xl text-left mx-auto">
            At Sklassics, we specialize in API integration and development to create seamless, scalable, and efficient connections between your systems. From custom API development and third-party integrations to real-time data synchronization and robust security protocols, we empower businesses to streamline operations and enhance functionality. Our personalized strategies ensure smooth communication between applications, optimize performance, and provide scalable solutions for future growth. Partner with Sklassics to unlock the full potential of your digital ecosystem with reliable and efficient API integrations today!
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
      API Integration and <br /> Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
      At Sklassics, we specialize in API integration and development to create seamless, scalable, and efficient connections between your systems. From custom API development and third-party integrations to real-time data synchronization and robust security protocols, we empower businesses to streamline operations and enhance functionality. Our personalized strategies ensure smooth communication between applications, optimize performance, and provide scalable solutions for future growth. Partner with Sklassics to unlock the full potential of your digital ecosystem with reliable and efficient API integrations today!
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
      <section className="p-5 flex flex-wrap justify-between gap-5">
        {/* Card 1 */}
        <div className="bg-[#ffeb3b] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={customApi} alt="RESTful APIs" className="w-full h-auto" />
          <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">RESTFUL API DEVELOPMENT</h2>
            <p className="text-[#333300] mb-2">We design and develop custom APIs that are tailored to your business needs. Our APIs are built to be secure, scalable, and efficient, ensuring smooth communication between different platforms.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Tailored Endpoints for Specific Business Needs</li>
              <li>Secure Authentication and Data Protection</li>
              <li>Scalable and Flexible Architecture</li>
              <li>Efficient Data Handling and Response Formats</li>
              <li>Comprehensive Documentation and Error Handling</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2196f3] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={apiInt} alt="GraphQL APIs" className="w-full h-auto" />
          <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">API INTEGRATION</h2>
            <p className="text-[#333300] mb-2">We integrate third-party APIs into your existing applications, allowing you to extend functionality, connect with external services, and enhance your business processes without the hassle of complex configurations.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Seamless Integration with Third-Party Services</li>
              <li>Secure Data Exchange and Authentication</li>
              <li>Real-Time Data Synchronization</li>
              <li>Error Handling and Failure Recovery Mechanisms</li>
              <li>Comprehensive Testing for Compatibility and Performance</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#4caf50] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={restfulapi} alt="Third-Party APIs" className="w-full h-auto" />
          <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">RESTFUL &amp; SOAP API SERVICES</h2>
            <p className="text-[#333300] mb-2">Our team specializes in both RESTful and SOAP API development, enabling you to choose the right architecture for your application, ensuring flexibility and ease of use.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Stateless Communication and Lightweight Protocol</li>
              <li>Supports Multiple Formats (JSON, XML, etc.)</li>
              <li>Easy Integration with Web and Mobile Apps</li>
              <li>Robust and Secure Communication with XML</li>
              <li>Strong Standards for Security (WS-Security)</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ff9800] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={apiSecurity} alt="Monitoring & Security" className="w-full h-auto" />
          <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">API SECURITY</h2>
            <p className="text-[#333300] mb-2">We implement the highest security standards for API integrations, ensuring data protection and preventing unauthorized access, making sure your API interactions are safe and secure.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Authentication and Authorization</li>
              <li>Data Encryption</li>
              <li>Rate Limiting and Throttling</li>
              <li>Input Validation</li>
              <li>Logging and Monitoring</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#ff9800] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={apiOptimization} alt="Monitoring & Security" className="w-full h-auto" />
            <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">API OPTIMIZATION</h2>
            <p className="text-[#333300] mb-2">Our experts ensure that your APIs are optimized for performance, reducing response times and enhancing overall efficiency, helping you provide a better user experience while maintaining scalability and reliability across various integrations.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Caching for Faster Response Times</li>
              <li>Efficient Query and Data Retrieval</li>
              <li>Minimizing Payload Size</li>
              <li>Asynchronous Processing for Heavy Tasks</li>
              <li>Optimizing Database Interactions</li>
              </ul>
            </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#ff9800] rounded-lg w-full md:w-[48%] shadow-md overflow-hidden flex flex-col">
          <img src={apiDoc} alt="Monitoring & Security" className="w-full h-auto" />
          <div className="p-5">
            <h2 className="text-black text-2xl font-bold mb-2">API DOCUMENTATION &amp; SUPPORT</h2>
            <p className="text-[#333300] mb-2">We provide clear, concise documentation for the APIs we develop and integrate, helping your team with easy implementation, troubleshooting, and future updates. We also offer ongoing support to ensure smooth operation.</p>
          </div>
          <div className="bg-[#454442] p-6 border-t border-gray-200 text-white">
            <h3 className="mt-2 text-yellow-400 font-semibold">KEY POINTS</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li>Clear and Concise Endpoint Descriptions</li>
              <li>Comprehensive Request and Response Examples</li>
              <li>Authentication and Authorization Guidelines</li>
              <li>Error Codes and Troubleshooting Information</li>
              <li>Versioning and Change Logs for API Updates</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-col md:flex-row bg-white rounded-lg shadow-md mt-8 p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#ff9800] tracking-widest mb-2">GET IN TOUCH</p>
            <h1 className="text-3xl font-bold mb-2">Reach Out!</h1>
            <p className="text-[#333300] mb-4">
              Need help integrating APIs? Connect with us for a scalable and secure integration solution customized to your system.
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <label htmlFor="name" className="font-semibold text-[#333300]">NAME</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff9800]" />

              <label htmlFor="email" className="font-semibold text-[#333300]">EMAIL ADDRESS</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff9800]" />

              <label htmlFor="message" className="font-semibold text-[#333300]">MESSAGE</label>
              <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff9800]" />

              <button type="submit" className="bg-[#ff9800] text-white font-bold py-2 px-6 rounded hover:bg-[#e68900] transition">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiIntegration;
