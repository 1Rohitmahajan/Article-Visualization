import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conForm);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              className="w-full h-32 px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-indigo-500"
              id="message"
              required
            ></textarea>
          </div>
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            type="submit"
          >
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
