import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  'Tailored AI Solutions',
  'Data-Driven Insights',
  'AI in Healthcare',
  'Financial Optimization',
  'AI for Marketing',
  'Workforce Management',
  'Educational Innovation',
  'Scalable Solutions',
];

const AIMLOverview = () => {
  return (
    <div className="flex flex-wrap justify-between items-start px-4 md:px-20 py-16 bg-gray-100 font-sans">
      <div className="flex-1 max-w-xl pr-0 md:pr-10 mb-8 md:mb-0 gap-8 md:gap-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Data-Driven Transformation <br /> by Sklassics
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          At Sklassics, we specialize in delivering innovative AI and data-driven solutions that transform industries.
          Our projects span various domains, including finance, healthcare, marketing, HR, and education. Using cutting-edge
          technologies like machine learning, predictive analytics, and natural language processing, we help organizations
          unlock valuable insights, optimize operations, and drive impactful decision-making.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Whether it’s improving patient outcomes, enhancing customer engagement, or streamlining HR processes, Sklassics
          is committed to delivering high-quality, data-centric solutions that accelerate growth and innovation.
        </p>
      </div>

      <div className="flex-1 min-w-[300px] flex flex-col gap-5">
        {services.map((service, index) => (
          <div className="flex items-center text-base md:text-lg font-medium text-gray-800" key={index}>
            <FaCheckCircle className="text-white bg-black rounded-full p-1 text-lg mr-3" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMLOverview;


// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const services = [
//   'Tailored AI Solutions',
//   'Data-Driven Insights',
//   'AI in Healthcare',
//   'Financial Optimization',
//   'AI for Marketing',
//   'Workforce Management',
//   'Educational Innovation',
//   'Scalable Solutions',
// ];

// const AIMLOverview = () => {
//   return (
//     <div className="w-full bg-gray-100 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12">
//           {/* Text content section */}
//           <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
//               Data-Driven Transformation <br className="hidden sm:block" /> by Sklassics
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4">
//               At Sklassics, we specialize in delivering innovative AI and data-driven solutions that transform industries.
//               Our projects span various domains, including finance, healthcare, marketing, HR, and education. Using cutting-edge
//               technologies like machine learning, predictive analytics, and natural language processing, we help organizations
//               unlock valuable insights, optimize operations, and drive impactful decision-making.
//             </p>
//             <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
//               Whether it's improving patient outcomes, enhancing customer engagement, or streamlining HR processes, Sklassics
//               is committed to delivering high-quality, data-centric solutions that accelerate growth and innovation.
//             </p>
//           </div>

//           {/* Services list section */}
//           <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6">
//             {services.map((service, index) => (
//               <div 
//                 className="flex items-start sm:items-center text-sm sm:text-base md:text-lg font-medium text-gray-800" 
//                 key={index}
//               >
//                 <FaCheckCircle className="flex-shrink-0 text-white bg-black rounded-full p-1 text-base sm:text-lg mr-3 mt-1 sm:mt-0" />
//                 <span>{service}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIMLOverview;