import React from "react";
import Herosection from "../components/Hero.tsx";
import Description from "../components/AiSolutions.tsx";
import Values from "../components/AiMessaging.tsx";
import WhySklassics from "../components/WhySklassics.tsx";
import OurBlog from "../components/OurBlog.tsx";
import Project from "../components/ProjectCTA.tsx";
import SpectrumOfSolutions from "../components/SpectrumofSolutions.tsx";
import ThreeSection from "../components/ThreeSection.tsx";
import RedMesh from "../components/RedMesh.tsx";




const Home = () => {
  return (
    <div>
      <Herosection/>
      <Values />
      <SpectrumOfSolutions />
      <ThreeSection />
      <WhySklassics />
      <RedMesh />
      <Description/>
      <OurBlog />
      <Project /> 
     
    </div>
  );
};

export default Home;
