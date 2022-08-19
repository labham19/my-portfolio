import React, { useRef, useState } from 'react'
import { BsHouseDoor,BsPerson,BsBook,BsCodeSlash,BsBuilding,BsGithub,BsArrowsFullscreen,BsFullscreenExit } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaBars,FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [fullScreen,setFullScreen] = useState(false);

  const menu = useRef();

  const toggleMenu = () =>{
     if(menu.current.classList.contains('w-0')){
      menu.current.classList.remove('w-0');
      menu.current.classList.add('w-16');
     }else{
      menu.current.classList.remove('w-16');
      menu.current.classList.add('w-0');
     }
  }

  const togglefullScreen = () =>{
    if(!fullScreen){
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
      setFullScreen(true);
    }
    else{
      if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        setFullScreen(false);
    }
    
  }
  return (
    <>
    <div onClick={toggleMenu} className='fixed text-white p-5 text-2xl cursor-pointer md:hidden smoothify hover:text-sky-400'>
      <FaBars/>
    </div>

    <div  className='fixed right-4  p-5 text-xl cursor-pointer hidden md:block'>
      <div className='flex space-x-9 items-center'>
          
        {/* <div className='hover:text-sky-400 smoothify text-white flex items-center space-x-2'> <FaBullhorn/> <div>Speak to the site</div></div> */}

        {
          fullScreen?<BsFullscreenExit onClick={togglefullScreen} className='hover:text-sky-400 smoothify text-white'/>:<BsArrowsFullscreen onClick={togglefullScreen} className='hover:text-sky-400 smoothify text-white'/>
        }

      </div>
      
    </div>

    <nav ref={menu} className='sidebar flex overflow-hidden w-0 md:w-24 z-20 md:hover:w-28 smoothify bg-black first-letter:px-3 py-6 h-full fixed flex-col justify-around md:justify-between items-center text-white font-bold'>

       <Link to="/">  
        <div className='cursor-pointer text-center font-serif smoothify hover:text-sky-400'>
          <span className='hidden md:block'>ʟᴀʙʜᴀᴍ <br/> ᴍᴀʟɪᴋ</span>
        </div>
        </Link>
        <FaBars className='block md:hidden text-2xl cursor-pointer smoothify hover:text-sky-400' onClick={toggleMenu}/>

        <div className='flex flex-col items-center space-y-6 md:space-y-12 text-2xl justify-center'>
               <Link to="/"> <BsHouseDoor className='hover:text-sky-500 hover:text-4xl smoothify' /> </Link> 
               <Link to="/about"> <BsPerson className='hover:text-sky-500 hover:text-4xl smoothify' /> </Link> 
               <Link to="/education"> <BsBook className='hover:text-sky-500 hover:text-4xl smoothify'/> </Link> 
               <Link to="/skills"> <BsCodeSlash className='hover:text-sky-500 hover:text-4xl smoothify'/> </Link> 
               <Link to="/project"> <BsBuilding className='hover:text-sky-500 hover:text-4xl smoothify'/> </Link> 
               <Link to="/contact"> <AiOutlineMail className='hover:text-sky-500 hover:text-4xl smoothify'/> </Link> 
        </div>

        <a href='https://github.com/labham19' target={"_blank"}>
            <BsGithub className='text-3xl hover:text-sky-400 cursor-pointer smoothify'/>
        </a>
      
    </nav>
    </>
  )
}

export default Sidebar
