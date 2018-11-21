import React from 'react'
import Logo from '../components/logo'
import Lexicon from '../../images/lexicon.svg'

export default [{
  'name': 'Lexicon',
  logo: <img alt='Lexicon' src={Lexicon} height='48' />,
  from: new Date('Dec 3, 2015'),
  description: `An application for teaching spoken languages

**Languages:** Java, Kotlin, Javascript, C++

**Technologies:** AWS, Mongo, Docker`,
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
  description: `Cross platform canvas renderer, currently only supports html5 canvas

**Languages:** Javascript`,
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
  description: `An application for teaching programming languages, currenly teaches a lot of syntax from Javascript and Python

**Languages:** Javascript`,
  links: [{
    text: 'Website',
    url: 'http://decipher.io.s3-website-us-east-1.amazonaws.com/master/'
  }]
}, {
  'name': 'LoganMurphy.us',
  logo: <Logo scale='2' />,
  description: `A complete AWS serverless website to promote myself

**Languages:** Javascript,SCSS,HTML

**Technologies:** React, AWS`,
  links: [{
    text: 'Github',
    url: 'https://github.com/nagolyhprum/loganmurphy'
  }]
}]
