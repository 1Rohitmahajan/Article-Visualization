import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='max-w-md p-6 bg-white rounded-md shadow-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>About Our Application</h2>
        <p className='text-lg text-gray-700 mb-4'>
          Welcome to our application! We strive to provide the best in article visualization with our Dashboard.
        </p>
        <p className='text-base text-gray-700 mb-4'>
          This application was created by Rohit Mahajan as an assignment for Blackcoffer COMPANY.
        </p>
        <p className='text-base text-gray-700'>
          For any inquiries or feedback, please contact us at <a href='mailto:rohitam35@gmail.com' className='text-blue-500 hover:underline'>rohitam35@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
