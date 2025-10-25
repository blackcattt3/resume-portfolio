import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard'

const Skills = () => {
  const skillList = [
        { title:'Front End',
        content: "React.js · JavaScript (ES6+) · HTML5 · CSS3· styled-components · Framer Motion · React Route"
        },
        { title:'Front End',
        content: "React.js · JavaScript (ES6+) · HTML5 · CSS3· styled-components · Framer Motion · React Route"
        }
    ]
  return (
    <div className='skill-section'>
      <h1>skills</h1>

      {/* {skillList.map((item, id)=>(
        <div className={`skill-card ${id%2==0?"":"oddNum"}`}>
            <div className={`skill-title ${id%2==0?"":"oddNumber"}`}>{item.title}</div>
            <div className='skill-content'>{item.content}</div>
        </div>
      ))} */}
    {skillList.map((item, index)=>(
      <div className='skill-card'>
        <div className={`skill-title ${index%2==0?"":"oddNum"}`}>{item.title}</div>
        <div className={`skill-content ${index%2==0?"":"oddNum"}`}>{item.content}</div>
      </div>
    ))}
      
    </div>
  )
}

export default Skills
