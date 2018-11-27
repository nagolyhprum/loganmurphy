import React from 'react'
import Temple from '../../images/temple.svg'
import Logo from '../components/logo'
import AWSCertifiedLogo from '../../images/AWSCertifiedLogo.png'
import AWSCertifiedTag from '../../images/AWSCertifiedTag.png'
import AWSCertifiedPDF from '../../documents/AWSCertifiedDeveloperAssociateCertificate.pdf'

export default [{
  'name': 'Bachelor of Science (B.S.)',
  from: new Date('2010/08/01'),
  to: new Date('2014/05/01'),
  logo: <img alt='Temple University' src={Temple} height='48' />,
  description: `Temple University - Computer Science - _3.7_`,
  links: [{
    url: 'https://www.temple.edu/',
    text: 'Website'
  }]
}, {
  'name': 'Future of Computing',
  logo: <Logo scale={2} />,
  description: `Best Project - Used JMonkey and Kinect to create a hole in the wall game`,
  links: [{
    url: 'https://bitbucket.org/nagolyhprum/hole-in-the-wall/src/master/',
    text: 'Bitbucket'
  }]
}, {
  name: 'Amazon Web Services',
  logo: <img src={AWSCertifiedLogo} height='48' />,
  links: [{
    url: AWSCertifiedPDF,
    text: <img src={AWSCertifiedTag} />
  }]
}]
