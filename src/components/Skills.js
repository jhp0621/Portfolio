import React from 'react';
import { Link } from 'gatsby';

export default function Skills() {
  return (
    <section id="skills" className="wrapper alt style2">
      <section className="spotlight">
        <h2>Skills</h2>
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
                  Currently: Angular, GraphQL, Data Structures
                  <br />
                  <br /> On the radar: Swift, Ruby, Typescript, AWS
                </p>
              </div>
            </div>
            <div id="resume" className="content">
              <b>Resume:&nbsp;&nbsp;</b>
              <Link to="/Resume">View</Link>
              <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <a href="https://drive.google.com/uc?export=download&id=1SueNRugz8AeJUBqNmQlEO5Z9MWckuWUP">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
