import React from 'react';
import aiFinancial from '../../assets/retail.png';
import aiPredictive from '../../assets/ai-predictiveanalytics.png';
import customerImg from '../../assets/customer.png';
import aiCognitive from '../../assets/financial.png';
import financeImg from '../../assets/ai-fraud.png';
import churn from '../../assets/churn.png';

const Finance = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Finance</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we empower financial institutions with advanced analytics and AI-driven solutions tailored to the finance sector. From risk management and predictive modeling to automated reporting and real-time insights, we help businesses navigate complex financial landscapes with confidence. Our personalized strategies optimize decision-making, enhance operational efficiency, and drive sustainable growth. Partner with Sklassics to transform your financial data into actionable results today!
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
    Finance
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we empower financial institutions with advanced analytics and AI-driven solutions tailored to the finance sector. From risk management and predictive modeling to automated reporting and real-time insights, we help businesses navigate complex financial landscapes with confidence. Our personalized strategies optimize decision-making, enhance operational efficiency, and drive sustainable growth. Partner with Sklassics to transform your financial data into actionable results today!
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
        <div className="bg-yellow-400 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aiFinancial} alt="Fraud Detection" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">RETAIL ANALYTICS AND CUSTOMER INSIGHTS</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI-powered solutions to gain deeper insights into customer behavior, optimize store layouts, and manage inventory in the retail industry. These services include customer segmentation, footfall analytics, recommendation engines, and predictive modeling for stock replenishment.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Customer Segmentation</li>
                <li>Personalization</li>
                <li>Inventory Management</li>
                <li>Dynamic Pricing</li>
                <li>Churn Prediction</li>
                <li>Operational Efficiency</li>
                <li>Marketing ROI Measurement</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li> Personalized Marketing Campaigns</li>
                <li>Inventory Optimization</li>
                <li>Dynamic Product Bundling</li>
                <li>Location-Based Marketing</li>
                <li>Fraud Detection</li>
                <li>Customer Experience Improvement</li>
                <li>Store Layout Optimization</li>
                <li>Price Elasticity Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aiPredictive} alt="Forecasting" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR RISK MANAGEMENT AND COMPLIANCE</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI solutions for real-time risk assessment, regulatory compliance, & governance. These services assist financial institutions, insurance companies, & corporations in managing regulatory requirements, monitoring for compliance issues, & reducing financial & operational risks.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Risk Identification</li>
                <li>Risk Assessment</li>
                <li>Risk Mitigation</li>
                <li>Compliance</li>
                <li>Monitoring and Reporting</li>
                <li>Governance</li>
                <li>Training and Awareness</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>IT and Cybersecurity</li>
                <li>Manufacturingt</li>
                <li>Retail</li>
                <li>Energy and Utilities</li>
                  <li>Government and Defense</li>
                  <li>Education and Research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-400 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={customerImg} alt="Forecasting" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CUSTOMER RETENTION AND LOYALTY PREDICTION</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              Predictive analytics for customer retention and loyalty programs, helping businesses identify at-risk customers and design targeted retention strategies, these solutions improve customer satisfaction and reduce churn.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Customer Segmentation</li>
                <li>Churn Prediction</li>
                <li>Loyalty Program Analysis</li>
                <li>Customer Lifetime Value (CLV) Estimation</li>
                <li>Behavioral Analytics</li>
                <li>Feedback and Satisfaction Monitoring</li>
                <li>Personalized Recommendations</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>E-commerce</li>
                <li>Telecommunications</li>
                <li>Financial Services</li>
                <li>Retail</li>
                <li>Hospitality and Travel</li>
                <li>Healthcare</li>
                  <li>Entertainment and Streaming Services</li>
                  <li>Software as a Service (SaaS)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-orange-400 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={aiCognitive} alt="Forecasting" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR FINANCIAL FORECASTING AND BUDGETING</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI tools for accurate financial forecasting, budgeting, & revenue prediction. These solutions are useful for finance teams and executives to make data-driven decisions, and drive business growth with greater precision.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Revenue Projection</li>
                <li>Expense Estimation</li>
                <li>Cash Flow Analysis</li>
                <li>Scenario Planning</li>
                <li>Variance Analysis</li>
                <li>Strategic Planning Integration</li>
                <li>Data-Driven Decision Making</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Corporate Financial Planning</li>
                <li>Investment Analysis</li>
                <li>Cost Optimization</li>
                <li>Risk Assessment</li>
                <li>Fundraising and Capital Allocation</li>
                <li>Startups and New Business Ventures</li>
                  <li>Nonprofit Organization Budgeting</li>
                  <li>Government and Public Sector Financial Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-pink-300 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={financeImg} alt="Forecasting" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">FRAUD PREVENTION IN INSURANCE</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI solutions tailored for detecting fraudulent claims and risk assessment in the insurance industry. These tools leverage data analytics & predictive modeling to identify patterns of fraud, helping insurers reduce losses & improve customer trust.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Fraud Detection Algorithms</li>
                <li>Claims Risk Assessment</li>
                <li>Behavioral Analytics</li>
                <li>Identity Verification</li>
                <li>Data Sharing and Collaboration</li>
                <li>Predictive Analytics</li>
                <li>Continuous Monitoring</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Auto Insurance Fraud Detection</li>
                <li>Health Insurance Fraud Prevention</li>
                <li>Life Insurance Fraud Risk Assessment</li>
                <li>Property Damage Claims Validation</li>
                <li>Worker’s Compensation Fraud Detection</li>
                <li>Fake Policy and Premium Scams Prevention</li>
                <li>Cyber Insurance Fraud Detection</li>
           </ul>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-purple-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={churn} alt="Forecasting" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">CUSTOMER CHURN PREDICTION</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI-driven churn prediction models to identify customers likely to leave a service or product. Industries like telecom, banking, and retail use these insights to develop retention strategies, enhance customer experience, and reduce churn.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Churn Rate Analysis</li>
                <li>Customer Segmentation</li>
                <li>Predictive Modeling</li>
                <li>Retention Strategies</li>
                <li>Behavioral Analytics</li>
                <li>Customer Feedback Analysis</li>
                <li>Lifetime Value Estimation</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Telecommunications</li>
                <li>E-commerce</li>
                <li>Software as a Service (SaaS)</li>
                <li>Banking and Financial Services</li>
                <li>Retail</li>
                <li>Media and Entertainment</li>
                <li>Healthcare and Insurance</li>
           </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <p className="text-sm font-bold text-orange-500">GET IN TOUCH</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Reach Out!</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Want to implement AI in your financial services? Contact us today for custom solutions tailored to your financial goals.
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
    </div>
  );
};

export default Finance;
