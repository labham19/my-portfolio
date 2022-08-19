import React, { useState } from 'react'
import '../css/Animations.css';

const Project = () => {
  const [projects,setProjects] = useState([
     {
      name:"Fully Fuctional Spotify Clone",
      video:"./videos/spotify_clone2.mp4",
      link:"https://youtu.be/uVPqC_N0b3o",
      tech:["reactjs","tailwind"]
     },
     {
      name:"Transport Software",
      video:"./videos/transport_software2.mp4",
      link:"https://youtu.be/3XCtpurfo_o",
      tech:["laravel","vuejs"]
     },
     {
      name:"Goods Pickup Request Portal",
      video:"./videos/pickup.png",
      isImg:true,
      link:"#",
      tech:["html","js","php"]
     },
     {
      name:"News Caliber",
      video:"./videos/news_caliber2.mp4",
      link:"https://youtu.be/8rUh4gBMMII",
      tech:["reactjs","tailwind"]
     },
     {
      name:"QR World",
      video:"./videos/qr-world2.mp4",
      link:"https://youtu.be/zSpFYNQ13cY'",
      tech:["reactjs","tailwind"]
     },
     {
      name:"Living Books UI",
      video:"./videos/living_books2.mp4",
      link:"https://living-books-ui.netlify.app/",
      tech:["reactjs","tailwind"]
     },
     {
      name:"True Friend Blood Bank",
      video:"./videos/true_friend2.mp4",
      link:"https://youtu.be/UcN-r57ksrY",
      tech:["html","bootstrap","js","php"]
     },
     {
      name:"Chat Monkey",
      video:"./videos/chat_mokey2.mp4",
      link:"https://youtu.be/7ph3TKgShd0",
      tech:["reactjs","tailwind"]
     },
     {
      name:"Google Clone",
      video:"./videos/google-clone2.mp4",
      link:"https://labham-google-clone.netlify.app/",
      tech:["reactjs","tailwind"]
     }
  ]);

  return (
    <div className='mx-2 md:mx-32 h-[100vh]'>
       <div className='fadein'>
           <h1 className='text-center z-0 typing md:text-left text-xl md:text-4xl pt-7 text-white underline font-bold'>My Projects</h1>
           <div className='grid grid-cols-2 lg:grid-cols-3 gap-1 my-4'>
                {
                  projects.map((project,i)=>{
                    return <div onClick={()=>window.open(project.link)} className="cursor-pointer relative p-2 hover:bg-[rgb(0,0,0,0.2)] smoothify" key={i}>
                              <span className='text-slate-400 hidden md:block typing'>{project.name}</span>
                              <div>
                                  {
                                    project.isImg ? <img alt="" src={project.video} className="w-full fadein"/> :
                                    <video onMouseOver={(e)=>e.target.play()} onMouseLeave={(e)=>e.target.pause()} muted loop  className="w-full fadein">
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                  }
                                  

                                  <div className='text-center'>
                                    {
                                      project.tech.map((t,i)=>{
                                        return <img alt="" key={t+i} src={`./IMG/${t}.png`} className="w-5 md:w-7 lg:w-10 mx-2 my-2 inline-block" />
                                      })
                                    } 
                                  </div>

                              </div>
                            </div>
                  })
                }  
           </div>
       </div>
    </div>
  )
}

export default Project
