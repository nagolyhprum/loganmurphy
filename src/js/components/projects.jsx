import React from 'react'

import Projects from '../data/projects'

const getDisplay = project => {
  if (project) {
    return (
      <div className='card space-children margin-small padding-small center-children' key={project.name}>
        <div>{project.logo}</div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <a href={project.link.url}>{project.link.text}</a>
      </div>
    )
  }
  return <div className='margin-small padding-small' />
}

export default () => (
  <div className='projects columns'>
    {
      Projects.concat(Array.from({ length: 3 - Projects.length % 3 })).map(getDisplay)
    }
  </div>
)
