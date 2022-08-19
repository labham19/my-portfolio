import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ParticleBackground from './components/Particle/ParticleBackground'
import Education from "./pages/Education";


function App() {
  useEffect(()=>{
     setTimeout(()=>{
      document.getElementsByTagName("link")[0].href = "favicon.png";
     },4000);
  },[])

  return (
    <div className="App">
      <ParticleBackground/>
      <BrowserRouter>
      <Sidebar/>
      
      <div className="z-20">
         <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/education" element={<Education/>} ></Route>
            <Route path="/skills" element={<Skills/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/project" element={<Project/>} ></Route>
         </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
