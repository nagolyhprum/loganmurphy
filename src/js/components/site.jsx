import React, { Component } from 'react'
import Header from './header'
import List from './list'
import Divider from './divider'

import Projects from '../data/projects'
import WorkExperience from '../data/workexperience'
import Contacts from '../data/contact'
import Accomplishments from '../data/accomplishments'

class Site extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='site-body'>
          <List name='Work Experience' list={WorkExperience} />
          <Divider />
          <List name='Projects' list={Projects} />
          <Divider />
          <List name='Accomplishments' list={Accomplishments} />
          <Divider />
          <List name='Contact' list={Contacts} />
        </div>
      </div>
    )
  }
}

export default Site
