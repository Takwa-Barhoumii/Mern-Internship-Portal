import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

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
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div className='bg-black/5 rounded-lg flex justify-center'>
      
      <form ref={form} onSubmit={sendEmail} className=' sm:w-80 '>

      <div className='flex flex-col'>
      <label>Name</label>
      <input type="text" name="user_name"/>
      </div>

      <div className='flex flex-col'>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>

      <div className='flex flex-col'>
      <label>Message</label>
      <textarea name="message" />
      </div>
      
      <input type="submit" value="Send" className='w-[200px] block py-2 pl-3 border focus: outline-none bg-red rounded-sm
                  text-white cursor-pointer font-semibold'/>
      
    </form>

    </div>
  );
};

export default ContactForm;