import React from 'react';
import ed1 from '../../assets/ed1.png';
import ed2 from '../../assets/ed2.png';
import ed3 from '../../assets/ed3.png';
import ed4 from '../../assets/ed4.png';

const Education = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/computervision-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 px-10 py-16 max-w-4xl text-white text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Education</h1>
          <p className="text-2xl md:text-2xl font-normal max-w-2xl leading-relaxed">
            At Sklassics, we design data-driven strategies to revolutionize learning and engagement. From personalized learning solutions to advanced analytics, we empower institutions to deliver impactful results.
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
    Education
    </h1>
    <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
    At Sklassics, we design data-driven strategies to revolutionize learning and engagement. From personalized learning solutions to advanced analytics, we empower institutions to deliver impactful results.
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
          <img src={ed1} alt="Tutoring" className="w-full object-cover" />
          <div className="p-6 bg-yellow-300">
            <h1 className="text-2xl font-bold mb-2">PERSONALIZED LEARNING AND ADAPTIVE EDUCATION USING AI</h1>
            <p className="text-base mb-4">Artificial Intelligence powered solutions for personalized learning experiences in education. By analyzing student performance and learning styles, these tools help educators create adaptive curriculums, enhance engagement, and support individualized student success.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>AI-Powered Personalized Learning Paths</li>
                <li>Adaptive Content Delivery Based on Student Progress</li>
                <li>Real-Time Assessment and Feedback</li>
                <li>Data-Driven Insights for Individual Learning Needs</li>
                <li>Intelligent Tutoring Systems and Virtual Assistants</li>
                <li>Gamification and Engagement Tools for Learning</li>
                <li>Learning Style Adaptation Based on Student Preferences</li>
                <li>Continuous Monitoring and Skill Gap Identification</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Customizing Content Based on Student Performance</li>
                <li>Real-Time Feedback and Support through AI Tutors</li>
                <li>Identifying Struggling Students & Providing Assistance</li>
                <li>Adaptive Testing & Assessments Tailored to Student Ability</li>
                <li>Gamified Learning Environments for Increased Engagement</li>
                <li>AI-Driven Career Path Based on Student Strengths</li>
                <li>Supporting Special Education with Tailored Learning Tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={ed2} alt="Predictive Analytics" className="w-full object-cover" />
          <div className="p-6 bg-green-500">
            <h1 className="text-2xl font-bold mb-2 text-white">ARTIFICIAL INTELLIGENCE FOR EDUCATION AND EXAM ANALYTICS</h1>
            <p className="text-base mb-4 text-white">AI tools for education, including performance analytics for students & automated exam grading systems. These services enable educational institutions to offer personalized learning experiences, track student progress, & reduce administrative burdens on educators.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Automated Grading and Assessment Tools</li>
                <li>Predictive Analytics for Student Performance</li>
                <li>Identifying Learning Gaps and Weak Areas</li>
                <li>AI-Powered Curriculum Optimization</li>
                <li>Real-Time Feedback and Progress Tracking</li>
                <li>Personalization of Learning Materials and Resources</li>
                <li>Sentiment Analysis of Student Feedback and Engagement</li>
                <li>Data-Driven Insights for Improving Exam Strategies</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Grading of Multiple-Choice & Open-Ended Questions</li>
                <li>Predicting Student Success and Identifying At-Risk Students</li>
                <li>Personalized Study Plans Based on Performance</li>
                <li>Analyse Exam Results to Identify Common Knowledge Gaps</li>
                <li>Optimizing Exam Timings and Question Difficulty</li>
                <li>Analytics for Tracking Student Engagement During Exams</li>
                <li>Enhancing Teacher’s Decision-Making with Data Insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={ed3} alt="Translation" className="w-full object-cover" />
          <div className="p-6 bg-blue-500">
            <h1 className="text-2xl font-bold mb-2 text-white">AI-POWERED LANGUAGE MODELING IN EDUCATION</h1>
            <p className="text-base mb-4 text-white">AI solutions that assist in language learning and literacy by providing personalized language modeling and feedback. These tools are used in educational apps and platforms to enhance language acquisition and improve comprehension skills.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Natural Language Processing (NLP) for Text Analysis</li>
                <li>Personalized Learning Content Generation</li>
                <li>AI-Driven Speech Recognition and Pronunciation Feedback</li>
                <li>Language Translation and Multilingual Support</li>
                <li>Text Summarization and Content Simplification</li>
                <li>Chatbots and Virtual Assistants for Student Interaction</li>
                <li>Writing Assistance and Grammar Correction Tools</li>
                <li>Enhancing Reading Comprehension and Writing Skills</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Generating Personalized Reading and Writing Assignments</li>
                <li>Providing Instant Feedback on Grammar, Spelling, and Style</li>
                <li>Enabling Language Translation for Diverse Learners</li>
                <li>Assisting in Language Learning</li>
                <li>AI-Powered Virtual Tutors for Interactive Learning Sessions</li>
                <li>Summarizing Long Texts for Easier Understanding & Study</li>
                <li>Analyzing Student Writing & Offering Suggestions</li>
                <li>Intelligent Chatbots for Student Engagement and Q&A</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-orange-400 text-white rounded-lg w-full md:w-[48%] shadow-lg overflow-hidden flex flex-col mb-4">
          <img src={ed4} alt="Another Card" className="w-full object-cover" />
          <div className="p-6 bg-orange-400">
            <h1 className="text-2xl font-bold mb-2 text-white">PERSONALIZED LEARNING PLATFORMS WITH AI</h1>
            <p className="text-base mb-4 text-white">AI-driven educational platforms that adapt to individual learning styles, providing customized content & progress tracking. Used in schools & online learning, these platforms enhance learning outcomes by catering to each student’s unique needs.</p>
            <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">KEY POINTS</h3>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>Adaptive Learning Paths Based on Individual Progress</li>
                <li>Real-Time Performance Tracking and Analytics</li>
                <li>AI-Powered Content Recommendations and Customization</li>
                <li>Personalized Feedback and Support for Students</li>
                <li>Learning Style Adaptation Using AI Algorithms</li>
                <li>Integration of Gamification and Interactive Learning Tools</li>
                <li>Continuous Evaluation & Adjustment of Learning Materials</li>
                <li>Predictive Analytics for Student Success and Retention</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">USE CASES</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Tailoring Learning Paths Based on Student Performance</li>
                <li>AI-Driven Content Delivery for Different Learning Styles</li>
                <li>Personalized Quizzes and Assessments</li>
                <li>Adaptive Testing for Real-Time Skill Level Measurement</li>
                <li>Offering Instant Feedback and Suggestions</li>
                <li>Predicting and Addressing Student Struggles Early with AI</li>
                <li>Peer Collaboration with AI-Recommended Group Work</li>
                <li>Teachers with Data-Driven Insights on Student Progress</li>
              </ul>
            </div>
          </div>
        </div>
      

      {/* Contact Section */}
      <div className="w-full flex flex-wrap bg-gray-100 mt-10 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <p className="text-sm font-bold text-red-600">GET IN TOUCH</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Let’s Build Together</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to bring your ideas to life? Contact us to build powerful full stack solutions that scale.
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

export default Education;
