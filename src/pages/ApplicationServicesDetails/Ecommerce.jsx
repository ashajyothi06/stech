import React from 'react';
import onlineImg from '../../assets/online.png';
import paymentImg from '../../assets/payment.png';
import inventoryImg from '../../assets/inventory.png';
import userfriendlyImg from '../../assets/userfriendly.png';

const Ecommerce = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">E-Commerce Optimization</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we boost online retail success with intelligent E-commerce solutions. From personalized shopping experiences to intelligent search optimization, our services are designed to increase conversions, reduce cart abandonment, and maximize ROI. Transform your online store into a powerful, user-centric experience today!
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
      E-Commerce Optimization
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we boost online retail success with intelligent E-commerce solutions. From personalized shopping experiences to intelligent search optimization, our services are designed to increase conversions, reduce cart abandonment, and maximize ROI. Transform your online store into a powerful, user-centric experience today!
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
        {/* Card - Custom Online Stores */}
        <div className="bg-[#ffe600] text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={onlineImg} alt="Conversion Optimization" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CUSTOM ONLINE STORES</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We create tailored e-commerce platforms that meet your business’s unique requirements. From product catalogs to checkout processes.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Personalized Product Catalog and Filters</li>
                <li>Secure and Scalable Payment Gateway Integration</li>
                <li>User-Friendly Checkout Process</li>
                <li>Inventory Management and Real-Time Updates</li>
                <li>Responsive Design for Mobile and Desktop Experiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Payment Gateway Integration */}
        <div className="bg-[#3498db] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={paymentImg} alt="Search Optimization" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">Payment Gateway Integration</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We implement secure payment systems, integrating with trusted providers like Stripe, PayPal, and Square, ensuring smooth and safe transactions for your customers.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Secure Transaction Processing</li>
                <li>Multiple Payment Methods Support</li>
                <li>Seamless User Experience During Checkout</li>
                <li>Fraud Detection and Prevention Mechanisms</li>
                <li>Easy Integration with Existing Systems and APIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Inventory Management */}
        <div className="bg-[#9b59b6] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={inventoryImg} alt="Product Recommendation" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">INVENTORY MANAGEMENT</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We build backend systems that streamline product management, making it easy to track inventory, handle stock updates, and manage orders with efficiency.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-Time Stock Level Tracking</li>
                <li>Automated Stock Replenishment and Alerts</li>
                <li>Integration with Sales and Order Systems</li>
                <li>Reporting and Analytics for Inventory Performance</li>
                <li>Barcode/QR Code Scanning for Efficient Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - User-Friendly Interfaces */}
        <div className="bg-[#3498db] text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={userfriendlyImg} alt="Search Optimization" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">USER-FRIENDLY INTERFACES</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>We design easy-to-navigate, responsive interfaces that make shopping a breeze for your customers. Our focus on UX ensures a seamless journey from browsing to checkout.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Simple and Intuitive Navigation</li>
                <li>Clear and Consistent Visual Design</li>
                <li>Easy-to-Understand Icons and Labels</li>
                <li>Responsive and Accessible Layouts</li>
                <li>Minimalistic Approach with Focused Content</li>
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
              Looking to grow your online store with cutting-edge AI-driven e-commerce solutions? Let’s collaborate to maximize your digital sales impact.
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

export default Ecommerce;
