import React, { useState } from "react";

const techTabs = {
  Frontend: [
    { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Flutter", img: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Angular", img: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
    { name: "Svelte", img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" },
    { name: "iOS", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Android", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
    { name: "Capacitor", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg" },
    { name: "Ionic", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" },
    { name: "Vue", img: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
  ],
  Backend: [
    { name: "Python", img: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "GraphQL", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
    { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "NestJS", img: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
    { name: "PHP", img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
    { name: ".NET", img: "https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg" },
    { name: "Spring Boot", img: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
    { name: "Neo4j", img: "https://cdn.worldvectorlogo.com/logos/neo4j.svg" },
    { name: "Django", img: "https://cdn.worldvectorlogo.com/logos/django.svg" },
    { name: "Firebase", img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Go", img: "https://cdn.worldvectorlogo.com/logos/go-6.svg" },
    { name: "Laravel", img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
  ],
  AI: [
    { name: "OpenAI", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "LangChain", img: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.ico" },
    { name: "Llama", img: "https://avatars.githubusercontent.com/u/139914069?s=200&v=4" },
    { name: "Custom Model", img: "https://cdn-icons-png.flaticon.com/512/25/25694.png" },
    { name: "Firebase ML Kit", img: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" },
  ],
  Databases: [
    { name: "PostgreSQL", img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "LambdaDB", img: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
  ],
  QA: [
    { name: "Selenium", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
    { name: "Jenkins", img: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg" },
    { name: "Allure", img: "https://avatars.githubusercontent.com/u/5879127?s=200&v=4" },
    { name: "Playwright", img: "https://playwright.dev/img/playwright-logo.svg" },
  ],
  Design: [
    { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Adobe XD", img: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
  ],
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="bg-gray-100 px-4 md:px-20 py-10 font-sans mt-16">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">Technologies</h1>
      <p className="text-lg md:text-xl leading-loose text-gray-700 max-w-5xl mb-12">
        Our experienced development and design teams combine deep industry knowledge with the latest trends and innovations to deliver exceptional results.
        We focus on crafting tailored solutions that address your unique business challenges, allowing you to concentrate on what truly matter growing your business.
        From ideation to deployment, we manage every technical detail, providing you with a seamless, end-to-end experience you can trust.
      </p>

      <div className="bg-white border border-gray-300 rounded-md">
        <div className="flex flex-wrap border-b border-gray-300">
          {Object.keys(techTabs).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm md:text-base font-semibold border-r border-gray-200 transition duration-300 ${
                activeTab === tab ? "bg-[#af2923] text-white" : "bg-gray-100 text-gray-800 hover:bg-red-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 p-6 justify-start">
          {techTabs[activeTab].map((tech) => (
            <div key={tech.name} className="w-20 md:w-24 text-center">
              <img src={tech.img} alt={tech.name} className="w-full h-auto object-contain" />
              <p className="text-xs mt-2 text-gray-600">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
