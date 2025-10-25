import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useInView } from 'react-intersection-observer'
import Header from './component/Header/Header'
import Start from './component/Start/Start'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Projects from './component/Project/Projects'
import { text } from 'framer-motion/client'

function App() {
  const sections = [
    { id : 'start', component: <Start/> },
    { id : 'about', component: <About/> },
    { id : 'skills', component: <Skills/> },
    { id : 'project', component: <Projects/> }
  ]
  const [bgColor, setBgColor] = useState("black");
  const [textColor, setTextColor] = useState('black')
  const [activeIndex, setActiveIndex] = useState(0);


  const refs = sections.map(()=>useInView({threshold:0.3}))
  // console.log(refs);
  // const refs = sections.map(()=>useInView({threshold: 0.5;}))

  useEffect(()=>{
    // const index = refs.findIndex(([_, inView])=>{return inView==true});
    const index = refs.findIndex(([_, inView])=>{return inView == true});
    if(index !== -1){
      setActiveIndex(index);
    }
    console.log('activeIndex', activeIndex)
  }, [...refs.map(([_, inView])=>inView), activeIndex])

  // [...refs.map((item)=>item.inView),
  // refs.map(([_, inView])=>inView)
  
  useEffect(()=>{
    if(activeIndex % 2 == 0){
      setBgColor('black');
      // setTextColor('white')
    } else{
      setBgColor('white')
      // setTextColor('black')
    }
  },[activeIndex])

  return (
    <div className='app' style={{ backgroundColor: bgColor}}>
      <Header/>
      {sections.map((section, i)=>{
        const [ref] = refs[i];
        // 구조분해 할당
        return (
          <div ref={ref} key={section.id}>{section.component}</div>
        )
      })}
    </div>
  )
}

export default App

// 컴포넌트마다 각기 다른 아이디의 ref를 심는다,
// ref % 2 == 0 : setBgColor('black')
//  ref % 2 !== 0 : setBgColor('white')

// Framer Motion
// threshold, rootMargin