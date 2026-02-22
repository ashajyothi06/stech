import React from 'react';
import dataAnalyticsImg from '../../assets/Data-Analytics.png';
import dashboardImg from '../../assets/interactivedashboards.png';
import dataImg from '../../assets/data.png';
import databaseImg from '../../assets/database.png';

const cardData = [
  {
    title: 'INTERACTIVE DASHBOARDS & REAL-TIME REPORTING',
    description: 'AI-driven dashboards for real-time data visualization and reporting. These services provide insights at a glance, allowing businesses to monitor KPIs, make quick decisions, and communicate performance effectively.',
    image: dashboardImg,
    bg: 'bg-yellow-400 text-black',
    points: [
      'Dynamic Data Visualization',
      'Real-Time Data Updates',
      'User-Friendly Interface',
      'Customizable Metrics and KPIs',
      'Enhanced Decision-Making',
      'Cross-Platform Accessibility',
    ],
    useCases: [
      'Monitoring Business Performance in Real-Time',
      'Analyzing Sales and Marketing Trends',
      'Tracking Customer Engagement Metrics',
      'Financial Reporting and Budget Analysis',
      'Operational Efficiency Monitoring',
      'Supply Chain and Inventory Management',
      'Employee Productivity Analysis',
    ],
  },
  {
    title: 'AI-DRIVEN MARKET RESEARCH AND TREND ANALYSIS',
    description: 'AI tools that gather and analyze market data to identify trends, consumer preferences. These services help businesses in industries such as retail, tech, & healthcare to stay ahead of market shifts and customer demands.',
    image: dataAnalyticsImg,
    bg: 'bg-green-400 text-black',
    points: [
      'Automated Data Collection',
      'Predictive Analytics',
      'Consumer Behavior Insights',
      'Real-Time Trend Monitoring',
      'Competitive Analysis',
      'Enhanced Market Segmentation',
    ],
    useCases: [
      'Analyzing Consumer Preferences and Sentiment',
      'Identifying Emerging Market Trends',
      'Competitive Landscape Analysis',
      'Price Optimization Strategies',
      'Targeted Advertising and Campaigns',
      'Product Development and Innovation',
      'Risk and Opportunity Assessment',
    ],
  },
  {
    title: 'DATA ENRICHMENT & QUALITY IMPROVEMENT',
    description: 'AI services for data enrichment, ensuring that databases contain accurate, up-to-date, and comprehensive information. Improve customer insights and support better decision-making by validating and supplementing existing data.',
    image: dataImg,
    bg: 'bg-blue-400 text-black',
    points: [
      'Enhancing Data Accuracy',
      'Filling Data Gaps',
      'Improving Decision-Making',
      'Ensuring Consistency Across Data Sets',
      'Data Standardization',
      'Increased Operational Efficiency',
    ],
    useCases: [
      'Enhancing Customer Profiles with Additional Information',
      'Correcting and Standardizing Address or Contact Details',
      'Merging Data from Multiple Sources for a Complete View',
      'Real-Time Data Validation and Cleansing',
      'Optimizing Marketing Campaigns with Clean Data',
      'Improving Data for Machine Learning Models',
      'Data Auditing and Compliance Reporting',
    ],
  },
  {
    title: 'AI FOR COGNITIVE INSIGHTS AND ANALYTICS',
    description: 'Advanced AI solutions that generate cognitive insights by analyzing large data sets to uncover hidden patterns, trends, and opportunities. Industries like finance, healthcare, and retail use these insights to guide strategic decision-making and innovation.',
    image: databaseImg,
    bg: 'bg-pink-300 text-black',
    points: [
      'Advanced Pattern Recognition',
      'Predictive Analytics',
      'Natural Language Processing (NLP)',
      'Real-Time Data Processing',
      'Contextual Insights',
      'Enhanced Decision-Making',
    ],
    useCases: [
      'Analyzing Customer Feedback for Sentiment and Trends',
      'Predicting Market Behavior and Consumer Preferences',
      'Automating Risk Assessment and Fraud Detection',
      'Optimizing Operations with Predictive Maintenance',
      'Enhancing Personalization in Marketing Campaigns',
      'Financial Forecasting and Scenario Analysis',
      'Real-Time Business Intelligence Dashboards',
    ],
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE FOR PREDICTIVE ANALYTICS IN RETAIL',
    description: 'AI-powered predictive analytics solutions that analyze retail data to forecast trends, manage inventory. These tools enable retailers to anticipate customer demand, and increase sales through data-driven insights.',
    image: dashboardImg,
    bg: 'bg-orange-400 text-black',
    points: [
      'Demand Forecasting',
      'Personalized Customer Experience',
      'Inventory Optimization',
      'Price Optimization',
      'Trend Prediction',
      'Improved Operational Efficiency',
    ],
    useCases: [
      'Predicting Product Demand to Avoid Stockouts',
      'Personalized Marketing and Promotions Based on Customer Behavior',
      'Dynamic Pricing Strategies to Maximize Revenue',
      'Optimizing Supply Chain and Logistics',
      'Identifying Customer Churn and Retention Strategies',
      'Predicting Seasonal Trends and Product Launch Success',
      'Enhancing In-Store Experience with AI Recommendations',
    ],
  },
  {
    title: 'AI FOR FINANCIAL FORECASTING IN INVESTMENT MANAGEMENT',
    description: 'AI tools for forecasting financial markets by analyzing historical data and economic indicators. Investment firms use these solutions to make informed decisions, identify market opportunities, and optimize portfolios.',
    image: dataAnalyticsImg,
    bg: 'bg-purple-300 text-black',
    points: [
      'Enhanced Risk Management',
      'Predictive Modeling for Asset Performance',
      'Real-Time Market Analysis',
      'Data-Driven Investment Decisions',
      'Portfolio Optimization',
      'Improved Accuracy in Financial Projections',
    ],
    useCases: [
      'Forecasting Stock and Asset Prices Based on Market Trends',
      'Predicting Market Volatility and Risk Exposure',
      'Optimizing Investment Portfolios Using AI-Driven Insights',
      'Identifying High-Return Investment Opportunities',
      'Automating Asset Allocation Decisions',
      'Analyzing Historical Data for Long-Term Investment Strategies on Businesses.',
      'Sentiment Analysis for Market Trends and Investor Behavior',
    ],
  },
];

const DataAnalytics = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Data Analytics</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we turn raw data into actionable insights with advanced data analytics solutions. From predictive modeling and trend analysis to real-time dashboards and automation, we empower businesses to make data-driven decisions with confidence. Our personalized analytics strategies drive efficiency, uncover opportunities, and fuel growth. Partner with Sklassics to elevate your data capabilities and transform insights into impact today!
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
    Data Analytics
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we turn raw data into actionable insights with advanced data analytics solutions. From predictive modeling and trend analysis to real-time dashboards and automation, we empower businesses to make data-driven decisions with confidence. Our personalized analytics strategies drive efficiency, uncover opportunities, and fuel growth. Partner with Sklassics to elevate your data capabilities and transform insights into impact today!
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


      {/* Info Cards Section */}
      <section className="px-4 md:px-12 py-10 flex flex-wrap justify-between gap-6">
        {cardData.map((card, idx) => (
          <div key={idx} className={`rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4 ${card.bg}`}>
            <img src={card.image} alt={card.title} className="w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">{card.title}</h2>
              <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>{card.description}</p>
              <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {card.useCases.map((uc, i) => (
                    <li key={i}>{uc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Want to elevate your data game? Contact us for custom Data Analytics solutions tailored to your business goals.
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
    </div>
  );
};

export default DataAnalytics;
