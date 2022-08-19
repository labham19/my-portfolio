import React from 'react'
import '../css/Animations.css';

const About = () => {
  return (
    <div className='mx-2 md:mx-10 h-[100vh]'>
        <div className='fadein w-[90%] md:w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 md:p-10 border-2 border-dashed text-white border-white text-center'>
              <span className='bg-slate-400 absolute top-0 -translate-y-1/2 -translate-x-1/2 left-0 h-5 w-5 rotaters md:h-10 md:w-10'>&nbsp;</span>
              <span className='bg-slate-400 absolute -bottom-0 translate-y-1/2 translate-x-1/2 right-0 h-4 w-4 rotaters md:h-5 md:w-5'>&nbsp;</span>

              <h1 className='text-3xl font-bold text-sky-500'>About me</h1>
              <div className='my-4 md:text-lg'>
              Hello there ! My name is Labham Malik,
              I am a full stack web developer who is eager to learn and grow in field of computer applications.
              I started web development during first covid lockdown and since then my interest in this field has only been multiplied.
              I believe that one should never hesitate to learn something new, and I try my best to do the same. 
              </div>
        </div>
    </div>
  )
}

export default About
