// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const ContactUs = () => {
//   return (
//     <section className="flex flex-wrap justify-between gap-8 px-4 md:px-20 py-16 font-sans mt-16">
//       <div className="flex-1 min-w-[300px] max-w-[600px]">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4">How Can We Help You And Your Business?</h2>
//         <h3 className="text-xl font-bold mb-6">Send a Message</h3>
//         <form className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Name"
//             className="mb-5 px-4 py-3 border-2 border-black rounded-lg text-base"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="mb-5 px-4 py-3 border-2 border-black rounded-lg text-base"
//           />
//           <textarea
//             placeholder="Message"
//             className="mb-5 px-4 py-3 border-2 border-black rounded-lg text-base resize-y min-h-[120px]"
//           ></textarea>
//           <button
//             type="submit"
//             className="self-start px-7 py-3 bg-red-700 text-white rounded-full font-bold text-base"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       <div className="bg-[#f1efeb] p-8 rounded-[30px] flex-1 min-w-[280px] max-w-[450px]">
//         <h3 className="text-lg md:text-xl font-semibold mb-6">
//           Our customer support team <br /> is available to help you 24/7
//         </h3>
//         <div className="flex items-start gap-4 mb-6">
//           <FaMapMarkerAlt className="text-red-700 text-lg mt-1" />
//           <div>
//             <strong className="block mb-1">Address</strong>
//             <p className="text-sm">1234 Divi St. #1000, San Francisco, CA 94220</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-4 mb-6">
//           <FaPhoneAlt className="text-red-700 text-lg mt-1" />
//           <div>
//             <strong className="block mb-1">Phone</strong>
//             <p className="text-sm">(255) 352-6258</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-4 mb-6">
//           <FaEnvelope className="text-red-700 text-lg mt-1" />
//           <div>
//             <strong className="block mb-1">Email</strong>
//             <p className="text-sm">
//               <a href="mailto:hello@divienergy.com" className="underline text-black">
//                 hello@divienergy.com
//               </a>
//             </p>
//           </div>
//         </div>
//         <button className="mt-4 px-5 py-2 bg-[#d9d8cf] text-red-700 font-bold text-sm rounded-md">
//           Get a Free Solar Quote ➞
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 ">
        <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-12 xl:gap-16">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 xl:max-w-[600px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
              How Can We Help You And Your Business?
            </h2>
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Send a Message</h3>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="mb-4 sm:mb-5 px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="mb-4 sm:mb-5 px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg text-sm sm:text-base"
              />
              <textarea
                placeholder="Message"
                className="mb-4 sm:mb-5 px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg text-sm sm:text-base resize-y min-h-[100px] sm:min-h-[120px]"
              ></textarea>
              <button
                type="submit"
                className="self-start px-5 sm:px-7 py-2 sm:py-3 bg-red-700 text-white rounded-full font-bold text-sm sm:text-base hover:bg-red-800 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 xl:max-w-[450px] bg-[#f1efeb] p-6 sm:p-8 rounded-2xl sm:rounded-[30px]">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
              Our customer support team <br className="hidden sm:block" /> is available to help you 24/7
            </h3>
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaMapMarkerAlt className="text-red-700 text-base sm:text-lg mt-0.5 sm:mt-1" />
              <div>
                <strong className="block mb-1 text-sm sm:text-base">Address</strong>
                <p className="text-xs sm:text-sm">1234 Divi St. #1000, San Francisco, CA 94220</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaPhoneAlt className="text-red-700 text-base sm:text-lg mt-0.5 sm:mt-1" />
              <div>
                <strong className="block mb-1 text-sm sm:text-base">Phone</strong>
                <p className="text-xs sm:text-sm">(255) 352-6258</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaEnvelope className="text-red-700 text-base sm:text-lg mt-0.5 sm:mt-1" />
              <div>
                <strong className="block mb-1 text-sm sm:text-base">Email</strong>
                <p className="text-xs sm:text-sm">
                  <a href="mailto:hello@divienergy.com" className="underline text-black hover:text-red-700 transition-colors">
                    hello@divienergy.com
                  </a>
                </p>
              </div>
            </div>
            <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-1.5 sm:py-2 bg-[#d9d8cf] text-red-700 font-bold text-xs sm:text-sm rounded-md hover:bg-[#c9c8bf] transition-colors duration-200">
              Get a Free Solar Quote ➞
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;