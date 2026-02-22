import React from 'react';
import responsiveImg from '../../assets/ResponsiveDesign.png';
import uiImg from '../../assets/UIDesign.png';
import interactiveImg from '../../assets/interactive.png';

const Frontend = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Frontend Development</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we redefine front-end development with cutting-edge design and innovative technologies. From responsive interfaces and intuitive user experiences to dynamic web applications and seamless integrations, we empower businesses to create impactful digital solutions. Our personalized strategies enhance user engagement, optimize performance, and bring your vision to life. Partner with Sklassics to transform your digital presence into a captivating and interactive experience today!
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
      Frontend Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we redefine front-end development with cutting-edge design and innovative technologies. From responsive interfaces and intuitive user experiences to dynamic web applications and seamless integrations, we empower businesses to create impactful digital solutions. Our personalized strategies enhance user engagement, optimize performance, and bring your vision to life. Partner with Sklassics to transform your digital presence into a captivating and interactive experience today!
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
        {/* Card - Responsive Design */}
        <div className="bg-[#e9ef34] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={responsiveImg} alt="Responsive Design" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">Responsive Design</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>We ensure that your website delivers a seamless experience across all devices, from mobile phones to desktops. Our team crafts fully responsive websites that adapt beautifully to any screen size, enhancing user engagement and satisfaction.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Flexible Grids and Layouts</li>
                <li>Media Queries</li>
                <li>Flexible Images and Media</li>
                <li>Mobile-First Approachg</li>
                <li>Testing Across Devices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - UI/UX Implementation */}
        <div className="bg-[#d47fee] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={uiImg} alt="UIDesign" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">UI/UX IMPLEMENTATION</h2>
            <p className="text-base mb-4 mt-8" style={{ color: '#333300' }}>User experience is at the heart of what we do. Our designers create intuitive, engaging, and aesthetically pleasing interfaces that not only captivate your audience but also make navigation effortless and delightful.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>User-Centered Design</li>
                <li>Consistent and Intuitive Navigation</li>
                <li>Accessibility and Inclusivity</li>
                <li>Visual Hierarchy and Clarity</li>
                <li>Continuous User Feedback and Iteration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Interactive Features */}
        <div className="bg-[#3bdeff] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={interactiveImg} alt="interactive" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">INTERACTIVE FEATURES</h2>
            <p className="text-base mb-4 mt-2" style={{ color: '#333300' }}>Bring your website to life with animations, transitions, and dynamic elements! Using modern JavaScript frameworks like React, Angular, or Vue.js, we enhance interactivity, making your website more engaging and interactive.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Dynamic Content Updates</li>
                <li>Hover and Click Effects</li>
                <li>Smooth Animations and Transitions</li>
                <li>Drag-and-Drop Functionality</li>
                <li>Real-Time Notifications and Feedback</li>
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
            Nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque
            congue nec eu risus. In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra
            efficitur elit.
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

export default Frontend;
