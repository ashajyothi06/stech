import React from 'react';
import computervisionBanner from '../../assets/computervision-banner.png';
import healthcareDiagnostics from '../../assets/care1.png';
import medicine from '../../assets/medicine.png';
import publichealth from '../../assets/publichealth.png';
import shc from '../../assets/smarthealthcare.png';

import automated from '../../assets/automated-health.png';
import aidrive from '../../assets/ai-drive.png';
import care6 from '../../assets/care6.png';
import care7 from '../../assets/care7.png';


const HealthCare = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Health care</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we revolutionize healthcare with advanced data analytics and AI-driven solutions. From predictive diagnostics and patient care optimization to automated workflows and real-time insights, we empower healthcare providers to deliver better outcomes. Our personalized strategies improve efficiency, enhance decision-making, and drive innovation in the healthcare industry. Partner with Sklassics to transform your healthcare data into actionable solutions today!
          </p>
        </div>
      </section> */}
      <section
  className="relative w-full h-[120vh] sm:h-[130vh] md:h-[135vh] lg:h-[95vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('/src/assets/computervision-banner.png')`,
  }}
>
  <div className="absolute inset-0 bg-black/55 z-10" />

  <div
    className="relative z-20 px-4 sm:px-8 md:px-10 py-8 md:py-12 rounded-xl w-full max-w-full md:max-w-[70%] text-white text-center sm:text-left animate-fadeSlideIn"
    style={{
      animation: 'fadeSlideIn 1s ease-out forwards',
    }}
  >
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
   Health care
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we revolutionize healthcare with advanced data analytics and AI-driven solutions. From predictive diagnostics and patient care optimization to automated workflows and real-time insights, we empower healthcare providers to deliver better outcomes. Our personalized strategies improve efficiency, enhance decision-making, and drive innovation in the healthcare industry. Partner with Sklassics to transform your healthcare data into actionable solutions today!
    </p>
  </div>

  <style>
    {`
      @keyframes fadeSlideIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeSlideIn {
        animation: fadeSlideIn 1s ease-out forwards;
      }
    `}
  </style>
</section>

      {/* Information Cards Section */}
      <section className="px-4 md:px-12 py-10 flex flex-wrap justify-between gap-6">
        {/* Card 1 */}
        <div className="bg-yellow-300 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={healthcareDiagnostics} alt="Diagnostics" className="w-full object-cover" />
          <div className="p-6 bg-yellow-300">
            <h2 className="text-2xl font-bold mb-2">PREDICTIVE MAINTENANCE</h2>
            <p className="text-base mb-4">Predictive maintenance solutions that use AI to monitor equipment health & predict failures before they occur. Widely used in industries like manufacturing, transportation, & energy, this service helps reduce downtime, extend equipment lifespan & lower maintenance costs.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Condition Monitoring</li>
                <li>Predictive Analytics for Equipment Health</li>
                <li>Failure Pattern Recognition</li>
                <li>Maintenance Scheduling Optimization</li>
                <li>Downtime Minimization</li>
                <li>Data-Driven Decision Making</li>
                <li>Cost Reduction in Maintenance Activities</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Manufacturing Industry</li>
                <li>Automotive Industry</li>
                <li>Aerospace and Aviation</li>
                <li>Energy and Utilities</li>
                <li>Transportation and Logistics</li>
                <li>Mining and Heavy Equipment</li>
                <li>Healthcare Equipment Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={medicine} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-blue-500">
            <h2 className="text-2xl font-bold mb-2 text-white">PRECISION MEDICINE</h2>
            <p className="text-base mb-4 text-white">AI applications in precision medicine for tailoring treatments based on patient data, genetics, and medical history. These solutions are designed for healthcare providers and researchers to predict disease risks, personalize treatments, and improve patient outcomes.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Personalized Treatment Plans</li>
                <li>Genetic and Genomic Data Analysis</li>
                <li>Targeted Therapies</li>
                <li>Biomarker Identification</li>
                <li>Data-Driven Health Insights</li>
                <li>Patient-Centric Care Models</li>
                <li>Integrating AI and Machine Learning</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cancer Treatment and Immunotherapy</li>
                <li>Genetic Disorders Management</li>
                <li>Cardiovascular Disease Risk Prediction</li>
                <li>Rare Disease Diagnosis and Treatment</li>
                <li>Drug Development and Clinical Trials</li>
                <li>Pharmacogenomics for Personalized Drug Prescriptions</li>
                <li>Chronic Disease Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={publichealth} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-purple-600">
            <h2 className="text-2xl font-bold mb-2 text-white">PUBLIC HEALTH MONITORING AND DISEASE TRACKING</h2>
            <p className="text-base mb-4 text-white">AI-driven solutions for tracking disease outbreaks, monitoring public health trends, and supporting epidemiology research. By analyzing health data in real-time, these services aid governments and organizations in timely interventions and public health management.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-Time Data Collection</li>
                <li>Epidemiological Surveillance</li>
                <li>Disease Outbreak Prediction</li>
                <li>Contact Tracing and Exposure Mapping</li>
                <li>Risk Factor Analysis</li>
                <li>Health Systems Response Coordination</li>
                <li>Global Health Data Sharing</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Infectious Disease Monitoring </li>
                <li>Malaria and Tuberculosis Surveillance</li>
                <li>Vaccination and Immunization Tracking</li>
                <li>Chronic Disease Monitoring</li>
                <li>Air Quality and Environmental Health Monitoring</li>
                <li>Foodborne Illness Tracking</li>
                <li>Emergency Preparedness and Response</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-pink-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={shc} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-pink-500">
            <h2 className="text-2xl font-bold mb-2 text-white">ARTIFICIAL INTELLIGENCE FOR SMART HEALTHCARE MONITORING</h2>
            <p className="text-base mb-4 text-white">AI-powered solutions for continuous health monitoring using wearable devices & sensors. These services collect & analyze real-time data to detect early signs of health issues, providing individuals with proactive insights & enabling doctors to track patient progress remotely.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Wearable Health Devices</li>
                <li>Real-Time Health Data Collection</li>
                <li>Remote Patient Monitoring</li>
                <li>Integration with Electronic Health Records (EHR)</li>
                <li>Personalized Health Insights</li>
                <li>Predictive Health Analytics</li>
                <li>Telemedicine and Virtual Care</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Chronic Disease Management </li>
                <li>Post-Surgery Recovery Monitoring</li>
                <li>Elderly Care and Fall Detection</li>
                <li>Pregnancy and Maternal Health Tracking</li>
                <li>Fitness and Wellness Monitoring</li>
                <li>Mental Health Support and Stress Management</li>
                <li>Preventive Health and Early Detection of Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-teal-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aidrive} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-teal-600">
            <h2 className="text-2xl font-bold mb-2 text-white">AI-DRIVEN PERSONAL HEALTH ADVISORS</h2>
            <p className="text-base mb-4 text-white">Virtual health assistants powered by AI to offer personalized health advice, track fitness goals, and provide diet recommendations. These services assist individuals in managing their well-being and support preventive healthcare.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Personalized Health Recommendations</li>
                <li>Predictive Health Insightss</li>
                <li>Natural Language Processing for Health Queries</li>
                <li>Integration with Wearables and Health Data</li>
                <li>24/7 Access to Health Information</li>
                <li>Behavior Change and Lifestyle Modification Support</li>
                <li>Data-Driven Decision Making</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Personalized Diet and Nutrition Plans</li>
                <li>Fitness and Exercise Guidance</li>
                <li>Mental Health and Stress Management</li>
                <li>Chronic Disease Management (e.g., diabetes, hypertension)</li>
                <li>Medication Adherence Support</li>
                <li>Preventive Health Monitoring</li>
                <li>Virtual Health Consultations and Symptom Checkers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-orange-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={automated} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-orange-500">
            <h2 className="text-2xl font-bold mb-2 text-white">AUTOMATED HEALTH DIAGNOSTICS</h2>
            <p className="text-base mb-4 text-white">AI tools that assist doctors in diagnosing medical conditions through image recognition & patient records. These services help healthcare providers identify conditions faster & more accurately, improving patient outcomes and reducing diagnostic errors.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>AI-Powered Image and Data Analysis</li>
                <li>Real-Time Diagnostic Support</li>
                <li>Integration with Medical Imaging </li>
                <li>Machine Learning for Pattern Recognition</li>
                <li>Decision Support Systems for Healthcare Providers</li>
                <li>Early Detection of Diseases</li>
                <li>Reduced Diagnostic Errors</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Radiology and Medical Imaging Analysis</li>
                <li>Skin Cancer Detection via Image Recognition</li>
                <li>Cardiac Disease Diagnosis using ECG and Heart Rate Data</li>
                <li>Diabetic Retinopathy Detection</li>
                <li>Pathology and Lab Test Result Analysis</li>
                <li>Respiratory Disease Diagnosis </li>
                <li>Personalized Cancer Diagnosis and Treatment Plans</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-indigo-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={care6} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-indigo-500">
            <h2 className="text-2xl font-bold mb-2 text-white">AI IN PREDICTIVE MODELING FOR PUBLIC HEALTH</h2>
            <p className="text-base mb-4 text-white">AI-powered predictive models that analyze health data to forecast disease outbreaks & resource allocation. Governments & healthcare organizations use these tools to enhance public health planning.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Disease Outbreak Prediction and Monitoring</li>
                <li>Epidemiological Trend Forecasting</li>
                <li>Identification of High-Risk Populations</li>
                <li>Predicting Healthcare Resource Needs</li>
                <li>Environmental and Social Factor Analysis</li>
                <li>Machine Learning for Early Warning Systems</li>
                <li>Real-Time Data Integration and Analysis</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Predicting the Spread of Infectious Diseases </li>
                <li>Forecasting Malaria and Tuberculosis Outbreak</li>
                <li>Early Detection of Airborne Disease Outbreaks</li>
                <li>Public Health Policy Impact Simulation</li>
                <li>Healthcare Capacity Planning and Resource Allocation</li>
                <li>Predicting Chronic Disease Burden in Populations</li>
                <li>Assessing Environmental Risks (e.g., pollution, climate change)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-green-700 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={care7} alt="Virtual Assistant" className="w-full object-cover" />
          <div className="p-6 bg-green-700">
            <h2 className="text-2xl font-bold mb-2 text-white">ARTIFICIAL INTELLIGENCE FOR PREDICTIVE HEALTH RISK ASSESSMENT</h2>
            <p className="text-base mb-4 text-white">AI-powered personal finance tools that track expenses, manage budgets, and provide financial advice. These solutions help individuals achieve financial goals and manage spending effectively.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Risk Stratification Based on Individual Health Data</li>
                <li>Machine Learning Models for Disease Prediction</li>
                <li>Early Detection of Potential Health Issues</li>
                <li>Integration of Genetic, Environmental, and Lifestyle Factors</li>
                <li>Continuous Monitoring and Real-Time Risk Evaluation</li>
                <li>Personalized Risk Profiles and Recommendations</li>
                <li>Data-Driven Health Insights for Preventive Care</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cardiovascular Disease Risk Prediction</li>
                <li>Cancer Risk Assessment through Genetic & Lifestyle Factors</li>
                <li>Diabetes Risk Prediction Using Wearable Data</li>
                <li>Predicting Mental Health Conditions </li>
                <li>Assessing Risk for Chronic Respiratory Diseases </li>
                <li>Early Detection of Alzheimer’s Disease</li>
                <li>Personalized Preventive Healthcare Plans based on Risk Factors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-bold text-green-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Connect With Us!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to transform healthcare with AI? Let's discuss customized solutions that suit your organization's needs.
            </p>
          </div>
          <form className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1">NAME</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-1">EMAIL ADDRESS</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-1">MESSAGE</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HealthCare;
