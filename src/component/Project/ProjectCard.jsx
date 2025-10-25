import React from 'react'
import './ProjectCard.css'
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({item}) => {
  const { title, subtitle, content } = item
  return (
    <div className='project-card'>
      <h1>{title}</h1>
    </div>
  )
}

export default ProjectCard
