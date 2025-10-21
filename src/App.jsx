import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Start from './component/Start/Start'
import About from './component/About/About'

function App() {
  const [bgColor, setBgColor] = useState("black");

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll);
  },[])

  const handleScroll = ()=>{
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;

    if(scrollY > screenHeight * 0.6) {
      setBgColor("white");
    } else{
      setBgColor("black");
    }
  };

  return (
    <div className='app' style={{ backgroundColor: bgColor }}>
      <Header/>
      <Start/>
      <About/>
    </div>
  )
}

export default App
