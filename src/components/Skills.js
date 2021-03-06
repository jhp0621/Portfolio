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
          <b>soft skills</b> as well. As a Teaching Fellow at FSA, I utilized my
          experience in the field of psychology to provide diverse
          support to my students and serve as a conflict management resource. I am thrilled to continue to learn and grow as a software
          engineer and work with other talented individuals who are passionate
          about what they do. I am always open for new challenges and interested in
          contributing to meaningful projects that empower &
          motivate lives!
        </p>
        <Scroll type="id" element="projects">
          <a href="#projects" className="more"></a>
        </Scroll>
      </section>
    </section>
  );
}
