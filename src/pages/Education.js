import React, { useState } from 'react'
import HistoryRow from '../components/HistoryRow';
import '../css/Animations.css';

const Education = () => {
  const [mode,setMode] = useState("education");

  const [education,setEducation] = useState([
     {
      title:"Bachelors of Computer Applications",
      year:"2020-2023",
      from:'Vivekananda Institute Of Professional Studies, New Delhi'
     },
     {
      title:"12th CBSE, 94.8%",
      year:"2020",
      from:'PML SD Public School, Chandigarh'
     },
     {
      title:"10th CBSE, 90.4%",
      year:"2018",
      from:'Manav Mangal Smart School, Mohali'
     }
  ]);

  const [internship,setInternship] = useState([
    {
     title:"Web Development TA",
     year:"August 2022 - Ongoing",
     from:'Internshala, Remote'
    },
    {
     title:"Junior Web Developer",
     year:"Jan 2022 - May 2022",
     from:'Bharat Software, New Delhi'
    }
 ]);

  return (
    <div className='mx-2 md:mx-10 h-[100vh]'>
        <div className='w-full fadein md:w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 md:p-10 text-white'>
           
           <div>
               <button onClick={()=>setMode("education")} className={`${mode==="education"?'bg-black':''} text-white hover:bg-black mx-2 border-2 border-black  py-2 px-4 smoothify`}>Education</button>
               <button onClick={()=>setMode("internship")} className={`${mode==="internship"?'bg-black':''} text-white hover:bg-black mx-2 border-2 border-black  py-2 px-4 smoothify`}>Internship</button>
           </div>

           {
            mode==="education" ? <HistoryRow mode="Education" data={education} /> : <HistoryRow mode="Internship" data={internship} />
           }

           

        </div>
    </div>
  )
}

export default Education
