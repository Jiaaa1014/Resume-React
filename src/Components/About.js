import React, { Component } from 'react'

export default class About extends Component {
  render() {
    if (this.props.main) {
      // const doesnt work
      // access one time
      var { name, bio, email, resumeDownload, phone } = this.props.main
      var { street, city, state, zip } = this.props.address
      var image = 'images/' + this.props.main.image
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={image} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city}, {state} {zip}</span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p><a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
