import React from 'react';
import nlpTextMiningImg from '../../assets/nlp-textmining.png';
import searchImg from '../../assets/search.png';
import searchLanguageImg from '../../assets/searchlanguage.png';
import realtimeImg from '../../assets/realtime.png';
import contentImg from '../../assets/content.png';
import aiImg from '../../assets/ai.png';

const NLP = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Natural Language Processing</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we transform unstructured data into actionable insights with advanced NLP solutions. From sentiment analysis and predictive modeling to chatbots and automation, we help businesses unlock the power of language. Our personalized AI-driven strategies drive smarter decision-making and growth. Partner with Sklassics to elevate your data capabilities today!
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
    Natural Language Processing
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we transform unstructured data into actionable insights with advanced NLP solutions. From sentiment analysis and predictive modeling to chatbots and automation, we help businesses unlock the power of language. Our personalized AI-driven strategies drive smarter decision-making and growth. Partner with Sklassics to elevate your data capabilities today!
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
        {/* Card - Text Mining & Knowledge Extraction */}
        <div className="bg-yellow-400 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={nlpTextMiningImg} alt="Sentiment Analysis" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">TEXT MINING & KNOWLEDGE EXTRACTION</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-driven text mining solutions to extract valuable insights from large volumes of unstructured text data. These services are used in research, compliance, and business intelligence to uncover hidden patterns, trends, and knowledge.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Automated Data Processing</li>
                <li>Natural Language Understanding (NLU)</li>
                <li>Scalable and Adaptive Solutions</li>
                <li>Insights Discovery</li>
                <li>Customizable Tools</li>
                <li>Enhanced Decision-Making</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Customer Feedback Analysis</li>
                <li>Fraud Detection</li>
                <li>Healthcare Insights</li>
                <li>Legal and Compliance</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>News Aggregation and Summarization</li>
                <li>Recruitment Automation</li>
                <li>Supply Chain Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Search & Recommendation Systems */}
        <div className="bg-purple-200 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={searchImg} alt="Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">SEARCH & RECOMMENDATION SYSTEMS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-powered search engines and recommendation algorithms that enhance user experiences across e-commerce platforms, content websites, and social media. These tools help deliver personalized recommendations, improving user engagement.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Personalized User Experience</li>
                <li>Context-Aware Recommendations</li>
                <li>Dynamic Search Results</li>
                <li>Real-Time Analytics Integration</li>
                <li>Learning and AI-Powered Algorithms</li>
                <li>Multi-Platform Support</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>E-commerce product recommendations</li>
                <li>Personalized content delivery in streaming platforms</li>
                <li>Job portal search and candidate matching</li>
                <li>Travel and hospitality bookings</li>
                <li>Online education course suggestions</li>
                <li>Customized healthcare treatment options</li>
                <li>Real estate property search optimization</li>
                <li>News and media article recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Speech and Language Translation */}
        <div className="bg-blue-300 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={searchLanguageImg} alt="Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">SPEECH AND LANGUAGE TRANSLATION</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-powered solutions for translating speech and text in real-time, supporting multilingual communication. Industries like tourism, education, and customer service benefit from improved accessibility and cross-cultural engagement.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Multilingual Communication</li>
                <li>Real-Time Translation</li>
                <li>Natural Language Understanding (NLU)</li>
                <li>Cross-Cultural Accessibility</li>
                <li>Speech-to-Text Integration</li>
                <li>Text-to-Speech Solutions</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Customer Support in Multiple Languages</li>
                <li>Global Business Meetings and Conferences</li>
                <li>Educational Content Localization</li>
                <li>Communication Across Borders</li>
                <li>Travel and Tourism Assistance</li>
                <li>Multilingual E-Learning Platforms</li>
                <li>Automatic Subtitling for Videos</li>
                <li>Translation of Technical Documents and Manuals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Real-Time Speech Analytics */}
        <div className="bg-green-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={realtimeImg} alt="Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">REAL-TIME SPEECH ANALYTICS</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI tools that analyze spoken language in real time for call centers and customer service. These solutions can detect emotion, identify keywords, and provide live feedback, helping improve service quality and customer satisfaction.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Real-Time Emotion Detection</li>
                <li>Sentiment Analysis from Speech</li>
                <li>Automatic Speech Transcription</li>
                <li>Context-Aware Insights</li>
                <li>Speaker Identification and Verification</li>
                <li>Call Quality Monitoring</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Customer Support Quality Monitoring</li>
                <li>Sales Performance Analysis</li>
                <li>Fraud Detection in Financial Calls</li>
                <li>Healthcare Patient Interactions Monitoring</li>
                <li>Sentiment Tracking in Contact Centers</li>
                <li>Employee Training and Feedback Improvement</li>
                <li>Compliance Monitoring in Regulated Industries</li>
                <li>Voice-Driven Market Research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - Content and Product Recommendations */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={contentImg} alt="Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CONTENT AND PRODUCT RECOMMENDATIONS</h2>
            <p className="text-base mb-4 mt-6" style={{ color: '#333300' }}>AI-driven recommendation engines personalize content suggestions in media, e-commerce, and streaming platforms. These tools analyze customer behavior to suggest products tailored to their preferences, boosting sales.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Data-Driven Personalization</li>
                <li>User Behavior Analysis</li>
                <li>Context-Aware Recommendations</li>
                <li>Machine Learning Algorithms</li>
                <li>Real-Time Adaptation</li>
                <li>Cross-Platform Integration</li>
                <li>Dynamic Content Delivery</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>E-commerce product suggestions</li>
                <li>Personalized video streaming content</li>
                <li>Custom news article recommendations</li>
                <li>Targeted advertising campaigns</li>
                <li>Personalized learning paths in education</li>
                <li>Dynamic offers and discounts in retail</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card - AI for E-Commerce Search Optimization */}
        <div className="bg-teal-600 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aiImg} alt="Chatbot" className="w-full object-cover" />
            <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR E-COMMERCE SEARCH OPTIMIZATION</h2>
            <p className="text-base mb-4" style={{ color: '#333300' }}>AI-driven search engines that enhance product search accuracy and relevance for e-commerce websites. These solutions analyze user behavior and intent to display the most relevant products, improving user satisfaction and sales conversion rates.</p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Improved Search Accuracy</li>
                <li>Personalized Search Results</li>
                <li>Natural Language Processing (NLP) for Queries</li>
                <li>Real-Time Search Analytics</li>
                <li>AI-Powered Autocomplete and Suggestions</li>
                <li>Visual Search Capabilities</li>
                <li>Advanced Filtering and Sorting</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Product search optimization</li>
                <li>Personalized search results based on user behavior</li>
                <li>Search recommendation for similar or related items</li>
                <li>Visual search for finding products based on images</li>
                <li>Intelligent autocomplete for faster product searches</li>
                <li>Real-time data analysis to improve search relevance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Want to leverage NLP for your business? Contact us to get personalized solutions that fit your unique goals.
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

export default NLP;
