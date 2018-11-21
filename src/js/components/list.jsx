import React, { Component } from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

const getRows = (list, columns) => {
  const ret = []
  for (var i = 0; i < (list.length / columns); i++) {
    ret[i] = list.slice(i * columns, (i + 1) * columns)
  }
  return ret
}

const displayRange = ({ from, to }) => {
  if (from && to) {
    return <div>{moment(from).format('MMM YYYY')} - {moment(to).format('MMM YYYY')}</div>
  }
  if (from) {
    return <div>{moment(from).format('MMM YYYY')} - Present</div>
  }
}

const getMarkdown = project => {
  if (project.description) {
    return (
      <div className='match-width'>
        <ReactMarkdown source={project.description} />
      </div>
    )
  }
  return null
}

const getDisplay = (project, index) => {
  if (project) {
    return (
      <div className='column card space-children margin-small padding-small center-children' key={project.name}>
        <div>{project.logo}</div>
        <h3>{project.name}</h3>
        {displayRange(project)}
        {getMarkdown(project)}
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

const getColumnCount = () => 1 + Math.max(0, Math.ceil((window.innerWidth - 400) / 150))

class List extends Component {
  constructor (props) {
    super(props)
    this.state = { columns: getColumnCount() }
    this.onResize = this.onResize.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }
  onResize () {
    this.setState({
      columns: getColumnCount()
    })
  }
  render () {
    const { list, name } = this.props
    return (
      <React.Fragment>
        <h2 className='padding-small margin-small text-primary remove-top-padding'>{name}</h2>
        {
          getRows(list, this.state.columns).map((row, index) => (
            <div key={index} className='row'>
              {
                row.map(getDisplay)
              }
            </div>
          ))
        }
      </React.Fragment>
    )
  }
}

export default List
