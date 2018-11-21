import React from 'react'
import LearnVest from '../../images/learnvest.svg'
import YouVisit from '../../images/youvisit.jpg'
import Exigis from '../../images/exigis.png'

export default [{
  'name': 'LearnVest',
  logo: <img alt='LearnVest' height='48' src={LearnVest} />,
  from: new Date('2017/03/15'),
  description: `Help users with their financial questions

Responsibilities:
* Build the React/NextJS website
* Collaborate with remote and local teammates
* Use CICD in order to deploy and support software solutions`,
  links: [{
    text: 'View the site',
    url: 'https://learnvest.com/'
  }]
}, {
  'name': 'YouVisit',
  logo: <img alt='YouVisit' style={{ borderRadius: '50%' }} src={YouVisit} height='48' />,
  from: new Date('2015/01/01'),
  to: new Date('2017/03/01'),
  description: `Bring experiences to users through the power of VR

Responsibilities:
* Build the new experience viewer with React
* Research and recommend the best technology solutions
* Develop security around APIs that use federated authentication and roles`,
  links: [{
    text: 'View the site',
    url: 'https://youvisit.com/'
  }]
}, {
  'name': 'Exigis',
  logo: <img alt='Exigis' style={{ borderRadius: '50%' }} src={Exigis} height='48' />,
  from: new Date('2014/06/01'),
  to: new Date('2014/12/01'),
  description: `Business process automation software and services for risk management, insurance, and trade finance

Responsibilities:
* Migrate database to new schema
* Suggest best practices like version control and authentication
* Inspire others to learn new technologies like Angular
`,
  links: [{
    text: 'View the site',
    url: 'https://youvisit.com/'
  }]
}]
