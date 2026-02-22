import React from 'react';
import functionalImg from '../../assets/functional.png';
import usabilityImg from '../../assets/usability.png';
import crossBrowserImg from '../../assets/cross-browser.png';
import performanceImg from '../../assets/performance.png';
import regressionImg from '../../assets/regression.png';

const QualityAssurance = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Quality Assurance Testing</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we elevate quality assurance testing with comprehensive methodologies and cutting-edge tools. From rigorous test planning and automated testing to performance optimization and security validation, we empower businesses to deliver flawless and reliable digital solutions. Our personalized strategies ensure high-quality products, smooth user experiences, and minimized risks, bringing your vision to perfection. Partner with Sklassics to ensure your digital solutions meet the highest standards of performance and reliability today!
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
    Quality Assurance Testing
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we elevate quality assurance testing with comprehensive methodologies and cutting-edge tools. From rigorous test planning and automated testing to performance optimization and security validation, we empower businesses to deliver flawless and reliable digital solutions. Our personalized strategies ensure high-quality products, smooth user experiences, and minimized risks, bringing your vision to perfection. Partner with Sklassics to ensure your digital solutions meet the highest standards of performance and reliability today!
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
        {/* Card - Functional Testing */}
        <div className="bg-[#ffdc60] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={functionalImg} alt="Functional Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">Functional Testing</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Our team thoroughly verifies that all features, from the most basic to the most complex, work as intended, providing your users with a consistent experience.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Test Case Design Based on Requirements</li>
                <li>User Flow and Feature Validation</li>
                <li>Compatibility Across Devices and Browsers</li>
                <li>Error Handling and Edge Case Testing</li>
                <li>Regression Testing for New Updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Usability Testing */}
        <div className="bg-[#b49eff] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={usabilityImg} alt="Performance Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">USABILITY TESTING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We ensure that your website is not only functional but user-friendly and intuitive, guiding your users toward their goals with ease.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>User Task Completion and Efficiency</li>
                <li>User Satisfaction and Feedback Collection</li>
                <li>Intuitive Interface Navigation</li>
                <li>Identification of Usability Issues and Pain Points</li>
                <li>Cross-Device and Platform Consistency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Cross-Browser Testing */}
        <div className="bg-[#61dafb] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={crossBrowserImg} alt="Security Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CROSS-BROWSER TESTING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We test your website across different browsers (Chrome, Safari, Firefox, etc.) and devices to guarantee it performs consistently for all users, no matter their platform.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Consistent Layout and Design Across Browsers</li>
                <li>Functionality and Interactive Elements Validation</li>
                <li>Performance and Load Time Comparison</li>
                <li>CSS and JavaScript Compatibility</li>
                <li>Responsive Design Behavior Across Browsers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Test Automation Scripts */}
        <div className="bg-[#61dafb] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={performanceImg} alt="Security Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">TEST AUTOMATION SCRIPTS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Utilizing tools like Selenium and Cypress, we automate repetitive test cases, saving time and increasing testing accuracy across different environments.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Reusable and Modular Test Scripts</li>
                <li>Integration with CI/CD Pipelines</li>
                <li>Support for Multiple Browsers and Platforms</li>
                <li>Clear and Descriptive Test Cases</li>
                <li>Error Logging and Reporting for Quick Debugging</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Performance Testing */}
        <div className="bg-[#61dafb] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={regressionImg} alt="Security Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">PERFORMANCE TESTING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Using tools like JMeter, we test your website’s speed, responsiveness, and stability under various conditions, ensuring your site can handle high traffic and heavy load without compromising user experience.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Load Testing for Handling Traffic Peaks</li>
                <li>Stress Testing to Identify System Limits</li>
                <li>Scalability Testing for Growth</li>
                <li>Response Time and Latency Measurement</li>
                <li>Resource Utilization (CPU, Memory, etc.) Monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Regression Testing */}
        <div className="bg-[#b49eff] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={usabilityImg} alt="Performance Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">REGRESSION TESTING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We conduct thorough testing and validation to ensure that new updates and features do not interfere with existing functionalities, keeping your website stable and reliable after every deployment, while also optimizing performance and user experience.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Verifying Existing Functionality After Changes</li>
                <li>Identifying Unintended Side Effects</li>
                <li>Test Coverage Across Critical Features</li>
                <li>Automating Repetitive Test Cases</li>
                <li>Continuous Monitoring During Software Updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Vulnerability Assessments */}
        <div className="bg-[#61dafb] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={crossBrowserImg} alt="Security Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">VULNERABILITY ASSESSMENTS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We proactively identify and mitigate security risks, ensuring your website is safeguarded against potential threats, while also implementing best practices for data privacy and compliance with industry standards.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Identification of Security Weaknesses and Risks</li>
                <li>Scanning for Common Vulnerabilities</li>
                <li>Testing for Proper Authentication and Authorization</li>
                <li>Reviewing Code for Security Flaws and Exploits</li>
                <li>Regular Scanning and Reporting for Continuous Security.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Penetration Testing */}
        <div className="bg-[#61dafb] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={crossBrowserImg} alt="Security Testing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">PENETRATION TESTING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Simulating real-world cyber-attacks, we identify weaknesses in your system and strengthen them to ensure resilience against intrusions, providing you with actionable insights to enhance your security posture and minimize vulnerabilities.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Identifying Security Weaknesses and Vulnerabilities</li>
                <li>Simulating Real-World Attacks to Exploit Weaknesses</li>
                <li>Testing Network, Web Applications, and APIs</li>
                <li>Social Engineering and Phishing Attempts</li>
                <li>Comprehensive Reporting of Findings & Recommendations</li>
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
              Ready to elevate the quality of your digital products? Let's talk about tailored QA solutions to protect your brand and users.
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

export default QualityAssurance;
