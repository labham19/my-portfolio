import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../css/Animations.css';

const Contact = () => {
  const [form,setForm] = useState({});
  const contactForm = useRef();

  const changeHandler = (e) =>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const submitForm = (e) =>{
     e.preventDefault();
     emailjs.sendForm('service_smgoyve', 'template_zdl6288', contactForm.current ,'Mq_XKBH_lZrUb47RT')
     .then(function() {
         setForm({});
     }, function(error) {
         alert("Failed");
     })
  }

  return (
    <div className='mx-2 md:mx-32 h-[100vh]'>
      <div className='absolute fadein top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 md:p-5'>
                 
              <form ref={contactForm} onSubmit={submitForm} method="post" id="contactForm" name="contactForm">
                 <h1 className='text-center md:text-left py-3 typing text-slate-300 font-bold'>Contact Me</h1>
                 <div className="p-3 text-lg space-y-6 text-white">
                      <div className="font-bold">
                          <label htmlFor="name">Name</label>
                          <input type="text" required id="from_name" onChange={changeHandler} name="from_name" placeholder='Who is this ?' value={form.from_name?form.from_name:""} className="w-full my-2 py-1 px-2 bg-slate-300 text-black "/>
                      </div>
                      <div className="font-bold">
                          <label htmlFor="email">Email</label>
                          <input type="email" required id="from_email" onChange={changeHandler} name="from_email" placeholder='Tell me your email' value={form.from_email?form.from_email:""} className="w-full my-2 py-1 px-2 bg-slate-300 text-black "/>
                      </div>
                      <div className="font-bold">
                          <label htmlFor="subject">Subject</label>
                          <input type="text" required id="subject" onChange={changeHandler} name="subject" value={form.subject?form.subject:""} placeholder='Enter Subject' className="w-full my-2 py-1 px-2 bg-slate-300 text-black "/>
                      </div>
                      <div className="font-bold">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" required name="message" onChange={changeHandler} value={form.message?form.message:""} placeholder='Enter your message for me :)' className="w-full my-2 py-1 px-2 bg-slate-300 text-black"></textarea>
                      </div>
                      <div className="font-bold">
                          <button type="submit" className="button border-2 border-black bg-black text-white w-[100%] hover:bg-white hover:border-black hover:text-black smoothify  p-1 lg:p-2">Submit</button>
                      </div>
                  </div>
                </form>
       </div>
    </div>
  )
}

export default Contact
