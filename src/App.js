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
      main: {}
    }
  }
  getResumeData() {

    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ main: data.main })
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
        <Header main={this.state.main} />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
