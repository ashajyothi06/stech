// import React, { useState, useRef } from 'react';
// import ContactForm from '../components/ContactForm';

// const Industries = () => {
//   // Move industries array to the top
//   const industries = [
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Healthcare-project.jpg", label: "Healthcare" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/finance-project.jpg", label: "Finance" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/media-project.jpg", label: "Media" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/sports-project.jpg", label: "Sports" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/agriculture.jpg", label: "Agriculture" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/E-Commerce.jpg", label: "E-Commerce" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/education.jpg", label: "Education" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/customer.jpg", label: "Customer Service" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/hr.jpg", label: "Human Resources" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Travel-Hospitality.jpg", label: "Travel & Hospitality" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Supply-Chain.jpg", label: "Supply Chain" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Retail-Banking.jpg", label: "Retail Banking" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Marketing.jpg", label: "Marketing" },
//     { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Marketing.jpg", label: "AI Solutions" },
//   ];

//   const [current, setCurrent] = useState(0);
//   const cardsToShow = 4;
//   const showArrows = industries.length > cardsToShow;
//   const visibleIndustries =
//     industries.length <= cardsToShow
//       ? industries
//       : industries.slice(current, current + cardsToShow);
//   const intervalRef = useRef(null);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? industries.length - cardsToShow : prev - 1));
//   };
//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1 + cardsToShow > industries.length ? 0 : prev + 1));
//   };

//   // Auto-slide on hover handlers
//   const handleMouseEnter = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1 + cardsToShow > industries.length ? 0 : prev + 1));
//     }, 1000); // Slide every 1 second
//   };

//   const handleMouseLeave = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   // Add missionData for mission section
//   const missionData = [
//     {
//       title: "Healthcare",
//       desc: "AI-driven healthcare solutions for diagnostics, patient monitoring, drug discovery, and personalized medicine. Services can include predictive analytics for patient outcomes, medical image analysis, and automated administrative tasks in healthcare facilities."
//     },
//     {
//       title: "Finance",
//       desc: "AI-powered solutions for fraud detection, risk assessment, algorithmic trading, and customer insights. Services include predictive analytics for credit scoring, automated financial reporting, and intelligent process automation to enhance operational efficiency and compliance."
//     },
//     {
//       title: "Media & Entertainment",
//       desc: "Data science solutions for content personalization, recommendation systems, and audience analytics in the media and entertainment industry. AI can be used for creating and editing content, analyzing viewer preferences, and enhancing user engagement."
//     },
//     {
//       title: "Sports",
//       desc: "AI applications for performance analytics, fan engagement, and predictive analytics in sports. Solutions include player performance prediction, injury prevention, game strategy optimization, and personalized fan experiences."
//     },
//     {
//       title: "Agriculture",
//       desc: "Precision agriculture, crop monitoring, yield prediction, and automated irrigation using AI and IoT."
//     },
//     {
//       title: "E-Commerce",
//       desc: "AI solutions to optimize supply chain management, inventory control, personalized shopping experiences, and recommendation engines in retail and e-commerce. These services help in boosting customer satisfaction, improving sales, and reducing operational costs."
//     },
//     {
//       title: "Education and E-Learning",
//       desc: "AI-powered tools for personalized learning, curriculum development, and student analytics in education. These services include adaptive learning platforms, automated grading, and data-driven insights to enhance learning outcomes and tailor educational content for students."
//     },
//     {
//       title: "Customer Service And Engagement",
//       desc: "AI-driven customer service solutions, including chatbots, voice assistants, and sentiment analysis, to provide personalized support and enhance customer experience. These tools help businesses respond quickly, improve satisfaction, and gather valuable insights from customer interactions."
//     },
//     {
//       title: "Human Resources",
//       desc: "AI-driven recruitment, employee engagement analytics, and workforce optimization."
//     },
//     {
//       title: "Travel & Hospitality",
//       desc: "Personalized travel recommendations, dynamic pricing, and AI-powered customer service for the hospitality industry."
//     },
//     {
//       title: "Supply Chain",
//       desc: "AI for demand forecasting, route optimization, and real-time supply chain visibility."
//     },
//     {
//       title: "Retail Banking",
//       desc: "AI solutions for customer insights, fraud detection, and personalized banking experiences."
//     },
//     {
//       title: "Marketing",
//       desc: "Targeted advertising, customer segmentation, and campaign optimization using AI analytics."
//     },
//     {
//       title: "AI Solutions",
//       desc: "Custom AI development, integration, and deployment for enterprise and SMB clients."
//     },
//     {
//       title: "Manufacturing",
//       desc: "Predictive maintenance, quality control, and process automation using AI and machine learning."
//     },
//     {
//       title: "Logistics",
//       desc: "AI-powered fleet management, shipment tracking, and logistics optimization."
//     },
//     {
//       title: "Real Estate",
//       desc: "AI for property valuation, predictive analytics, and personalized property recommendations."
//     },
//     {
//       title: "Energy",
//       desc: "Smart grid management, predictive maintenance, and energy consumption optimization using AI."
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 px-4 md:px-12 py-8 bg-gray-50 mt-16">
//       <header className="text-center mb-10">
//         <h1 className="text-[3rem] md:text-[5rem] font-bold text-[#333] mb-8 leading-tight text-center">
//           A Service Software Built For<br />Your Industry
//         </h1>
//         <p className="text-xl md:text-2xl text-[#666] max-w-5xl mx-auto text-center font-normal leading-relaxed">
//           <span className="font-bold text-[#555]">Ongoing innovation</span> has led FieldEdge to become the leading service management software.<br />
//           Our solution helps clients across various service industries, including:
//         </p>
//       </header>

//       {/* Cards Carousel */}
//       <div className="relative flex items-center my-8"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {showArrows && (
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 z-10 p-3 text-white bg-gray-600 hover:bg-gray-800 rounded-full"
//           >
//             &lt;
//           </button>
//         )}
//         <div className="flex gap-6 w-full justify-center">
//           {visibleIndustries.map(({ src, label }, idx) => (
//             <div
//               key={idx}
//               className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow h-64 flex flex-col justify-between min-w-[250px] max-w-[250px]"
//             >
//               <img src={src} alt={label} className="w-full h-40 object-cover" />
//               <div className="p-2 text-center text-red-700 font-medium">{label}</div>
//             </div>
//           ))}
//         </div>
//         {showArrows && (
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 z-10 p-3 text-white bg-gray-600 hover:bg-gray-800 rounded-full"
//           >
//             &gt;
//           </button>
//         )}
//       </div>

//       {/* Explore Section */}
//       <section className="max-w-5xl mx-auto mt-12 text-center">
//         <h2 className="text-[1rem] md:text-[4rem] font-bold text-[#333] mb-8 leading-tight text-center">Explore Our Services</h2>
//         <p className="text-xl md:text-2xl text-[#666] max-w-5xl mx-auto text-center font-normal leading-relaxed">
//           AI-driven healthcare solutions for diagnostics, patient monitoring, drug discovery, and personalized medicine.
//           Services can include predictive analytics for patient outcomes, medical image analysis, and automated
//           administrative tasks in healthcare facilities.
//         </p>
//       </section>




//       {/* Mission Section */}
//       <section className="mt-16 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8">
//           {missionData.map((item, i) => (
//             <div
//               key={i}
//               className={`p-8 ${i % 2 === 0 ? 'bg-[#ededed]' : 'bg-[#fcf6f6]'} mb-8`}
//             >
//               <h3 className="text-2xl font-extrabold text-[#333] mb-3 text-left">{item.title}</h3>
//               <p className="text-lg text-[#555] text-left">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

      
//       {/* <section className="mt-16 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-6">
//           {[...Array(18)].map((_, i) => (
//             <div key={i} className="bg-gray-200 p-4 text-sm text-gray-800">
//               <h3 className="text-lg font-bold text-red-800 mb-1">Service {i + 1}</h3>
//               <p>Sample description about the service. Replace this text with actual content related to each service.</p>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       {/* Contact Section */}
//       {/* <section className="mt-16 bg-gray-100 py-10 px-4">
//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
//           <div>
//             <p className="uppercase text-sm text-gray-600">Get in Touch</p>
//             <h2 className="text-3xl font-bold mb-4">Reach Out!</h2>
//             <p className="text-gray-700">
//               Nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque
//               congue nec eu risus. In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra
//               efficitur elit.
//             </p>
//           </div>
//           <form className="flex flex-col gap-4">
//             <input type="text" placeholder="Name" className="border-b border-gray-400 focus:outline-none p-2" />
//             <input type="email" placeholder="Email Address" className="border-b border-gray-400 focus:outline-none p-2" />
//             <textarea placeholder="Message" rows={4} className="border-b border-gray-400 focus:outline-none p-2" />
//             <button type="submit" className="text-red-700 font-semibold underline self-end">Submit</button>
//           </form>
//         </div>
//       </section> */}
//       <ContactForm />
//     </div>
    
//   );
// };

// export default Industries;


import React, { useState, useRef } from 'react';
import ContactForm from '../components/ContactForm';

const Industries = () => {
  const industries = [
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Healthcare-project.jpg", label: "Healthcare" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/finance-project.jpg", label: "Finance" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/media-project.jpg", label: "Media" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/sports-project.jpg", label: "Sports" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/agriculture.jpg", label: "Agriculture" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/E-Commerce.jpg", label: "E-Commerce" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/education.jpg", label: "Education" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/customer.jpg", label: "Customer Service" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/hr.jpg", label: "Human Resources" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Travel-Hospitality.jpg", label: "Travel & Hospitality" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Supply-Chain.jpg", label: "Supply Chain" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Retail-Banking.jpg", label: "Retail Banking" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Marketing.jpg", label: "Marketing" },
    { src: "https://sklassicstech.com/wp-content/uploads/2024/12/Marketing.jpg", label: "AI Solutions" },
  ];

  const [current, setCurrent] = useState(0);
  const cardsToShow = 4;
  const showArrows = industries.length > cardsToShow;
  const visibleIndustries =
    industries.length <= cardsToShow
      ? industries
      : industries.slice(current, current + cardsToShow);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? industries.length - cardsToShow : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1 + cardsToShow > industries.length ? 0 : prev + 1));
  };

  const handleMouseEnter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1 + cardsToShow > industries.length ? 0 : prev + 1));
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const missionData = [
    { title: "Healthcare", desc: "AI-driven healthcare solutions for diagnostics..." },
    { title: "Finance", desc: "AI-powered solutions for fraud detection..." },
    { title: "Media & Entertainment", desc: "Data science solutions for content personalization..." },
    { title: "Sports", desc: "AI applications for performance analytics..." },
    { title: "Agriculture", desc: "Precision agriculture, crop monitoring..." },
    { title: "E-Commerce", desc: "AI solutions to optimize supply chain management..." },
    { title: "Education and E-Learning", desc: "AI-powered tools for personalized learning..." },
    { title: "Customer Service And Engagement", desc: "AI-driven customer service solutions..." },
    { title: "Human Resources", desc: "AI-driven recruitment, employee engagement..." },
    { title: "Travel & Hospitality", desc: "Personalized travel recommendations..." },
    { title: "Supply Chain", desc: "AI for demand forecasting, route optimization..." },
    { title: "Retail Banking", desc: "AI solutions for customer insights..." },
    { title: "Marketing", desc: "Targeted advertising, customer segmentation..." },
    { title: "AI Solutions", desc: "Custom AI development, integration..." },
    { title: "Manufacturing", desc: "Predictive maintenance, quality control..." },
    { title: "Logistics", desc: "AI-powered fleet management, shipment tracking..." },
    { title: "Real Estate", desc: "AI for property valuation, predictive analytics..." },
    { title: "Energy", desc: "Smart grid management, predictive maintenance..." },
  ];

  return (
    <div className="font-sans text-gray-800 px-4 sm:px-6 md:px-12 py-8 bg-gray-50 mt-16">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-size:29px text-[#333] mb-8 leading-tight">
          A Service Software Built For<br />Your Industry
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-[#666] max-w-5xl mx-auto font-normal leading-relaxed">
          <strong className="font-bold text-[#666]">Ongoing innovation</strong> has led FieldEdge to become the leading service management software.<br />
          Our solution helps clients across various service industries, including:
        </p>
      </header>

      <div className="relative flex items-center my-8 overflow-x-auto scrollbar-hide"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showArrows && (
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 text-white bg-gray-600 hover:bg-gray-800 rounded-full"
          >
            &lt;
          </button>
        )}
        <div className="flex gap-4 sm:gap-6 w-full justify-center">
          {visibleIndustries.map(({ src, label }, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow h-64 flex flex-col justify-between min-w-[200px] sm:min-w-[220px] md:min-w-[250px]"
            >
              <img src={src} alt={label} className="w-full h-40 object-cover" />
              <div className="p-2 text-left text-[#af2923] font-medium text-sm sm:text-base">{label}</div>
            </div>
          ))}
        </div>
        {showArrows && (
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 text-white bg-gray-600 hover:bg-gray-800 rounded-full"
          >
            &gt;
          </button>
        )}
      </div>

      <section className="max-w-5xl mx-auto mt-12 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#333] mb-8 leading-tight">Explore Our Services</h2>
        <p className="text-sm sm:text-lg md:text-xl text-[#666] max-w-4xl mx-auto font-normal leading-relaxed">
          AI-driven healthcare solutions for diagnostics, patient monitoring, drug discovery, and personalized medicine. Services can include predictive analytics for patient outcomes, medical image analysis, and automated administrative tasks in healthcare facilities.
        </p>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionData.map((item, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 ${i % 2 === 0 ? 'bg-[#ededed]' : 'bg-[#fcf6f6]'} mb-6 rounded-lg`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#333] mb-3 text-left">{item.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#555] text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Industries;
