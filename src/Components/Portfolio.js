import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    if (this.props.projects) {
      var projects = this.props.projects.map(project => {
        var imageUrl = 'images/portfolio/' + project.image
        return (
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={project.modal} title="">
                <img alt="" src={imageUrl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>)
      })
    }
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
