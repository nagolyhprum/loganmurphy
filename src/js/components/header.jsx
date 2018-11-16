import React, { Component } from 'react'
import Logo from './logo'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { scale: 2 }
    this.onScroll = this.onScroll.bind(this)
  }
  onScroll () {
    this.setState({ scale: Math.max(1 + (72 - window.pageYOffset) / 72, 1) })
  }
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
  render () {
    return (
      <div className='header padding-small' style={{
        height: 24 + 32 * (this.state.scale - 1)
      }}>
        <Logo scale={this.state.scale} />
        <h1 className='text-primary grow title padding-small margin-small' style={{
          transform: `scale(${this.state.scale * 3 / 4})`,
          transformOrigin: 'center left'
        }}>Logan Murphy</h1>
        <div className='text-primary padding-small margin-small' style={{
          transform: `scale(${this.state.scale * 3 / 4})`,
          transformOrigin: 'center right'
        }}>Senior Fullstack Engineer</div>
      </div>
    )
  }
}

export default Header
