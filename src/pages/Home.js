import React from 'react';

import '../css/Animations.css';

import resume from '../resume.pdf';

const Home = () => {
  const openLink = (link) =>{
    window.open(link);
  }
  return (
    <div className='px-2 md:px-10 h-[100vh]'>
        <div className='slab hidden md:block bg-[rgb(37,38,45,0.8)] w-1/3 relative h-[100%]'></div>

        <div className='flex flex-col w-4/5  md:flex-row space-x-0 md:space-x-16 space-y-5 md:space-y-0  md:w-2/3 items-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           <div className='w-28 md:w-44 lg:w-80 bg-sky-900 border-b-2 border-l-2 fadein border-sky-400'>
             <img alt="" src='./IMG/labham.jpeg' className='smoothify -translate-y-3 translate-x-3 hover:translate-x-0 hover:translate-y-0 smoothify'/>
           </div>

            <div className="font-bold space-y-5 md:mx-3 flex flex-col items-start fadein">
                <p className="text-xl text-white">Hi, my name is</p>
                <p className="text-3xl md:text-4xl lg:text-7xl text-sky-500 font-bold typing">Labham Malik. </p>
                <p className="text-xl border-l-2 text-slate-500 border-slate-300 px-3"> Full Stack Developer.</p>
                <a href={resume} target="_blank" type="button" className="text-white text-center cursor-pointer button border bottom-1 border-blue-400 bg-[rgb(0,200,250,0.5)] w-48 hover:bg-[rgb(0,200,250,0.3)] p-1 lg:p-2 smoothify rounded-lg"> Resume</a>
            </div>
        </div>
        
    </div>
  )
}

export default Home
