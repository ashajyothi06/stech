import React from 'react';
import voiceRecognitionImg from '../../assets/voice-recognition.png';
import automatedImg from '../../assets/automated.png';
import emotionDetectionImg from '../../assets/emotion-detection.png';
import videoSurveillanceImg from '../../assets/video-survilliance.png';
import safetyMonitoringImg from '../../assets/safety-monitoring.png';

const ComputerVision = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[120vh] sm:h-[100vh] md:h-[90vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Computer Vision</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we offer cutting-edge computer vision services to transform the way you
            interact with visual data. From image recognition to object detection and advanced
            video analytics, our solutions empower automation, enhance decision-making, and unlock
            new opportunities across industries.
          </p>
        </div>
      </section> */}
      <section
  className="relative w-full h-[100vh] sm:h-[120vh] md:h-[135vh] lg:h-[95vh] flex items-center justify-center bg-cover bg-center"
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
      Computer Vision
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
      At Sklassics, we offer cutting-edge computer vision services to transform the way you
      interact with visual data. From image recognition to object detection and advanced
      video analytics, our solutions empower automation, enhance decision-making, and unlock
      new opportunities across industries.
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
        {/* Card - Voice Recognition & Speech Analysis */}
        <div className="bg-green-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={voiceRecognitionImg} alt="Voice Recognition" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">VOICE RECOGNITION & SPEECH ANALYSIS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-powered visual analysis that allows systems to interpret and make decisions based on visual data. Applications include facial recognition, object detection, medical imaging, quality inspection in manufacturing, and traffic monitoring in smart cities.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Speaker identification</li>
                <li>Speaker verification</li>
                <li>Real-time speech recognition</li>
                <li>Noise handling</li>
                <li>Speech-to-text conversion</li>
                <li>Sentiment analysis</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Security and authentication</li>
                <li>Personalization</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Marketing and sales</li>
                <li>Media and entertainment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Automated Document Processing */}
        <div className="bg-orange-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={automatedImg} alt="Automated Document Processing" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AUTOMATED DOCUMENT PROCESSING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AAI-powered document processing & OCR solutions to extract information from paper documents, PDFs, and images. Used in industries like finance, healthcare, & legal, these tools streamline data entry, reduce human error, and automate workflows.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Digitization of printed or handwritten text</li>
                <li>Accuracy improvements through AI and machine learning</li>
                <li>Multi-language recognition</li>
                <li>Structured and unstructured data extraction</li>
                <li>Automated data entry and validation</li>
                <li>Integration with workflow management systems</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Automating invoice processing in finance</li>
                <li>Digitizing legal documents and contracts</li>
                <li>Processing application forms in banking and insurance</li>
                <li>Extracting text from scanned books or historical records</li>
                <li>Identity verification using documents</li>
                <li>Automating healthcare records and prescriptions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Human Emotion Detection */}
        <div className="bg-yellow-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={emotionDetectionImg} alt="Emotion Detection" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR HUMAN EMOTION DETECTION</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI tools designed to detect human emotions through facial expressions, voice analysis, and physiological data. Used in applications such as customer service and marketing, these systems enhance understanding of human responses and improve user engagement.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Recognition of emotions through facial expressions</li>
                <li>Analysis of voice tone and pitch</li>
                <li>Textual sentiment analysis using NLP</li>
                <li>Multimodal emotion recognition</li>
                <li>Real-time processing and response</li>
                <li>Application of AI and deep learning for high accuracy</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li> Enhancing customer experience through sentiment analysis</li>
                <li>Mental health monitoring and wellness apps</li>
                <li>Improving human-machine interaction in virtual assistants</li>
                <li>Adaptive learning systems in education</li>
                <li>Security and surveillance through behavioral analysis</li>
                <li>Personalized marketing and advertising based on emotions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Video Surveillance */}
        <div className="bg-purple-700 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={videoSurveillanceImg} alt="Video Surveillance" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR VIDEO SURVEILLANCE AND SECURITY</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>Artificial Intelligence-based video surveillance systems that use computer vision to monitor and analyze security footage in real time. These services are useful for detecting unusual behavior, identifying intruders, and ensuring the safety of assets, people, and premises.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-time object and person detection</li>
                <li>Facial recognition for access control and identification</li>
                <li>Integration with existing security systems</li>
                <li>Automated threat detection and alerting</li>
                <li>Data-driven insights for improved security planning</li>
                <li>Enhanced video analytics with deep learning algorithms</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li> Crime prevention through real-time monitoring</li>
                <li>Access control in secure facilities using facial recognition</li>
                <li>Monitoring public spaces for crowd control and safety</li>
                <li>Identifying suspicious behavior in banking environments</li>
                <li>Improving workplace safety by monitoring hazardous areas</li>
                <li>Enhanced video analytics with deep learning algorithms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - AI FOR WORKPLACE SAFETY MONITORING */}
        <div className="bg-yellow-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={safetyMonitoringImg} alt="AI FOR WORKPLACE SAFETY MONITORING" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR WORKPLACE SAFETY MONITORING</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-driven tools for monitoring workplace safety by analyzing camera feeds, detecting hazards, and alerting personnel in real time. These systems are valuable in high-risk industries like construction, manufacturing, and mining.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-time hazard detection and alerts</li>
                <li>Monitoring of worker health and well-being</li>
                <li>Integration with wearable devices for tracking vital signs</li>
                <li>Identification of unsafe behaviors or practices</li>
                <li>Automation of safety audits and reporting</li>
                <li>Predictive analytics to prevent accidents and injuries</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Detecting falls or injuries in real-time in high-risk environments</li>
                <li>Monitoring employee fatigue levels to prevent accidents</li>
                <li>Identifying safety hazards, such as gas leaks or machinery malfunctions</li>
                <li>Ensuring compliance with safety regulations and standards</li>
                <li>Providing real-time feedback and safety reminders to workers</li>
                <li>Analyzing workplace incidents for continuous safety improvement</li>
                <li>Automating the reporting and documentation of safety checks and incidents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ContactForm */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque
              congue nec eu risus. In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra
              efficitur elit.
            </p>
          </div>
          <form className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">NAME</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">EMAIL ADDRESS</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">MESSAGE</label>
              <textarea rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ComputerVision;
