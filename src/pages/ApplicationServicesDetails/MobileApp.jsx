import React from 'react';
import customImg from '../../assets/custom.png';
import iosAndroidImg from '../../assets/iosAndroid.png';
import crossPlatformImg from '../../assets/cross-platform.png';
import uiuxImg from '../../assets/uiux.png';
import apptestingImg from '../../assets/apptesting.png';
import appMaintenanceImg from '../../assets/app-maintenance.png';

const MobileApp = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Mobile App Development</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we craft cutting-edge mobile applications for iOS and Android. Our apps combine intuitive design, robust performance, and secure architecture to elevate user engagement. From concept to deployment, we deliver mobile experiences that align with your business goals.
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
      Mobile Application Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we craft cutting-edge mobile applications for iOS and Android. Our apps combine intuitive design, robust performance, and secure architecture to elevate user engagement. From concept to deployment, we deliver mobile experiences that align with your business goals.
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

      {/* Info Cards Section */}
      <section className="px-4 md:px-12 py-10 flex flex-wrap justify-between gap-6">
        {/* Card - Custom Mobile App Development */}
        <div className="bg-[#4caf50] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={customImg} alt="UI/UX Design" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CUSTOM MOBILE APP DEVELOPMENT</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We design and develop custom mobile applications that offer a seamless experience, functionality, and scalability tailored to yours specific requirements.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Tailored Design for User Needs and Business Goals</li>
                <li>Seamless Integration with Existing Systems</li>
                <li>Cross-Platform Compatibility (iOS, Android)</li>
                <li>High Performance and Fast Loading Speeds</li>
                <li>Scalable Architecture for Future Growth and Features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - iOS and Android App Development */}
        <div className="bg-[#673ab7] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={iosAndroidImg} alt="Cross Platform" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">IOS AND ANDROID APP DEVELOPMENT</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>Our experts develop high-quality apps for both iOS and Android platforms, ensuring a smooth user experience on any device, with seamless performance & intuitive interfaces.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Native Development for Optimal Performance</li>
                <li>Cross-Platform Compatibility Using Frameworks</li>
                <li>Intuitive and Responsive User Interfaces</li>
                <li>Integration with Device Features</li>
                <li>Secure Data Handling and Privacy Compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Cross-Platform Solutions */}
        <div className="bg-[#ff9800] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={crossPlatformImg} alt="Integration" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CROSS-PLATFORM SOLUTIONS</h2>
            <p className="text-base mb-4 mt-6" style={{ color: '#333300' }}>We create efficient and cost-effective cross-platform mobile apps that work seamlessly across multiple platforms like iOS and Android without compromising on performance.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Unified Codebase for Multiple Platforms</li>
                <li>Cost-Effective Development and Maintenance</li>
                <li>Consistent User Experience Across DevicesC</li>
                <li>Faster Time to Market with Shared Resources</li>
                <li>Integration with Platform-Specific Features and APIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - UI/UX Design */}
        <div className="bg-[#4caf50] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={uiuxImg} alt="UI/UX Design" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">UI/UX DESIGN</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Our team focuses on creating intuitive and engaging user interfaces and experiences, making sure your app is not only functional but also visually appealing.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>User-Centered Design Principles</li>
                <li>Consistent Visual Language and Branding</li>
                <li>Intuitive Navigation and Interaction Flow</li>
                <li>Responsive Design for All Devices</li>
                <li>Accessibility Considerations for Inclusivity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - App Testing & QA */}
        <div className="bg-[#673ab7] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={apptestingImg} alt="Cross Platform" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">APP TESTING & QUALITY ASSURANCE</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>We conduct rigorous testing to ensure that your app works flawlessly under all conditions, ensuring a high level of quality and reliability.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Functional Testing to Ensure Feature Accuracy</li>
                <li>Usability Testing for User Experience Optimization</li>
                <li>Performance and Load Testing for Scalability</li>
                <li>Compatibility Testing Across Devices and OS Versions</li>
                <li>Security Testing to Identify Vulnerabilities and Risks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - App Maintenance & Support */}
        <div className="bg-[#ff9800] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={appMaintenanceImg} alt="Integration" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">APP MAINTENANCE & SUPPORT</h2>
            <p className="text-base mb-4 mt-6" style={{ color: '#333300' }}>We offer ongoing support and maintenance services to ensure your app remains up-to-date with the latest features, security updates, and optimal performance.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Regular Bug Fixes and Issue Resolution</li>
                <li>Performance Optimization and Updates</li>
                <li>Security Patches and Vulnerability Management</li>
                <li>Feature Enhancements and Upgrades</li>
                <li>User Support and Troubleshooting Assistance</li>
              </ul>
            </div>
          </div>
        </div>

      {/* Contact Section */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Have a mobile app idea? Let’s make it a reality. Contact us to build fast, reliable, and impactful mobile solutions.
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

export default MobileApp;
