
'use client'
import { Button } from '@/components/ui/button'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "sonner"

function ContactUsPage() {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic client-side validation
    let isValid = true;
    setErrorMessage('');

    if (!name.trim()) {
      isValid = false;
      setErrorMessage('Please enter your name.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      setErrorMessage('Please enter a valid email address.');
    } else if (!message.trim()) {
      isValid = false;
      setErrorMessage('Please enter a message.');
    }

    if (isValid) {
      emailjs
        .sendForm('service_foqchvy', 'template_bhakuza', form.current, '_Gnz37eoCxXFxshza')
        .then(
          () => {
            console.log('SUCCESS!');
            toast('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <div className="container mt-12 mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Get in Touch</h1>
      <p className="text-lg text-center mb-12">
        Have a question or want to learn more about prepAI? We'd love to hear from you!
      </p>
      <form ref={form} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Your message..."
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        <Button
          type="submit"
          className=" text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </Button>
      </form>
      <div className="mt-8">
      <hr className="my-4 border-gray-400" />
      <p className="text-lg mb-4">
        You can also reach us at:
      </p>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <a href="mailto:info@prepAI.com" className="text-blue-600 hover:text-blue-800">
            info@prepAI.com
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.linkedin.com/company/aimockinterview/" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </a>
        </li>
        <li className="mb-2">
          <a href="https://twitter.com/aimockinterview" className="text-blue-600 hover:text-blue-800">
            Twitter
          </a>
        </li>
      </ul>
   </div>
  </div>
  );
}

export default ContactUsPage;
