import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      main: {},
      networks: [],
      address: {},
      resume: {},
      projects: [],
      testimonials: []
    }
  }
  getResumeData() {

    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState(
          {
            main: data.main,
            networks: data.main.social,
            address: data.main.address,
            resume: data.resume,
            projects: data.portfolio.projects,
            testimonials: data.testimonials
          })
      }.bind(this),
      error: function (err) {
        alert(err)
      }
    })
  }
  componentDidMount() {
    this.getResumeData()
  }
  render() {
    return (
      <div className="App">
        <Header main={this.state.main} networks={this.state.networks} />
        <About main={this.state.main} address={this.state.address} />
        <Resume
          education={this.state.resume.education}
          work={this.state.resume.work}
          skills={this.state.resume.skills}
        />
        <Portfolio projects={this.state.projects} />
        <Contact
          main={this.state.main}
          address={this.state.address}
        />
        <Testimonials testimonials={this.state.testimonials.testimonials} />
        <Footer />
      </div>
    );
  }
}

export default App;
