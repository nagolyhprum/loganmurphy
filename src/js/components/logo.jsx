import React, { Component } from 'react'

const LMLogo = (canvas, scale) => {
  const alpha = Math.min(1 - (1.5 - scale) * 2, 1)
  const context = canvas.getContext('2d')
  const PADDING = 1
  const OFFSET = 4 * Math.max(1, scale / 2)
  canvas.height = canvas.width = 24 * scale
  // L
  context.strokeStyle = '#F57C00'
  context.beginPath()
  context.moveTo(PADDING, PADDING)
  context.lineTo(PADDING, canvas.height - PADDING)
  context.lineTo(canvas.width - PADDING, canvas.height - PADDING)
  context.lineTo(canvas.width - PADDING - OFFSET, canvas.height - PADDING - OFFSET)
  context.lineTo(PADDING + OFFSET, canvas.height - PADDING - OFFSET)
  context.lineTo(PADDING + OFFSET, PADDING + OFFSET)
  context.closePath()
  context.stroke()

  context.globalAlpha = alpha
  context.beginPath()
  context.moveTo(canvas.width / 2 - OFFSET, PADDING + OFFSET * 3)
  context.lineTo(PADDING + OFFSET * 2, canvas.height / 2)
  context.lineTo(canvas.width / 2 - OFFSET, canvas.height - PADDING - OFFSET * 3)
  context.stroke()
  context.globalAlpha = 1

  // M
  context.strokeStyle = '#E040FB'
  context.beginPath()
  context.moveTo(PADDING, PADDING)
  context.lineTo(canvas.width / 2 - OFFSET, PADDING)
  context.lineTo(canvas.width / 2, PADDING + OFFSET)
  context.lineTo(canvas.width / 2 + OFFSET, PADDING)
  context.lineTo(canvas.width - PADDING, PADDING)
  context.lineTo(canvas.width - PADDING, canvas.height - PADDING)
  context.lineTo(canvas.width - PADDING - OFFSET, canvas.height - PADDING - OFFSET)
  context.lineTo(canvas.width - PADDING - OFFSET, PADDING + OFFSET)
  context.lineTo(canvas.width / 2 + OFFSET, PADDING + OFFSET)
  context.lineTo(canvas.width / 2, PADDING + OFFSET * 2)
  context.lineTo(canvas.width / 2 - OFFSET, PADDING + OFFSET)
  context.lineTo(OFFSET + PADDING, PADDING + OFFSET)
  context.closePath()
  context.stroke()

  context.globalAlpha = alpha
  context.beginPath()
  context.moveTo(canvas.width / 2 + OFFSET, PADDING + OFFSET * 3)
  context.lineTo(canvas.width - (PADDING + OFFSET * 2), canvas.height / 2)
  context.lineTo(canvas.width / 2 + OFFSET, canvas.height - PADDING - OFFSET * 3)
  context.stroke()

  context.beginPath()
  context.moveTo(canvas.width / 2 - OFFSET / 2, canvas.height - (PADDING + OFFSET * 3))
  context.lineTo(canvas.width / 2 + OFFSET / 2, (PADDING + OFFSET * 3))
  context.stroke()
  context.globalAlpha = 1
}

class Logo extends Component {
  componentDidMount () {
    LMLogo(this.refs.canvas, this.props.scale || 1)
  }

  componentWillUpdate () {
    LMLogo(this.refs.canvas, this.props.scale || 1)
  }

  render () {
    return <canvas ref='canvas' />
  }
}

export default Logo
