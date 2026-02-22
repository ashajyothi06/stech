import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Description from "./components/AiSolutions";
import OurBlog from "./components/OurBlog";
import Project from "./components/ProjectCTA";
import WhySklassics from "./components/WhySklassics";
import Values from "./components/AiMessaging";
import BrochurePage from "./pages/BrochurePage";

import Industries from "./pages/Industries";
 import TechnologiesScreen from "./pages/TechnologiesScreen";
// import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUsScreen from "./pages/ContactUsScreen";


import Blog from "./pages/Blog";

//AiServices
import AIMLServicesScreen from "./pages/AIMLServicesScreen";
import ComputerVision from "./pages/ServiceDetails/ComputerVision";
import NLP from "./pages/ServiceDetails/NLP";
import DataAnalytics from "./pages/ServiceDetails/DataAnalytics";
 import GenAi from "./pages/ServiceDetails/GenAi";
 import Finance from "./pages/ServiceDetails/Finance";
import HealthCare from "./pages/ServiceDetails/HealthCare";
import Education from "./pages/ServiceDetails/Education";
import HRWorks from "./pages/ServiceDetails/HRWorks";
 import Marketing from "./pages/ServiceDetails/Marketing";



// ApplicationServicesDetails
import Frontend from "./pages/ApplicationServicesDetails/Frontend";
import Backend from "./pages/ApplicationServicesDetails/Backend";
import Fullstack from "./pages/ApplicationServicesDetails/Fullstack";
import QualityAssurance from "./pages/ApplicationServicesDetails/QualityAssurance";
import Ecommerce from "./pages/ApplicationServicesDetails/Ecommerce";
import WebsiteMaintenance from "./pages/ApplicationServicesDetails/WebsiteMaintenace";
import MobileApp from "./pages/ApplicationServicesDetails/MobileApp";
import ApiIntegration from "./pages/ApplicationServicesDetails/ApiIntegration";
import EnterpriseAI from "./pages/ApplicationServicesDetails/EnterpriseAI";

import ApplicationServicesScreen from "./pages/ApplicationServicesScreen";
import ScrollToTop from "./components/ScrollToTop";
import OurWorks from "./pages/OurWorks";

const App = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/project-banner" element={<Project/>} />
        <Route path="/why-sklassics" element={<WhySklassics/>} />
        <Route path="/values" element={<Values/>} />   
       <Route path="/industries" element={<Industries/>} />
        <Route path="/technologies" element={<TechnologiesScreen/>} />
        <Route path="/ourblog" element={<Blog/>} />
        <Route path="/brochure" element={<BrochurePage />} />
        <Route path="/about" element={<AboutUs/>} />
       <Route path="/contact" element={<ContactUsScreen/>} />
       
        <Route path="/aiml-services" element={<AIMLServicesScreen/>} />
        <Route path="/services/computer-vision/" element={<ComputerVision/>} />
        <Route path="/services/natural-language-processing/" element={<NLP/>} />
        <Route path="/services/Data-Analytics/" element={<DataAnalytics/>} />
         <Route path="/services/generative-ai/" element={<GenAi/>} />
        <Route path="/services/finance/" element={<Finance/>} />
        <Route path="/services/education/" element={<Education/>} />
        <Route path="/services/healthcare/" element={<HealthCare/>} />
        <Route path="/services/hrworks/" element={<HRWorks/>} />
        <Route path="/services/marketing/" element={<Marketing/>} /> 
        <Route path="/our-works" element={<OurWorks />} />

      
        <Route path="/application-services" element={<ApplicationServicesScreen/>} />



       {/* ApplicationServicesDetails */}
       <Route path="/services/frontend-api" element={<Frontend/>} />
        <Route path="/services/backend-api" element={<Backend/>} />
        <Route path="/services/fullstack-api" element={<Fullstack/>} />
        <Route path="/services/qa-api" element={<QualityAssurance/>} />
        <Route path="/services/ecommerce-api" element={<Ecommerce/>} />
        <Route path="/services/maintenance-api" element={<WebsiteMaintenance/>} />
        <Route path="/services/mobile-api" element={<MobileApp/>} />
        <Route path="/services/api-integration" element={<ApiIntegration/>} />
        <Route path="/services/enterprise-api" element={<EnterpriseAI/>} />
      
      </Routes>
      <Footer />
    </>
  );
};

export default App;
