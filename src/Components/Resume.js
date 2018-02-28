import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    if (this.props.education) {
      var education = this.props.education.map(edu => {
        return (
          <div key={edu.school} className="row item" >
            <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
              <p>{edu.description}</p>
            </div>
          </div>)
      })
    }
    if (this.props.work) {
      var work = this.props.work.map(work => {
        return (
          <div key={work.company} className="row item">
            <div className="twelve columns">
              <h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <p>{work.description}</p>
            </div>
          </div>)
      })
    }
    if (this.props.skills) {
      var skills = this.props.skills.map(skill => {
        var className = 'bar-expand ' + skill.name.toLowerCase()
        return <li key={skill.name}><span style={{ width: skill.level }} className={className}><em>{skill.name}</em></span></li>

      })
    }

    return (
      <section id="resume" >
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {education}
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
      voluptatem sequi nesciunt.</p>
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
