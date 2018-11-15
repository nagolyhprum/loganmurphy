import React, { Component } from 'react'
import Logo from './logo'

class Site extends Component {
  constructor (props) {
    super(props)
    this.state = { scale: 2 }
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        scale: Math.sin(Date.now() * Math.PI / 1440) * 0.5 + 1.5
      })
    }, 1000 / 60)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    return (
      <div>
        <Logo scale={this.state.scale} />
      </div>
    )
  }
}

export default Site
