import React from 'react'
import './ProjectCard.css'
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({props}) => {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className='project-card'>
      <h1>{props} 카드</h1>
    </div>
  )
}

export default ProjectCard
