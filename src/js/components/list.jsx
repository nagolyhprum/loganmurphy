import React from 'react'
import ReactMarkdown from 'react-markdown'

const getDisplay = (project, index) => {
  if (project) {
    return (
      <div className='card space-children margin-small padding-small center-children' key={project.name}>
        <div>{project.logo}</div>
        <h3>{project.name}</h3>
        <div className='match-width'>
          <ReactMarkdown source={project.description} />
        </div>
        {
          project.links.map(link => (
            <a className='button' target='_blank' key={link.url} href={link.url}>{link.text}</a>
          ))
        }
      </div>
    )
  }
  return <div className='margin-small padding-small' key={index} />
}

const COUNT = 3

export default ({ list, name }) => (
  <React.Fragment>
    <h2 className='padding-small margin-small text-primary'>{name}</h2>
    <div className='columns'>
      {
        list.concat(Array.from({ length: COUNT - list.length % COUNT })).map(getDisplay)
      }
    </div>
  </React.Fragment>
)
