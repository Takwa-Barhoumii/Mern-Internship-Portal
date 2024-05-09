import { useState } from 'react';
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const [showPopup, setShowPopup] = useState(false); //

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0o31zzl', 'template_zuil9wa', form.current, {
        publicKey: 'E8x8SWjONJ7iqrk5f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true);//
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div>
      <section className="bg-white">
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
      <form ref={form} onSubmit={sendEmail} className=' space-y-8 '>

      <div>
      <label for="name" className="block mb-2 text-sm dark:text-black font-bold">Name</label>
      <input type="text" id="name" className="block p-3 w-full text-sm text-black
       rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 
       focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 
        dark:focus:border-primary-500 dark:shadow-sm-light"
         placeholder="e.g.: Takwa Barhoumi" required  name="user_name"/>
      </div>

      <div>
      <label for="email" className="block mb-2 text-sm dark:text-black font-bold">Email</label>
      <input type="email" id="email" className="block p-3 w-full text-sm text-black
       rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 
       focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 
        dark:focus:border-primary-500 dark:shadow-sm-light"
         placeholder="e.g.: expample@email.com" required name="user_email" />
      </div>

      <div  className="sm:col-span-2">
      <label for="message" className="block mb-2 text-sm dark:text-black font-bold">
        Message</label>
      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900
       bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 
       focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
        placeholder="Leave a comment..." name="message" />
      </div>
      
     
      <button type="submit" className="py-3  bg-red px-5 text-sm font-medium text-center
       text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 
       focus:ring-4 focus:outline-none focus:ring-primary-300 
       dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Send message</button>

    </form>
    {/* pop up */}
    {showPopup && (
        <div className="popup">
          {alert ("Internship Posted Succesfully!")}
          
          
        </div>
        )}

    </div>
    </section>
    </div>
  );
};

export default ContactForm;