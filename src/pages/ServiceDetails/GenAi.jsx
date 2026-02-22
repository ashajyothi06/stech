import React from 'react';
// import computervisionBanner from '../../assets/computervision-banner.png';
// import generativeImg from '../../assets/Generative.png';
import customerSupportImg from '../../assets/customersupport.png';
import voiceActivatedImg from '../../assets/voice-activated.png';
import aiVirtualImg from '../../assets/Ai-virtual.png';

const GenAi = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Generative AI</h1>
          <p className="text-lg md:text-2xl max-w-2xl">
          At Sklassics, we harness the transformative power of Generative AI to create innovative solutions tailored to your business needs. From intelligent content creation and chatbot design to automating workflows and enhancing customer engagement, our cutting-edge AI technologies empower smarter decision-making and growth. Let Sklassics redefine what’s possible with AI and take your business to the next level today!
          </p>
        </div>
      </section> */}
      <section
  className="relative w-full h-[120vh] sm:h-[130vh] md:h-[135vh] lg:h-[95vh] flex items-center justify-center bg-cover bg-center"
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
    Generative AI
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we harness the transformative power of Generative AI to create innovative solutions tailored to your business needs. From intelligent content creation and chatbot design to automating workflows and enhancing customer engagement, our cutting-edge AI technologies empower smarter decision-making and growth. Let Sklassics redefine what’s possible with AI and take your business to the next level today!
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
        {/* Card - Customer Support Automation */}
        <div className="bg-green-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={customerSupportImg} alt="Customer Support Automation" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CUSTOMER SUPPORT AUTOMATION</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>
              AI-powered customer service automation solutions that use chatbots and virtual assistants to handle routine queries and provide 24/7 support. These tools can handle ticket management, live chat assistance, and FAQ automation, improving response times and reducing operational costs.
            </p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Automation of Customer Support</li>
                <li>24/7 Availability</li>
                <li>Improved Efficiency</li>
                <li>Personalized Interaction</li>
                <li>Cost-Effective</li>
                <li>Scalability</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Chatbots</li>
                <li>Email Automation</li>
                <li>Voice Assistants</li>
                <li>Ticketing Systems</li>
                <li>Feedback Analysis</li>
                <li>Onboarding Support</li>
                <li>Proactive Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Voice-Activated AI Assistants */}
        <div className="bg-orange-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={voiceActivatedImg} alt="Voice-Activated AI Assistants" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">VOICE-ACTIVATED AI ASSISTANTS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>
              AI-powered voice assistants for automating tasks and providing real-time business support through voice commands. These assistants can manage calendars, set reminders, assist with data retrieval, and automate customer service tasks, making workflows more efficient.
            </p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Hands-Free Interaction</li>
                <li>Enhanced Customer Experience</li>
                <li>Increased Accessibility</li>
                <li>Improved Efficiency in Operations</li>
                <li>Personalized Assistance</li>
                <li>Integration with Business Tools</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Virtual Receptionist for Handling Calls</li>
                <li>Voice-Driven Scheduling and Calendar Management</li>
                <li>Customer Support via Voice Commands</li>
                <li>Employee Training and Onboarding Assistance</li>
                <li>Real-Time Data Retrieval for Decision-Making</li>
                <li>Voice-Activated Order Processing</li>
                <li>Smart Meeting Assistants for Note-Taking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - AI for Virtual Customer Support Assistants */}
        <div className="bg-yellow-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aiVirtualImg} alt="AI for Virtual Customer Support Assistants" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR VIRTUAL CUSTOMER SUPPORT ASSISTANTS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>
              AI-powered virtual assistants that handle customer inquiries through chatbots, email, and voice interfaces. These assistants streamline customer support, resolve common queries instantly, and improve service availability, widely used in retail, banking, and healthcare.
            </p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Instant Query Resolution</li>
                <li>24/7 Availability</li>
                <li>Reduced Operational Costs</li>
                <li>Multilingual Support</li>
                <li>Consistent and Accurate Responses</li>
                <li>Scalability for High Query Volumes</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Handling FAQs Through Chatbots</li>
                <li>Personalized Customer Recommendations</li>
                <li>Automated Ticket Generation and Routing</li>
                <li>Order Tracking and Updates</li>
                <li>Complaint Resolution and Feedback Collection</li>
                <li>Proactive Support with Predictive Analytics</li>
                <li>Seamless Integration with CRM Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-bold text-green-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Let's Build with GenAI!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Harness the power of generative models to transform your operations and create limitless possibilities. Contact us to learn how.
            </p>
          </div>
          <form className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1">NAME</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-1">EMAIL ADDRESS</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-1">MESSAGE</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GenAi;
