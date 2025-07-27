import React from 'react';

function AboutPage() {
  return (
    <div className="border shadow-sm rounded-lg mt-20 justify-center  bg-gray-100">
      <h1 className="text-3xl text-center xl font-semibold my-8">About AI Mock Interview</h1>
      <p className="text-lg my-4 mx-6 ">  
        prepAI is an innovative app that helps you prepare for your dream job by simulating real-life interview scenarios. Our AI-powered platform uses machine learning algorithms to mimic the behavior of a human interviewer, providing you with a realistic and immersive experience.
      </p>
      <p className="text-lg  my-4 mx-6">
        With prepAI, you can practice your responses to common interview questions, improve your communication skills, and build confidence in your abilities. Our app is designed to help you succeed in your job search and achieve your career goals.
      </p>
      <h2 className="text-2xl text-center font-semibold mb-4">Our Mission</h2>
      <p className="text-lg my-4 mx-6 ">
        Our mission is to empower job seekers with the skills and confidence they need to succeed in their careers. We believe that everyone deserves access to quality interview preparation, regardless of their background or experience level.
      </p>
      <div className="text-lg my-8 mx-6 items-center">
      <h2 className="text-2xl text-center font-semibold mb-4">About the Creator</h2>
      <div className="flex mb-4 items-center">
        <img
          src="https://via.placeholder.com/50" // Replace with your actual image path
          alt="Creator Profile Picture"
          className="w-12 h-12 rounded-full mr-2 border border-gray-200 shadow-sm" // Added border and shadow styles
        />
        <div className="flex-grow items-center">  {/* Added flex-grow to expand content */}
          <h3 className="text-lg font-semibold">john doe</h3>
          <p className="text-sm">Student</p>
          <p className="text-sm flex items-center space-x-2">  {/* Added flex styles for social links */}
            <a href="mailto:john1608@gmail.com" className="text-blue-600 hover:text-blue-800">
              john1608@gmail.com
            </a>
            <a href="https://www.linkedin.com/in//" className="text-blue-600 hover:text-blue-800">
            Linkedin
            </a>
            <a href="https://twitter.com" className="text-blue-600 hover:text-blue-800 ">
              Twitter
            </a>
          </p>
        </div>
        </div>
      </div>  
    </div>
       
  
  );
}

export default AboutPage;
