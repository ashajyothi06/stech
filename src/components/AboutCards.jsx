// import React from 'react';
// import { FaHandshake, FaSearch } from 'react-icons/fa';

// const AboutCards = () => {
//   return (
//     <section className="flex flex-wrap gap-5 justify-center px-4 md:px-0 py-20 bg-gray-100 font-sans -mt-[5%]">
//       {/* Main headline card */}
//       <div className="bg-white p-12 rounded-none shadow max-w-lg flex-1 min-w-[340px] text-left flex flex-col justify-center relative" style={{ left: '5%' }}>
//         <h2 className="text-2xl font-bold mb-4 leading-snug">
//           Innovative Tech Company Crafting Comprehensive Software Solutions
//         </h2>
//         <p className="text-base text-gray-700 leading-normal">
//           Your content goes here. Edit or remove this text inline or in the module Content settings.
//           You can also style every aspect of this content in the module Design settings and even apply
//           custom CSS to this text in the module Advanced settings.
//         </p>
//       </div>

//       {/* Commitment card */}
//       <div className="bg-white p-12 rounded-none shadow max-w-lg flex-1 min-w-[340px] text-left flex flex-col">
//         <FaHandshake className="text-5xl text-red-700 mb-6" />
//         <h3 className="text-2xl font-bold mb-4">Commitment</h3>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Your content goes here. Edit or remove this text inline or in the module Content settings.
//           You can also style every aspect of this content in the module Design settings and even apply
//           custom CSS to this text in the module Advanced settings.
//         </p>
//       </div>

//       {/* Transparency card */}
//       <div className="bg-white p-12 rounded-none shadow max-w-lg flex-1 min-w-[340px] text-left flex flex-col justify-center relative" style={{ right: '5%' }}>
//         <FaSearch className="text-5xl text-red-700 mb-6" />
//         <h3 className="text-2xl font-bold mb-4">Transparency</h3>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Your content goes here. Edit or remove this text inline or in the module Content settings.
//           You can also style every aspect of this content in the module Design settings and even apply
//           custom CSS to this text in the module Advanced settings.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutCards;


import React from 'react';
import { FaHandshake, FaSearch } from 'react-icons/fa';

const AboutCards = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-100 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        {/* Cards container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 w-full">
          {/* Main headline card */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-none shadow w-full max-w-md lg:max-w-lg lg:flex-1 text-left flex flex-col justify-center lg:-ml-[4%] lg:self-stretch">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Innovative Tech Company Crafting Comprehensive Software Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-normal">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
              You can also style every aspect of this content in the module Design settings and even apply
              custom CSS to this text in the module Advanced settings.
            </p>
          </div>

          {/* Commitment card */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-none shadow w-full max-w-md lg:max-w-lg lg:flex-1 text-left flex flex-col lg:self-stretch">
            <FaHandshake className="text-4xl sm:text-5xl text-red-700 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Commitment</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
              You can also style every aspect of this content in the module Design settings and even apply
              custom CSS to this text in the module Advanced settings.
            </p>
          </div>

          {/* Transparency card */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-none shadow w-full max-w-md lg:max-w-lg lg:flex-1 text-left flex flex-col justify-center lg:-mr-[4%] lg:self-stretch">
            <FaSearch className="text-4xl sm:text-5xl text-red-700 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Transparency</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
              You can also style every aspect of this content in the module Design settings and even apply
              custom CSS to this text in the module Advanced settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;