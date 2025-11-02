import { useState, useEffect, useRef } from 'react'
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
import Footer from './component/Footer/Footer'

function App() {
  const sections = [
    { id : 'start', component: <Start/> },
    { id : 'about', component: <About/> },
    { id : 'skills', component: <Skills/> },
    { id : 'project', component: <Projects/> }
  ]
  const [bgColor, setBgColor] = useState("black");
  const [activeIndex, setActiveIndex] = useState(0);

  // 스크롤용 ref
  const scrollRefs = sections.map(()=>useRef(null));
  // console.log('scrollRefs', scrollRefs)
  // 배경색 바꾸기용 ref
  const viewRefs = sections.map(()=>useInView({threshold:0.3}))

  useEffect(()=>{
    const index = viewRefs.findIndex(([_, inView])=>{return inView == true});
    if(index !== -1){
      setActiveIndex(index);
    }
  }, [...viewRefs.map(([_, inView])=>inView), activeIndex])

  
  useEffect(()=>{
    if(activeIndex % 2 == 0){
      setBgColor('black');
    } else{
      setBgColor('white')
    }
  },[activeIndex])




  return (
    <div className='app' style={{ backgroundColor: bgColor}}>
      <Header scrollRefs={scrollRefs}/>
      {sections.map((section, i)=>{
        const [viewRef] = viewRefs[i];
        // 구조분해 할당
        return (
          <div ref={(el)=>{
            viewRef(el);
            scrollRefs[i].current = el;
            // console.log('el',el);  각 요소가 찍힘
          }} key={section.id}>{i===0?<Start aboutRef={scrollRefs[1]}/>:section.component}</div>
        )
      })}
      <Footer/>
    </div>
  )
}

export default App

// 컴포넌트마다 각기 다른 아이디의 ref를 심는다,
// ref % 2 == 0 : setBgColor('black')
//  ref % 2 !== 0 : setBgColor('white')

// Framer Motion
// threshold, rootMargin

