import React from 'react';
import updatesImg from '../../assets/updates.png';
import monitorImg from '../../assets/monitor.png';
import securityImg from '../../assets/security.png';

const WebsiteMaintenance = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Website Maintenance & Support</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we provide expert website maintenance and support to ensure your digital presence remains seamless and up-to-date. From regular updates and security patches to performance optimization and troubleshooting, we empower businesses to maintain a high-performing, secure, and reliable website. Our tailored strategies ensure minimal downtime, continuous improvements, and prompt issue resolution, keeping your website running smoothly. Partner with Sklassics to ensure your website stays optimized and secure, delivering the best user experience every day!
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
    Website Maintenance & Support
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we provide expert website maintenance and support to ensure your digital presence remains seamless and up-to-date. From regular updates and security patches to performance optimization and troubleshooting, we empower businesses to maintain a high-performing, secure, and reliable website. Our tailored strategies ensure minimal downtime, continuous improvements, and prompt issue resolution, keeping your website running smoothly. Partner with Sklassics to ensure your website stays optimized and secure, delivering the best user experience every day!
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
        {/* Card - Regular Updates */}
        <div className="bg-[#e9ef34] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={updatesImg} alt="Regular Updates" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">REGULAR UPDATES</h2>
            <p className="text-base mb-4 mt-6" style={{ color: '#333300' }}>
              Stay ahead of the curve with the latest features and security patches. We ensure your website remains secure, up-to-date, and fully functional with regular updates.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Bug Fixes and Performance Improvements</li>
                <li>Security Patches and Vulnerability Fixes</li>
                <li>Feature Enhancements and New Capabilities</li>
                <li>User Interface and Experience Refinements</li>
                <li>Compatibility Updates with New Devices and Browsers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Performance Monitoring */}
        <div className="bg-[#d47fee] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={monitorImg} alt="Performance Monitoring" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">PERFORMANCE MONITORING</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>
              We continuously monitor your website’s performance, optimizing load times, security, and functionality to ensure your visitors always enjoy a smooth experience.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-Time System Health Tracking</li>
                <li>Response Time and Latency Analysis</li>
                <li>Resource Utilization Monitoring (CPU, Memory, Disk, etc.)</li>
                <li>User Experience and Load Time Metrics</li>
                <li>Alerts and Notifications for Performance Degradation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Technical Support */}
        <div className="bg-[#3bdeff] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={securityImg} alt="Security & Backup" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">TECHNICAL SUPPORT</h2>
            <p className="text-base mb-4 mt-2" style={{ color: '#333300' }}>
              Our dedicated support team is always on hand to resolve any issues quickly. From bug fixes to urgent updates, we’re here to ensure your website remains operational at all times.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Troubleshooting and Issue Resolution</li>
                <li>System Maintenance and Upgrades</li>
                <li>User Training and Guidance</li>
                <li>Monitoring and Responding to Service Interruptions</li>
                <li>Providing Timely Documentation and FAQs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Let’s Maintain Your Site!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Keep your website running at peak performance. Contact us for tailored maintenance solutions.
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

export default WebsiteMaintenance;
