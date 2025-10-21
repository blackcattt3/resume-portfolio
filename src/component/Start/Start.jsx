import React from 'react'
import './Start.css'
import { ReactTyped } from 'react-typed';
import { useState, useEffect, useRef } from 'react';
import { HiArrowCircleDown } from "react-icons/hi";


const Start = () => {
    const [typingKey, setTypingKey] = useState(0);
    const [typingIsFinished, setTypingIsFinished] = useState(false);
    const prevScrollY = useRef(0);      // 이전 스크롤 위치 저장용

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll);
    },[])
    
    const handleScroll = ()=>{
        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;

        // 화면의 30% 지점 위로 다시 올라왔을때
        // 지금 스크롤 위치(scrollY)가 화면의 30% 위쪽보다 위에 있고, 직전 위치(prevScrollY.current)는 그보다 아래(=30% 아래쪽)에 있었을 때
        if(scrollY < screenHeight * 0.4 && prevScrollY.current >= screenHeight * 0.5) {
            setTypingKey((prev)=>prev+1);
            setTypingIsFinished(false);
        }
        prevScrollY.current = scrollY;
        // console.log("prevScrollY", prevScrollY)
    };

    // 화살표 아이콘 클릭시 About me 까지 스크롤 내리기
    const scrollDown = ()=>{
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior:"smooth"
        })
    }

  return (
    <div className='start-section'>
        <div className={`typed-container ${typingIsFinished? 'shrink':''}`}>
            <h2>
                <ReactTyped
                key={typingKey}
                    strings={[
                    `&lt; 안녕하세요 : ) 프론트엔드 개발자 노재희 입니다.<br>
                    실용적이고 감각적인 웹을 지향합니다 /&gt;`,
                    ]}
                    typeSpeed={80}
                    onComplete={()=>setTypingIsFinished(true)}
                />
            </h2>
        </div>

        { typingIsFinished && 
        <div className='portfolio-title'>
            <div className='portfolio-main-title'>JAEHEE's PORTFOLIO</div>
            <HiArrowCircleDown className='arrow-icon'  onClick={scrollDown}/>
            <div className='swipe-text bounce-blink'>swipe</div>
        </div>}
    </div>

  )
}

export default Start
