import React from "react";
import { useNavigate } from "react-router-dom";
import ComputerVision from "../assets/ComputerVision.png";
import NLP from "../assets/NLP.png";
import Generative from "../assets/Generative.png";
import DataAnalytics from "../assets/Data-Analytics.png";
import Finance from "../assets/Finance.png";
import Health from "../assets/health.png";
import HRWorks from "../assets/HRWorks.png";
import Marketing from "../assets/Marketing.png";
import Education from "../assets/Education.png";
import PatternBG from "../assets/backimg.png";

const AIServicesCards = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Computer Vision",
      description:
        "AI-powered visual analysis that allows systems to interpret and make decisions based on visual data.",
      image: ComputerVision,
      route: "/services/computer-vision/",
    },
    {
      title: "Natural Language Processing",
      description:
        "NLP services for text and language analysis, enabling sentiment analysis, chatbots, automated translations, and more.",
      image: NLP,
      route: "/services/natural-language-processing/",
    },
    {
      title: "Generative AI",
      description:
        "Generative AI solutions for creating new data: text, images, audio, and video.",
      image: Generative,
      route: "/services/generative-ai/",
    },
    {
      title: "Data-Analytics",
      description:
        "Transform raw data into meaningful insights using analytics, visualization, and ML.",
      image: DataAnalytics,
      route: "/services/Data-Analytics/",
    },
    {
      title: "Finance",
      description:
        "AI-driven financial modeling, risk analysis, fraud detection, and portfolio optimization.",
      image: Finance,
      route: "/services/Finance/",
    },
    {
      title: "HealthCare",
      description:
        "AI-assisted healthcare solutions for diagnostics, predictions, and operational analytics.",
      image: Health,
      route: "/services/healthcare",
    },
    {
      title: "HR Works",
      description:
        "AI tools for recruitment automation, employee analytics, and workforce optimization.",
      image: HRWorks,
      route: "/services/hr-works",
    },
    {
      title: "Marketing",
      description:
        "AI-powered marketing for personalization, targeting, and campaign optimization.",
      image: Marketing,
      route: "/services/marketing",
    },
    {
      title: "Education",
      description:
        "AI solutions to personalize learning, support educators, and automate processes.",
      image: Education,
      route: "/services/education",
    },
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-4 md:px-16 py-16 bg-white text-center min-h-[110vh]">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 mt-16">
        Our AI Services
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        At Sklassics, we provide cutting-edge AI solutions across various
        domains including computer vision, NLP, and generative AI.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.route)}
            className="
              group cursor-pointer relative overflow-hidden rounded-xl shadow-md 
              transition-all p-6 text-left flex flex-col justify-between
              bg-gray-100 text-gray-700 hover:shadow-xl hover:scale-[1.03]
            "
            style={{
              backgroundImage: `none`,
            }}
          >
            {/* 🔥 Background image appears on hover */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 
                bg-cover bg-center
              "
              style={{ backgroundImage: `url(${PatternBG})` }}
            />

            {/* Foreground content */}
            <div className="relative z-10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
              />

              <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition">
                {service.title}
              </h2>

              <p className="text-sm mb-4 text-gray-700 group-hover:text-white transition">
                {service.description}
              </p>

              <span className="text-sm font-bold text-[#af2923] group-hover:text-white transition">
                Learn More &gt;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIServicesCards;
