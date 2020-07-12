import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';

export default function Skills() {
  return (
    <section id="skills" className="wrapper alt style2">
      <section className="spotlight">
        <h2>Skill Set & Interests</h2>
        <div className="row">
          <div className="content">
            <div className="box">
              <h4>Toolbox</h4>
              <p>
                <b>Key Skills</b>: JavaScript, HTML5, CSS3, React, Redux,
                Node.js, Express, Sequelize, RESTful API, PostgreSQL, Git
                <br />
                <br />
                <b>Basic Proficiency</b>: Firebase, NoSQL, SQL, React Native,
                Bootstrap, Socket.io, Heroku, Webpack, Passport
                <br />
                <br />
                <b>TDD</b>: Mocha, Chai, Jasmine
                <br />
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="box">
                <h4>Learning</h4>
                <p>
                  Currently: Angular, GraphQL, Docker
                  <br />
                  <br /> On the radar: Swift, Ruby, Typescript, AWS
                </p>
              </div>
            </div>
            <div id="resume" className="content">
              <b>Resume:&nbsp;&nbsp;</b>
              <Link to="/Resume">View</Link>
              <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <a href="https://drive.google.com/uc?export=download&id=1WEdkketBJ-4iUr-HpcCAbgUCraw6EhKe">
                Download
              </a>
            </div>
          </div>
        </div>
        <p className="summary">
          Besides these hard skills, I have been honing a variety of <b>soft
          skills</b> as well. As a Teaching Fellow, I get to utilize my understanding of the human mind and behavior to provide adequate, diverse support to my
          students. I also get to flex my teaching and training skills I have
          gained from my days as a tutor and as a supervisor for volunteers. I
          am thrilled to continue to learn and grow as a software
          engineer and work with other talented individuals who are passionate about what they do. I am ready for new challenges and cannot wait to contribute to meaningful projects and applications that empower and motivate lives!
        </p>
        <Scroll type="id" element="projects">
          <a href="#projects" className="more"></a>
        </Scroll>
      </section>
    </section>
  );
}
