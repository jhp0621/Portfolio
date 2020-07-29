import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';
import Layout from './Layout';

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
              </p>
              <p>
                <b>Basic Proficiency</b>: Firebase, NoSQL, SQL, React Native,
                Bootstrap, Socket.io, Heroku, Webpack, Passport
              </p>
              <p>
                <b>TDD</b>: Mocha, Chai, Jasmine
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="box">
                <h4>Learning</h4>
                <p>Currently: Angular, GraphQL, Docker</p>
                <p>On the radar: Swift, Ruby, AWS</p>
              </div>
            </div>
            <div id="resume" className="content">
              <b>Resume:&nbsp;&nbsp;</b>
              <Link to="/Resume">View</Link>
              <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <a href="https://drive.google.com/uc?export=download&id=1LzCpCVKNYY8wKZiC_ln-aGKoAFE_262Z">
                Download
              </a>
            </div>
          </div>
        </div>
        <p className="summary">
          Besides these hard skills, I have been honing a variety of{' '}
          <b>soft skills</b> as well. As a Teaching Fellow, I get to utilize my
          understanding of the human mind and behavior to provide diverse
          support to students. I also get to flex my teaching and training
          skills I have gained from my days as a tutor and as a volunteer
          supervisor. I am thrilled to continue to learn and grow as a software
          engineer and work with other talented individuals who are passionate
          about what they do. I am ready for new challenges and cannot wait to
          contribute to meaningful projects and applications that empower and
          motivate lives!
        </p>
        <Scroll type="id" element="projects">
          <a href="#projects" className="more"></a>
        </Scroll>
      </section>
    </section>
  );
}
