import React from 'react';
import customEnterprise from '../../assets/customEnterprise.png';
import enterprisePlanning from '../../assets/enterprisePlanning.png';
import customer from '../../assets/customer.png';
import business from '../../assets/business.png';
import integration from '../../assets/integration.png';
import MobileAppDev from '../../assets/MobileAppDev.png';

const enterpriseCards = [
  {
    title: 'CUSTOM ENTERPRISE APPLICATION',
    description:
      'We build tailored enterprise applications designed to meet your specific business requirements, ensuring seamless integration with existing systems and enhancing your organization’s overall performance.',
    image: customEnterprise,
    points: [
      'Tailored Solutions for Business Needs',
      'Scalable Architecture for Growth',
      'Seamless Integration with Existing Systems',
      'High-Level Security and Data Protection',
      'Streamlined User Experience and Workflow Automation',
    ],
    bg: 'bg-[#3b82f6] text-white', // blue-500
  },
  {
    title: 'ENTERPRISE RESOURCE PLANNING',
    description:
      'Our custom ERP solutions help you manage various business functions, such as finance, HR, supply chain, and operations, through a centralized platform that improves decision-making and drives efficiency.',
    image: enterprisePlanning,
    points: [
      'Centralized Data Management',
      'Streamlined Business Processes and Automation',
      'Real-Time Reporting and Analytics',
      'Seamless Integration Across Departments',
      'Scalable & Customizable Modules for Various Needs.',
    ],
    bg: 'bg-[#fde047] text-black', // yellow-300
  },
  {
    title: 'CUSTOMER RELATIONSHIP MANAGEMENT',
    description:
      'We develop advanced CRM systems that enable your team to manage customer interactions, sales, marketing, and support, improving relationships, increasing customer satisfaction, and driving sales.',
    image: customer,
    points: [
      'Centralized Customer Data and Interaction History',
      'Automated Sales and Marketing Workflows',
      'Real-Time Analytics and Reporting',
      'Integration with Communication Channels',
      'Personalized Customer Engagement and Support',
    ],
    bg: 'bg-[#a78bfa] text-white', // purple-400
  },
  {
    title: 'BUSINESS INTELLIGENCE & ANALYTICS',
    description:
      'We provide enterprise-level BI and analytics solutions that help you analyze large datasets, gain actionable insights, and make data-driven decisions that fuel business growth.',
    image: business,
    points: [
      'Data Collection and Integration from Multiple Sources',
      'Interactive Dashboards and Visualizations',
      'Predictive Analytics and Trend Analysis',
      'Real-Time Reporting and Decision-Making',
      'Customizable KPIs and Performance Metrics',
    ],
    bg: 'bg-[#34d399] text-black', // green-400
  },
  {
    title: 'INTEGRATION WITH THIRD-PARTY SERVICES',
    description:
      'We offer seamless integration with third-party services and applications, ensuring that your enterprise systems work together effectively, reducing redundancies and streamlining workflows.',
    image: integration,
    points: [
      'Seamless Data Exchange and Synchronization',
      'Secure Authentication and API Access',
      'Real-Time Updates and Notifications',
      'Scalable and Modular Architecture',
      'Error Handling and Monitoring for Service Failures',
    ],
    bg: 'bg-[#f472b6] text-white', // pink-400
  },
  {
    title: 'MOBILE APPLICATION DEVELOPMENT',
    description:
      'We develop mobile applications for enterprises that provide real-time access to business data, improving employee productivity & enabling your workforce to stay connected anytime, anywhere.',
    image: MobileAppDev,
    points: [
      'Tailored Solutions for Business Operations',
      'Secure Access and Data Protection',
      'Seamless Integration with Enterprise Systems',
      'Scalable and High-Performance Architecture',
      'Cross-Platform Compatibility for iOS and Android',
    ],
    bg: 'bg-[#fb923c] text-black', // orange-400
  },
];

const EnterpriseAI = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Enterprise Application Development
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At Sklassics, we excel in enterprise application development by delivering robust, scalable, and high-performance solutions tailored to meet the unique needs of your business. From custom enterprise systems and seamless integrations to secure data management and optimized workflows, we empower businesses to enhance operational efficiency and drive growth. Our personalized strategies ensure reliability, scalability, and top-tier functionality.
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
      Enterprise Application Development
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we excel in enterprise application development by delivering robust, scalable, and high-performance solutions tailored to meet the unique needs of your business. From custom enterprise systems and seamless integrations to secure data management and optimized workflows, we empower businesses to enhance operational efficiency and drive growth. Our personalized strategies ensure reliability, scalability, and top-tier functionality.
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

      {/* Cards Section */}
      <section className="px-4 md:px-12 py-10 flex flex-wrap justify-between gap-6 bg-gray-100">
        {enterpriseCards.map((card, index) => (
          <div key={index} className={`rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4 ${card.bg}`}>
            <img src={card.image} alt={card.title} className="w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">{card.title}</h2>
              <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>{card.description}</p>
              <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
     

      
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

export default EnterpriseAI;
