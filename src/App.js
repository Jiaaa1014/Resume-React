import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }
  render() {
    console.log(this.state.foo)
    return (
      <div className="App">
        <Header />
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
