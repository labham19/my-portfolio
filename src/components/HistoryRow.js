import React from 'react'
import '../css/Animations.css';

const HistoryRow = (props) => {
  return (
    <>
      <h1 className='text-xl typing md:text-4xl text-slate-300 font-bold my-5'>{props.mode} History</h1>
      <div className='h-96 overflow-x-hidden overflow-y-scroll'>
        {
            props.data.map((row,i)=>
                <div key={i} className='border-b-2 border-black p-4 hover:bg-[rgb(0,0,0,0.1)]'>
                    <div className='flex  flex-col md:flex-row  justify-between w-full'>
                        <h2 className='font-bold'>{row.title}</h2> 
                        <span className='font-semibold text-gray-500'>{row.year}</span>
                    </div>
                    <span>{row.from}</span>
                </div>
            )
        }
          
        </div>
    </>
  )
}

export default HistoryRow
