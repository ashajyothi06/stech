import React from "react";
import { useNavigate } from 'react-router-dom';
import frontend from '../assets/Frontend.png';
import backend from '../assets/Backend.png';
import fullstack from '../assets/FullStack.png';
import qa from '../assets/qualityTesting.png';
import ecommerce from '../assets/E-commerce.png';
import maintenance from '../assets/website.png';
import mobile from '../assets/MobileApp.png';
import api from '../assets/Api.png';
import enterprise from '../assets/Enterprise.png';
import PatternBG from '../assets/backimg.png';   // BACKGROUND IMAGE

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "We create visually appealing, responsive, and user-friendly websites that ensure seamless navigation.",
    image: frontend,
    route: '/services/frontend-api',
  },
  {
    id: 2,
    title: "Backend Development",
    description: "We build scalable, secure, and efficient backend systems.",
    image: backend,
    route: '/services/backend-api',
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "We handle both frontend and backend end-to-end.",
    image: fullstack,
    route: '/services/fullstack-api',
  },
  {
    id: 4,
    title: "Quality Assurance Testing",
    description: "Comprehensive QA testing for flawless performance.",
    image: qa,
    route: '/services/qa-api',
  },
  {
    id: 5,
    title: "E-commerce Development",
    description: "Custom e-commerce platforms with secure payment integration.",
    image: ecommerce,
    route: '/services/ecommerce-api',
  },
  {
    id: 6,
    title: "Website Maintenance & Support",
    description: "We keep your website updated, secure, and optimized.",
    image: maintenance,
    route: '/services/maintenance-api',
  },
  {
    id: 7,
    title: "Mobile Application Development",
    description: "High-performance, intuitive mobile apps.",
    image: mobile,
    route: '/services/mobile-api',
  },
  {
    id: 8,
    title: "API Integration and Development",
    description: "Secure and scalable API development.",
    image: api,
    route: '/services/api-integration',
  },
  {
    id: 9,
    title: "Enterprise API Development",
    description: "Enterprise-grade API solutions.",
    image: enterprise,
    route: '/services/enterprise-api',
  },
];

const ApplicationServices = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Application Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            At Sklassics, we provide end-to-end development services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(service.route)}
              className="
                group relative overflow-hidden rounded-xl shadow-sm
                bg-gray-50 p-6 flex flex-col h-full cursor-pointer
                transition-all duration-300 hover:-translate-y-2
              "
            >

              {/* BACKGROUND IMAGE ON HOVER (visible 100%) */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 bg-cover bg-center
                "
                style={{ backgroundImage: `url(${PatternBG})` }}
              />

              {/* REMOVE RED OVERLAY COMPLETELY */}
              {/* (Deleted the overlay div) */}

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full">

                <div className="h-40 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h2 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3">
                  {service.title}
                </h2>

                <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-200 flex-grow mb-4">
                  {service.description}
                </p>

                <span className="text-sm font-semibold text-gray-800 group-hover:text-white">
                  Learn More &gt;
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ApplicationServices;
