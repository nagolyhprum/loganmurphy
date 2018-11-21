// https://www.iconfinder.com/search/?q=github

import React from 'react'
import Phone from '../../images/phone.svg'
import Email from '../../images/email.svg'
import StackOverflow from '../../images/stackoverflow.svg'
import Facebook from '../../images/facebook.svg'
import LinkedIn from '../../images/linkedin.svg'
import GitHub from '../../images/github.svg'
import YouTube from '../../images/youtube.svg'
import Resume from '../../images/resume.svg'
export default [{
  'name': 'Facebook',
  logo: <img alt='Facebook' src={Facebook} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.facebook.com/lmurphy2'
  }]
}, {
  'name': 'Github',
  logo: <img alt='Github' src={GitHub} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://github.com/nagolyhprum'
  }]
}, {
  'name': 'StackOverflow',
  logo: <img alt='StackOverflow' src={StackOverflow} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://stackoverflow.com/users/1953420/logan-murphy'
  }]
}, {
  'name': 'YouTube',
  logo: <img alt='YouTube' src={YouTube} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.youtube.com/user/LoganCMurphy'
  }]
}, {
  'name': 'LinkedIn',
  logo: <img alt='LinkedIn' src={LinkedIn} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.linkedin.com/in/logan-murphy-2aa93348/'
  }]
}, {
  'name': 'Email',
  logo: <img alt='Email' src={Email} height='48' />,
  links: [{
    text: 'Connect',
    url: 'mailto:nagolyhprum@hotmail.com'
  }]
}, {
  'name': 'Phone',
  logo: <img alt='Phone' src={Phone} height='48' />,
  links: [{
    text: 'Connect',
    url: 'tel:2154322921'
  }]
}, {
  'name': 'Resume',
  logo: <img alt='Resume' src={Resume} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://docs.google.com/document/d/1DsuiT1pb0nOiPJfE-3UuC8FxnFyxf3QtetnQTIyPVpQ'
  }]
}]
