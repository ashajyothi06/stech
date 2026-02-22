import React from 'react';
import hr1 from '../../assets/hr1.png';
import hr2 from '../../assets/hr2.png';
import hr3 from '../../assets/hr3.png';
import hr4 from '../../assets/hr4.png';
import hr5 from '../../assets/hr5.png';
import hr6 from '../../assets/hr6.png';


const HRWorks = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Human Resource</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we empower HR teams with advanced analytics and AI-driven solutions designed for the modern workforce. From talent acquisition and employee engagement insights to predictive workforce planning and automation, we help businesses optimize their human capital strategies. Our personalized solutions enhance decision-making, improve efficiency, and drive organizational growth. Partner with Sklassics to transform your HR processes and unlock the full potential of your workforce today!
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
    Human Resource
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we empower HR teams with advanced analytics and AI-driven solutions designed for the modern workforce. From talent acquisition and employee engagement insights to predictive workforce planning and automation, we help businesses optimize their human capital strategies. Our personalized solutions enhance decision-making, improve efficiency, and drive organizational growth. Partner with Sklassics to transform your HR processes and unlock the full potential of your workforce today!
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
        {/* Card 1 */}
        <div className="bg-yellow-300 text-black rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr1} alt="Recruitment Automation" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">HUMAN CAPITAL ANALYTICS</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              Advanced analytics solutions for workforce management and employee satisfaction. By analyzing employee data, organizations can optimize hiring, predict employee turnover, measure engagement, and tailor training programs for skill development.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Employee Performance Analysis</li>
                <li>Talent Acquisition and Recruitment Optimization</li>
                <li>Predictive Analytics for Employee Retention</li>
                <li>Workforce Productivity Tracking</li>
                <li>Learning and Development Effectiveness</li>
                <li>Compensation and Benefits Analysis</li>
                <li>Diversity and Inclusion Metrics</li>
                <li>Employee Engagement Measurement</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Artificial Intelligence for Predicting Employee Turnover & Developing Retention Strategies</li>
                <li>Enhancing Recruitment Processes with Data-Driven Insights</li>
                <li>Assessing & Improving Training and Development Programs</li>
                <li>Optimizing Compensation and Benefits Plans</li>
                <li>Monitoring and Improving Employee Engagement</li>
                <li>Analyzing Workforce Productivity for Efficiency</li>
                <li>Evaluating the Impact of Diversity and Inclusion Programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr2} alt="Workforce Analytics" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">RESOURCE & WORKFORCE OPTIMIZATION</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI tools for optimizing resource allocation, staffing, and workforce management. By predicting demand and analyzing workforce capabilities, these solutions support industries like healthcare, retail, and logistics in meeting demand efficiently.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Predictive Scheduling and Demand Forecasting</li>
                <li>AI-Driven Talent Allocation and Resource Planning</li>
                <li>Workforce Productivity Monitoring and Enhancement</li>
                <li>Real-Time Resource Utilization Tracking</li>
                <li>Automated Task Assignment and Workflow Management</li>
                <li>Skill Gap Analysis and Development Recommendations</li>
                <li>Performance and Efficiency Analytics</li>
                <li>Optimizing Employee Engagement and Retention</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Dynamic Workforce Scheduling in Retail and Hospitality</li>
                <li>Talent Allocation for Project Management in Consulting</li>
                <li>AI-Driven Resource Allocation in Healthcare </li>
                <li>Automated Workflow Optimization in Customer Service</li>
                <li>Predicting Employee Performance for Resource Planning</li>
                <li>Skill-Based Task Allocation in IT and Engineering Teams</li>
                <li>Enhancing Supply Chain and Logistics Efficiency through AI-driven Workforce Management.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr3} alt="HR Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AUTOMATED WORKFLOW AND TASK MANAGEMENT</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI-driven tools for automating business workflows &  task management. These solutions streamline operations by automating repetitive tasks, & tracking progress, helping businesses improve efficiency & reduce human error.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>AI-Driven Task Assignment and Prioritization</li>
                <li>Process Automation for Repetitive Tasks</li>
                <li>Workflow Optimization and Streamlining</li>
                <li>Real-Time Monitoring of Task Progress</li>
                <li>Intelligent Decision-Making Support</li>
                <li>AI-Powered Collaboration Tools</li>
                <li>Time and Resource Management Automation</li>
                <li>Integration with Existing Systems and Tools</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Automating Customer Support with Chatbots</li>
                <li>AI-Powered Project Management and Task Allocation</li>
                <li>Streamlining Document Processing and Approval Workflows</li>
                <li>Automated Email Filtering and Response Management</li>
                <li>AI-Driven Inventory and Supply Chain Management</li>
                <li>Intelligent Scheduling and Appointment Booking Systems</li>
                <li>Automating Compliance and Regulatory Reporting</li>
                <li>Enhancing Marketing Campaigns with Automated Content Creation and Distribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr4} alt="HR Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR TALENT ACQUISITION AND RECRUITMENT</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI-powered recruitment tools that automate resume screening, candidate matching, and interview scheduling. These systems help HR departments streamline hiring processes, reduce bias, and identify the best candidates more efficiently.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Automated Resume Screening and Shortlisting</li>
                <li>Predictive Analytics for Candidate Success</li>
                <li>Candidate Matching Based on Skills and Experience </li>
                <li>Bias Reduction in Hiring Processes</li>
                <li>Talent Pool Management and Engagement</li>
                <li>Workforce Demand Forecasting</li>
                <li>Data-Driven Recruitment Strategies</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Screening Resumes and Identifying Top Candidates</li>
                <li>Automating Candidate Outreach and Engagement</li>
                <li>Conducting AI-Based Video Interviews and Assessments</li>
                <li>Predicting Candidate Job Fit and Retention</li>
                <li>Enhancing Diversity in Recruitment by Reducing Bias</li>
                <li>Optimizing Job Descriptions and Job Postings with AI</li>
                <li>AI-Driven Sourcing and Passive Candidate Engagement</li>
                <li>Enhancing workforce Planning and Demand Forecasting for Hiring Needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr5} alt="HR Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">ARTIFICIAL INTELLIGENCE FOR HUMAN RESOURCES ANALYTICS</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              AI-powered analytics tools that evaluate employee performance, engagement, & retention. HR departments use these insights to improve talent management, reduce turnover, & create a better workplace culture.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Predictive Analytics for Employee Retention</li>
                <li>Talent Acquisition and Recruitment Optimization</li>
                <li>Employee Performance and Engagement Monitoring</li>
                <li>Workforce Planning and Forecasting</li>
                <li>Compensation and Benefits Analysis</li>
                <li>Diversity and Inclusion Metrics</li>
                <li>Sentiment Analysis from Employee Feedback</li>
                <li>AI-Powered Learning and Development Insights</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Predicting Employee Turnover and Retention Strategies</li>
                <li>Optimizing Employee Training and Development Programs</li>
                <li>Enhancing Employee Engagement and Well-being</li>
                <li>Workforce Demand and Supply Forecasting</li>
                <li>Identifying and Reducing Bias in Hiring and Promotions</li>
                <li>Analyzing Compensation Equity and Benefits Usage</li>
                <li>Driving Diversity and Inclusion with Data Insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={hr6} alt="HR Chatbot" className="w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-black">AI FOR PREDICTIVE RECRUITMENT AND WORKFORCE PLANNING</h2>
            <p className="text-base mb-4 mt-4" style={{ color: '#333300' }}>
              Artificial Intelligence tools that analyze workforce data to forecast hiring needs, skill gaps, and turnover rates. HR teams use these tools for effective recruitment planning and to improve talent management strategies.
            </p>
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Key Points</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Predictive Analytics for Hiring Needs</li>
                <li>Talent Pool Identification and Management</li>
                <li>Data-Driven Candidate Screening and Matching</li>
                <li>Workforce Demand and Supply Forecasting</li>
                <li>Skill Gap Analysis and Future Talent Planning</li>
                <li>Automating Candidate Sourcing and Engagement</li>
                <li>AI-Powered Interviewing and Assessment Tools</li>
                <li>Dynamic Resource Allocation and Scheduling</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Use Cases</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Forecasting Workforce Needs Based on Business Growth</li>
                <li>Optimizing Recruitment Strategies Using Predictive Models</li>
                <li>Automating Resume Screening and Shortlisting</li>
                <li>Identifying and Engaging Passive Candidates</li>
                <li>Predicting Candidate Success and Job Fit</li>
                <li>AI Succession Planning & Talent Pipeline Development.</li>
                <li>Analyzing & Addressing Skill Gaps for Future Workforce .</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-bold text-orange-500">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Start Your HR Transformation</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Let's enhance your workforce experience with AI-driven HR solutions. Reach out today for a consultation.
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

export default HRWorks;
