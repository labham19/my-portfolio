import React, { useState } from 'react'
import '../css/Animations.css';

const Skills = () => {
  const [skills,setSkills] = useState([
    {name:"HTML",img:"html.png"},
    {name:"CSS",img:"css.png"},
    {name:"JS",img:"js.png"},
    {name:"Jquery",img:"jquery.png"},
    {name:"PHP",img:"php.png"},
    {name:"MySql",img:"mysql.png"},
    {name:"PostMan",img:"postman.png"},
    {name:"Bootstrap",img:"bootstrap.png"},
    {name:"Tailwind",img:"tailwind.png"},
    {name:"Laravel",img:"laravel.png"},
    {name:"Vue JS",img:"vuejs.png"},
    {name:"React Js",img:"reactjs.png"}
  ]);
  return (
    <div className='mx-2 md:mx-10 h-[100vh]'>
        <h1 className='text-center text-xl md:text-4xl pt-7 text-white typing underline'>My Skills</h1>   
        <div className='grid fadein h-5/6 grid-cols-2 md:grid-cols-3 items-center place-content-center place-items-center gap-2 md:gap-5'>
        {
          skills.map((skill,i)=><div key={i} className='h-16 rotate-once w-16 md:h-28 md:w-28 hover:bg-[rgb(0,0,0,0.6)] relative  rounded-full border-2 border-sky-400'>
             <div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
              <img alt="" src={`./IMG/${skill.img}`} className="w-1/2 md:w-1/3" />
              <p className='text-white hidden md:block cursor-default'>{skill.name}</p>

             </div>
             
          </div>
          )
        }
        </div>

    </div>
  )
}

export default Skills
