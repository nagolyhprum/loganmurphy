import React from 'react'
import LearnVest from '../../images/learnvest.svg'
import YouVisit from '../../images/youvisit.jpg'

export default [{
  'name': 'LearnVest',
  logo: <img height='48' src={LearnVest} />,
  description: ``,
  links: [{
    text: 'View the site',
    url: 'https://learnvest.com/'
  }]
}, {
  'name': 'YouVisit',
  logo: <img style={{ borderRadius: '50%' }} src={YouVisit} height='48' />,
  description: ``,
  links: [{
    text: 'View the site',
    url: 'https://youvisit.com/'
  }]
}]
