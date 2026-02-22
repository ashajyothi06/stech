// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="flex flex-wrap gap-8 px-4 md:px-20 py-16 bg-white justify-between">
//       <div className="flex-1 min-w-[300px]">
//         <p className="text-red-700 font-semibold tracking-wider mb-2">GET IN TOUCH</p>
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Reach Out!</h1>
//         <p className="text-base text-gray-600 leading-relaxed">
//           Have a project in mind or want to learn more about our services? Fill out the form and our team will get back to you as soon as possible. We look forward to connecting with you!
//         </p>
//       </div>
//       <div className="flex-1 min-w-[300px]">
//         <form className="flex flex-col">
//           <label htmlFor="name" className="mt-6 text-sm font-semibold text-gray-700 tracking-wide">NAME</label>
//           <input type="text" id="name" name="name" className="border-b-2 border-black bg-transparent py-2 text-base outline-none" />

//           <label htmlFor="email" className="mt-6 text-sm font-semibold text-gray-700 tracking-wide">EMAIL ADDRESS</label>
//           <input type="email" id="email" name="email" className="border-b-2 border-black bg-transparent py-2 text-base outline-none" />

//           <label htmlFor="message" className="mt-6 text-sm font-semibold text-gray-700 tracking-wide">MESSAGE</label>
//           <textarea id="message" name="message" rows="4" className="border-b-2 border-black bg-transparent py-2 text-base outline-none resize-y min-h-[100px]" />

//           <button type="submit" className="mt-8 self-end text-red-700 font-bold tracking-wider hover:underline text-sm">SUBMIT</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Contact information section */}
          <div className="w-full lg:w-1/2">
            <p className="text-red-700 font-semibold tracking-wider text-sm md:text-base mb-2 md:mb-3">
              GET IN TOUCH
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Reach Out!
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Have a project in mind or want to learn more about our services? Fill out the form and our team will get back to you as soon as possible. We look forward to connecting with you!
            </p>
          </div>

          {/* Contact form section */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col">
              <label htmlFor="name" className="mt-4 md:mt-6 text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-b-2 border-black bg-transparent py-2 text-sm sm:text-base outline-none"
              />

              <label htmlFor="email" className="mt-4 md:mt-6 text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b-2 border-black bg-transparent py-2 text-sm sm:text-base outline-none"
              />

              <label htmlFor="message" className="mt-4 md:mt-6 text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border-b-2 border-black bg-transparent py-2 text-sm sm:text-base outline-none resize-y min-h-[80px] sm:min-h-[100px]"
              />

              <button
                type="submit"
                className="mt-6 md:mt-8 self-end text-red-700 font-bold tracking-wider hover:underline text-xs sm:text-sm transition-all duration-200 hover:scale-105"
              >
                SUBMIT →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;