import React from 'react'
import Logo from '../components/logo'
import Lexicon from '../../images/lexicon.svg'

export default [{
  'name': 'Lexicon',
  logo: <img src={Lexicon} height='48' />,
  description: 'description',
  links: [{
    text: 'Website',
    url: 'https://speaknatively.com/'
  }, {
    text: 'Android',
    url: 'https://play.google.com/store/apps/details?id=com.sharptung.lexicon&hl=en'
  }]
}, {
  'name': 'Polly UI',
  logo: <Logo scale='2' />,
  description: 'description',
  links: [{
    text: 'Github',
    url: 'https://github.com/nagolyhprum/polly-ui'
  }, {
    text: 'NPM',
    url: 'https://www.npmjs.com/package/polly-ui'
  }]
}, {
  'name': 'Decipher',
  logo: <Logo scale='2' />,
  description: 'description',
  links: [{
    text: 'Learn More',
    url: '#'
  }]
}, {
  'name': 'LoganMurphy.us',
  logo: <Logo scale='2' />,
  description: 'description',
  links: [{
    text: 'Learn More',
    url: '#'
  }]
}]
