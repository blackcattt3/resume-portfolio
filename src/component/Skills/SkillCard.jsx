import React from 'react'
import './SkillCard.css'

const SkillCard = () => {
    
  return (
    <div>
        {skillList.map((item)=>(
            <div className='skill-card'>
                <div className='skill-title'>{item.title}</div>
                <div className='skill-content'>{item.content}</div>
            </div>
        ))}
        <div className='skill-card'>
            <div className='skill-title'>Front End</div>
            <div className='skill-content'>React.js, Javascript</div>
        </div>
    </div>
  )
}

export default SkillCard
