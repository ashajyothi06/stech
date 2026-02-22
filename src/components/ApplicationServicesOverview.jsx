// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const appServices = [
//   'Responsive Web Design',
//   'Full-Stack Development',
//   'Mobile Application Development',
//   'E-commerce Development',
//   'API Integration and Development',
//   'Quality Assurance Testing',
//   'Website Maintenance & Support',
//   'AI-driven Solutions',
// ];

// const ApplicationServicesOverview = () => {
//   return (
//     <section className="flex flex-wrap justify-between items-start gap-10 px-4 md:px-16 py-16 bg-gray-100">
//       <div className="flex-1 max-w-xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
//           Web and Mobile <br /> Development Services by <br /> Sklassics
//         </h2>
//         <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
//           At Sklassics, we offer comprehensive web and mobile application development services that help businesses thrive
//           online. From responsive and intuitive frontend design to robust backend solutions, we ensure seamless digital
//           experiences across all platforms. Our expertise includes full-stack development, custom e-commerce platforms,
//           quality assurance testing, and ongoing maintenance and support. Using the latest technologies and AI-driven
//           solutions, we help enhance customer engagement, optimize performance, and accelerate business growth.
//         </p>
//       </div>

//       <div className="flex-1 min-w-[300px] flex flex-col gap-5">
//         {appServices.map((service, index) => (
//           <div className="flex items-center text-base md:text-lg font-medium" key={index}>
//             <FaCheckCircle className="bg-black text-white rounded-full p-1.5 text-lg mr-4" />
//             <span>{service}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ApplicationServicesOverview;


import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const appServices = [
  'Responsive Web Design',
  'Full-Stack Development',
  'Mobile Application Development',
  'E-commerce Development',
  'API Integration and Development',
  'Quality Assurance Testing',
  'Website Maintenance & Support',
  'AI-driven Solutions',
];

const ApplicationServicesOverview = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Text content section */}
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Web and Mobile <br className="hidden sm:block" /> Development Services by <br className="hidden sm:block" /> Sklassics
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4">
              At Sklassics, we offer comprehensive web and mobile application development services that help businesses thrive
              online. From responsive and intuitive frontend design to robust backend solutions, we ensure seamless digital
              experiences across all platforms.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Our expertise includes full-stack development, custom e-commerce platforms,
              quality assurance testing, and ongoing maintenance and support. Using the latest technologies and AI-driven
              solutions, we help enhance customer engagement, optimize performance, and accelerate business growth.
            </p>
          </div>

          {/* Services list section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {appServices.map((service, index) => (
              <div 
                className="flex items-start sm:items-center text-sm sm:text-base md:text-lg font-medium text-gray-800" 
                key={index}
              >
                <FaCheckCircle className="flex-shrink-0 bg-black text-white rounded-full p-1 text-base sm:text-lg mr-3 mt-1 sm:mt-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationServicesOverview;