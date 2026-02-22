import React from 'react';
import mr1 from '../../assets/mr1.png';
import mr2 from '../../assets/mr2.png';
import mr3 from '../../assets/mr3.png';
import mr4 from '../../assets/mr4.png';
import mr5 from '../../assets/mr5.png';
import mr6 from '../../assets/mr6.png';
import mr7 from '../../assets/mr7.png';
import mr8 from '../../assets/mr8.png';

const cardImages = [mr1, mr2, mr3, mr4, mr5, mr6, mr7, mr8];

const Marketing = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Marketing Solutions</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we deliver data-driven marketing solutions tailored to your business goals. From targeted campaigns and social media strategy to SEO optimization and analytics, we help brands connect with their audience effectively.
            <br /><br />
            Our personalized approach ensures maximum ROI, boosts visibility, and drives customer engagement. Let us turn your marketing challenges into growth opportunities.
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
    Marketing Solutions
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we deliver data-driven marketing solutions tailored to your business goals. From targeted campaigns and social media strategy to SEO optimization and analytics, we help brands connect with their audience effectively.
            <br /><br />
            Our personalized approach ensures maximum ROI, boosts visibility, and drives customer engagement. Let us turn your marketing challenges into growth opportunities.
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
          <img src={mr1} alt="Social Media Analysis" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">SOCIAL MEDIA ANALYSIS</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI solutions for analyzing social media data to monitor brand sentiment, track influencer impact, and detect trends. Ideal for marketing, PR, and brand management, these services enable businesses to understand public perception and improve online engagement.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Sentiment Analysis on Social Media Content</li>
                <li>Real-Time Monitoring of Brand Mentions</li>
                <li>Influencer Identification and Performance Evaluation</li>
                <li>Trend Detection and Topic Analysis</li>
                <li>Audience Demographics and Engagement Insights</li>
                <li>Competitor Benchmarking and Analysis</li>
                <li>Social Media Campaign Effectiveness Measurement</li>
                <li>AI-Powered Content Personalization and Targeting</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Brand Monitoring and Reputation Management</li>
                <li>Influencer Marketing Campaigns and ROI Analysis</li>
                <li>Real-Time Crisis Management and Response Strategy</li>
                <li>Social Listening for Customer Feedback and Insights</li>
                <li>Market Research and Consumer Behavior Analysis</li>
                <li>Identifying Emerging Trends and Consumer Interests</li>
                <li>Social Media Ad Campaign Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={mr2} alt="Retail Inventory Optimization" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">RETAIL INVENTORY OPTIMIZATION</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              Artificial Intelligence solutions to streamline inventory management, optimize reorder points, and reduce wastage in retail and e-commerce. By analyzing sales data, seasonality, and demand patterns, businesses can reduce costs, minimize stockouts, increase turnover rates & Reducing Overstock..
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Demand Forecasting and Inventory Prediction</li>
                <li>Real-Time Inventory Tracking and Monitoring</li>
                <li>Automated Replenishment and Stock Management</li>
                <li>Dynamic Pricing and Discounting Strategies</li>
                <li>AI-Powered Supply Chain Optimization</li>
                <li>Identifying and Reducing Overstock or Stockouts</li>
                <li>Product Categorization and Demand Clustering</li>
                <li>Integration with Point of Sale & Supply Chain Systems</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Predicting Product Demand and Adjusting Stock Levels</li>
                <li>Optimizing Reorder Points and Order Quantities</li>
                <li>AI-Driven Supply Chain and Logistics Management</li>
                <li>Dynamic Pricing Adjustments Based on Demand </li>
                <li>Reducing Overstock and Minimizing Inventory Costs</li>
                <li>Real-Time Stock Visibility and Automated Stock Alerts</li>
                <li>Enhancing Product Turnover with Recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cards 3-8 */}
        {/* {[...Array(6)].map((_, idx) => (
          <div key={idx} className="bg-violet-300 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
            <img src={cardImages[idx+2]} alt={`Marketing Card ${idx+3}`} className="w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">{
                [
                  'PERSONALIZED MARKETING AND ADS TARGETING',
                  'REAL-TIME ANALYTICS AND DECISION SUPPORT',
                  'ARTIFICIAL INTELLIGENCE FOR CUSTOMER FEEDBACK ANALYSIS',
                  'AI-POWERED CUSTOMER ENGAGEMENT ANALYTICS',
                  'AI FOR CHATBOT-DRIVEN MARKETING CAMPAIGNS',
                  'AI FOR AUTOMATED EMAIL MARKETING CAMPAIGNS',
                ][idx]
              }</h2>
              <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
                {
                  [
                    'AI-powered personalized marketing solutions that analyze customer data to deliver targeted ads and content. By leveraging machine learning, companies can optimize ad spend, increase engagement, and boost conversion rates across digital channels.',
                    'Real-time data analytics solutions to provide insights & support rapid decision-making. These services enable businesses to act on current data, adapt strategies, & respond to dynamic market conditions, benefiting sectors from retail to manufacturing.',
                    'AI solutions that analyze customer feedback from surveys, reviews, and social media to identify areas for improvement and optimize customer experience. These tools enable businesses to measure satisfaction, address pain points, and enhance overall service quality.',
                    'AI solutions for tracking and analyzing customer interactions across digital channels, such as websites, apps, and social media. These tools provide insights into customer behavior and preferences, enabling businesses to enhance engagement and drive brand loyalty.',
                    'AI chatbots that engage with customers on websites and social media, providing product recommendations, offers, and support. These tools enhance marketing efforts by offering immediate interaction and building customer relationships.',
                    'AI-powered platforms that automate email marketing by analyzing customer preferences and engagement patterns. These tools personalize messages, optimize send times, and increase open rates, enhancing marketing efficiency.',
                  ][idx]
                }
              </p>
              <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                  {[
                    [
                      'Data-Driven Customer Segmentation',
                      'Real-Time Behavioral Tracking and Analysis',
                      'Predictive Analytics for Customer Preferences',
                      'Dynamic Content Personalization',
                      'AI-Powered Ad Optimization and Bidding Strategies',
                      'Targeting Ads Based on User Interests & Demographics',
                      'A/B Testing and Campaign Effectiveness Measurement',
                      'Cross-Channel Marketing Integration',
                    ],
                    [
                      'Real-Time Data Collection and Processing',
                      'AI-Powered Predictive Analytics for Instant Decision Making',
                      'Automated Insights and Actionable Recommendations',
                      'Dynamic Dashboards for Performance Monitoring',
                      'Data-Driven Decision Support Systems',
                      'Integration of Multiple Data Sources for Holistic View',
                      'Anomaly Detection and Alert Systems',
                      'Scenario Simulation and Forecasting for Quick Decisions',
                    ],
                    [
                      'Sentiment Analysis on Customer Reviews and Surveys',
                      'Natural Language Processing (NLP) for Text Analysis',
                      'Automated Feedback Categorization and Tagging',
                      'Real-Time Insights and Trend Detection',
                      'Identifying Customer Pain Points & Areas for Improvement',
                      'Personalized Feedback Responses and Engagement',
                      'Voice of the Customer Analysis',
                      'Actionable Recommendations Based on Feedback Data',
                    ],
                    [
                      'Real-Time Engagement Tracking and Monitoring',
                      'Predictive Analytics for Customer Behavior',
                      'Personalization of Customer Interactions',
                      'Sentiment Analysis to Measure Customer Emotions',
                      'AI-Driven Recommendations for Enhanced Engagement',
                      'Multi-Channel Engagement Insights',
                      'Automated Customer Journey Mapping',
                      'Behavioral Segmentation for Targeted Campaigns',
                    ],
                    [
                      'Personalized Customer Interactions and Engagement',
                      'AI-Powered Chatbots for Lead Generation and Qualification',
                      'Real-Time Customer Support and Query Resolution',
                      'Automated Content Delivery and Recommendations',
                      'Behavioral Targeting and Predictive Analytics',
                      'Multichannel Campaign Management ',
                      'Conversational Commerce and Upselling Opportunities',
                    ],
                    [
                      'Personalized Email Content Based on Customer Behavior',
                      'AI-Powered Segmentation for Targeted Campaigns',
                      'Dynamic Content Generation for Customized Offers',
                      'Automated A/B Testing and Campaign Optimization',
                      'Real-Time Performance Tracking and Insights',
                      'AI-Driven Customer Journey Mapping',
                      'Engagement and Conversion Rate Prediction',
                    ],
                  ][idx].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {[
                    [
                      'Personalized Product Recommendations in E-commerce',
                      'Dynamic Ad Targeting on Social Media Platforms',
                      'Email Marketing Campaign Personalization',
                      'Predictive Retargeting for Abandoned Carts',
                      'Optimizing Ad Spend with AI-Based Budget Allocation',
                      'Marketing Campaigns Tailored to Target Audiences',
                      'Customer Journey Mapping for Improved Engagement',
                    ],
                    [
                      'Real-Time Financial Market Analysis and Trading',
                      'Monitoring Behavior for Personalized Recommendations',
                      'Supply Chain Management & Logistics Optimization',
                      'AI-Driven Fraud Detection and Prevention',
                      'Operational & Performance Optimization in Manufacturing',
                      'Real-Time Customer Service and Support with Chatbots',
                      'Predictive Maintenance for Equipment and Machinery',
                    ],
                    [
                      'Analyzing Customer Satisfaction through Surveys & Reviews',
                      'Identifying Emerging Issues from Social Media Mentions',
                      'Sentiment Analysis of Customer Support Interactions',
                      'Monitoring Brand Perception and Reputation in Real-Time',
                      'Optimizing Product or Service Offerings Based on Feedback',
                      'Improving Customer Experience with AI-Driven Insights',
                      'Marketing Campaigns Based on Customer Preferences',
                      'Reducing Churn by Addressing Negative Feedback Quickly',
                    ],
                    [
                      'Personalized Content and Product Recommendations',
                      'Predicting Customer Needs and Offering Tailored Solutions',
                      'Optimizing Email Marketing Campaigns ',
                      'Chatbot Support for Customer Queries & Engagement',
                      'Tracking and Improving Social Media Engagement Metrics',
                      'Customer Loyalty Programs with Predictive Insights',
                      'Customer Loyalty Programs with Predictive Insights',
                      'Monitoring Brand Sentiment Across Multiple Platforms',
                    ],
                    [
                      'Automating Lead Generation a',
                      'Personalized Recommendations & Promotions in Real-Time',
                      'Customer Engagement with Instant Chat Responses',
                      'Managing Customer Relationships ',
                      'Using Chatbots for Interactive Product Demos and Tutorials',
                      'Improving Customer Retention ',
                      'Collecting Customer Feedback and Insights Automatically.',
                    ],
                    [
                      'Sending Personalized Product Recommendations ',
                      'Triggering Automated Welcome Emails ',
                      'Segmenting Subscribers Based on Behavior & Preferences',
                      'Automating Re-engagement Campaigns for Inactive users.',
                      'Using Predictive Analytics to Optimize Email Sending Times',
                      'Creating Dynamic Email Content ',
                      'Analyzing & Adjusting Campaign Performance ',
                    ],
                  ][idx].map((uc, i) => (
                    <li key={i}>{uc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))} */}

{[...Array(6)].map((_, idx) => {
  const bgColors = [
    "bg-pink-300",
    "bg-gray-400",
    "bg-orange-500",
    "bg-purple-300",
    "bg-blue-400",
    "bg-red-300",
  ];

  return (
    <div
      key={idx}
      className={`${bgColors[idx]} text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4`}
    >
      <img
        src={cardImages[idx + 2]}
        alt={`Marketing Card ${idx + 3}`}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">
          {
            [
              "PERSONALIZED MARKETING AND ADS TARGETING",
              "REAL-TIME ANALYTICS AND DECISION SUPPORT",
              "ARTIFICIAL INTELLIGENCE FOR CUSTOMER FEEDBACK ANALYSIS",
              "AI-POWERED CUSTOMER ENGAGEMENT ANALYTICS",
              "AI FOR CHATBOT-DRIVEN MARKETING CAMPAIGNS",
              "AI FOR AUTOMATED EMAIL MARKETING CAMPAIGNS",
            ][idx]
          }
        </h2>
        <p className="text-base mb-4 mt-4" style={{ color: "#333300" }}>
          {
            [
              "AI-powered personalized marketing solutions that analyze customer data to deliver targeted ads and content...",
              "Real-time data analytics solutions to provide insights & support rapid decision-making...",
              "AI solutions that analyze customer feedback from surveys, reviews, and social media...",
              "AI solutions for tracking and analyzing customer interactions across digital channels...",
              "AI chatbots that engage with customers on websites and social media...",
              "AI-powered platforms that automate email marketing by analyzing customer preferences...",
            ][idx]
          }
        </p>
        <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
          <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
          {[
                    [
                      'Data-Driven Customer Segmentation',
                      'Real-Time Behavioral Tracking and Analysis',
                      'Predictive Analytics for Customer Preferences',
                      'Dynamic Content Personalization',
                      'AI-Powered Ad Optimization and Bidding Strategies',
                      'Targeting Ads Based on User Interests & Demographics',
                      'A/B Testing and Campaign Effectiveness Measurement',
                      'Cross-Channel Marketing Integration',
                    ],
                    [
                      'Real-Time Data Collection and Processing',
                      'AI-Powered Predictive Analytics for Instant Decision Making',
                      'Automated Insights and Actionable Recommendations',
                      'Dynamic Dashboards for Performance Monitoring',
                      'Data-Driven Decision Support Systems',
                      'Integration of Multiple Data Sources for Holistic View',
                      'Anomaly Detection and Alert Systems',
                      'Scenario Simulation and Forecasting for Quick Decisions',
                    ],
                    [
                      'Sentiment Analysis on Customer Reviews and Surveys',
                      'Natural Language Processing (NLP) for Text Analysis',
                      'Automated Feedback Categorization and Tagging',
                      'Real-Time Insights and Trend Detection',
                      'Identifying Customer Pain Points & Areas for Improvement',
                      'Personalized Feedback Responses and Engagement',
                      'Voice of the Customer Analysis',
                      'Actionable Recommendations Based on Feedback Data',
                    ],
                    [
                      'Real-Time Engagement Tracking and Monitoring',
                      'Predictive Analytics for Customer Behavior',
                      'Personalization of Customer Interactions',
                      'Sentiment Analysis to Measure Customer Emotions',
                      'AI-Driven Recommendations for Enhanced Engagement',
                      'Multi-Channel Engagement Insights',
                      'Automated Customer Journey Mapping',
                      'Behavioral Segmentation for Targeted Campaigns',
                    ],
                    [
                      'Personalized Customer Interactions and Engagement',
                      'AI-Powered Chatbots for Lead Generation and Qualification',
                      'Real-Time Customer Support and Query Resolution',
                      'Automated Content Delivery and Recommendations',
                      'Behavioral Targeting and Predictive Analytics',
                      'Multichannel Campaign Management ',
                      'Conversational Commerce and Upselling Opportunities',
                    ],
                    [
                      'Personalized Email Content Based on Customer Behavior',
                      'AI-Powered Segmentation for Targeted Campaigns',
                      'Dynamic Content Generation for Customized Offers',
                      'Automated A/B Testing and Campaign Optimization',
                      'Real-Time Performance Tracking and Insights',
                      'AI-Driven Customer Journey Mapping',
                      'Engagement and Conversion Rate Prediction',
                    ],
                  ][idx].map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
          {[
                    [
                      'Personalized Product Recommendations in E-commerce',
                      'Dynamic Ad Targeting on Social Media Platforms',
                      'Email Marketing Campaign Personalization',
                      'Predictive Retargeting for Abandoned Carts',
                      'Optimizing Ad Spend with AI-Based Budget Allocation',
                      'Marketing Campaigns Tailored to Target Audiences',
                      'Customer Journey Mapping for Improved Engagement',
                    ],
                    [
                      'Real-Time Financial Market Analysis and Trading',
                      'Monitoring Behavior for Personalized Recommendations',
                      'Supply Chain Management & Logistics Optimization',
                      'AI-Driven Fraud Detection and Prevention',
                      'Operational & Performance Optimization in Manufacturing',
                      'Real-Time Customer Service and Support with Chatbots',
                      'Predictive Maintenance for Equipment and Machinery',
                    ],
                    [
                      'Analyzing Customer Satisfaction through Surveys & Reviews',
                      'Identifying Emerging Issues from Social Media Mentions',
                      'Sentiment Analysis of Customer Support Interactions',
                      'Monitoring Brand Perception and Reputation in Real-Time',
                      'Optimizing Product or Service Offerings Based on Feedback',
                      'Improving Customer Experience with AI-Driven Insights',
                      'Marketing Campaigns Based on Customer Preferences',
                      'Reducing Churn by Addressing Negative Feedback Quickly',
                    ],
                    [
                      'Personalized Content and Product Recommendations',
                      'Predicting Customer Needs and Offering Tailored Solutions',
                      'Optimizing Email Marketing Campaigns ',
                      'Chatbot Support for Customer Queries & Engagement',
                      'Tracking and Improving Social Media Engagement Metrics',
                      'Customer Loyalty Programs with Predictive Insights',
                      'Customer Loyalty Programs with Predictive Insights',
                      'Monitoring Brand Sentiment Across Multiple Platforms',
                    ],
                    [
                      'Automating Lead Generation a',
                      'Personalized Recommendations & Promotions in Real-Time',
                      'Customer Engagement with Instant Chat Responses',
                      'Managing Customer Relationships ',
                      'Using Chatbots for Interactive Product Demos and Tutorials',
                      'Improving Customer Retention ',
                      'Collecting Customer Feedback and Insights Automatically.',
                    ],
                    [
                      'Sending Personalized Product Recommendations ',
                      'Triggering Automated Welcome Emails ',
                      'Segmenting Subscribers Based on Behavior & Preferences',
                      'Automating Re-engagement Campaigns for Inactive users.',
                      'Using Predictive Analytics to Optimize Email Sending Times',
                      'Creating Dynamic Email Content ',
                      'Analyzing & Adjusting Campaign Performance ',
                    ],
                  ][idx].map((uc, i) => (
              <li key={i}>{uc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
})}

      </section>

      {/* Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-bold text-orange-500">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Let’s Build Your Brand!</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to elevate your marketing game? Connect with us for tailored solutions to grow your business.
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
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
