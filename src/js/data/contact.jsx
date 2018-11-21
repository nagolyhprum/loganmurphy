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
  logo: <img src={Facebook} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.facebook.com/lmurphy2'
  }]
}, {
  'name': 'Github',
  logo: <img src={GitHub} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://github.com/nagolyhprum'
  }]
}, {
  'name': 'StackOverflow',
  logo: <img src={StackOverflow} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://stackoverflow.com/users/1953420/logan-murphy'
  }]
}, {
  'name': 'YouTube',
  logo: <img src={YouTube} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.youtube.com/user/LoganCMurphy'
  }]
}, {
  'name': 'LinkedIn',
  logo: <img src={LinkedIn} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://www.linkedin.com/in/logan-murphy-2aa93348/'
  }]
}, {
  'name': 'Email',
  logo: <img src={Email} height='48' />,
  links: [{
    text: 'Connect',
    url: 'mailto:nagolyhprum@hotmail.com'
  }]
}, {
  'name': 'Phone',
  logo: <img src={Phone} height='48' />,
  links: [{
    text: 'Connect',
    url: 'tel:2154322921'
  }]
}, {
  'name': 'Resume',
  logo: <img src={Resume} height='48' />,
  links: [{
    text: 'Connect',
    url: 'https://docs.google.com/document/d/1DsuiT1pb0nOiPJfE-3UuC8FxnFyxf3QtetnQTIyPVpQ'
  }]
}]
