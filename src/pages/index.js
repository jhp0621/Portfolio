import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import profile from '../assets/images/pp.png';
import profile2 from '../assets/images/pp2.jpg';
import kite from '../assets/img/kite.png';
import eye from '../assets/img/eye.png';
import magik from '../assets/img/magik.gif';
import p1 from '../assets/images/pic01.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <Link to="/Resume" className="button">
          Resume
        </Link>
        <div>/</div>
        <Link to="/Projects" className="button">
          Projects
        </Link> */}
      </div>
      <Scroll type="id" element="about">
        <a href="#about" className="more"></a>
      </Scroll>
    </section>

    <section id="about" className="wrapper style1 special">
      <div className="inner">
        <img src={profile2} className="avatar" />
        <br />
        <br />
        <header className="major">
          <h2>
            Hello world! I am Ji. I heart coding.
            <br />
          </h2>
          <p>
            I am a <strong>full stack developer</strong> with a background in
            psychology and linguistics. I love solving challenging problems and
            working vigorously until I find creative and efficient solutions. I
            am currently a Teaching Fellow at{' '}
            <a target="_blank" href="https://fullstackacademy.com/">
              Fullstack Academy of Code
            </a>{' '}
            where I mentor over 30 students in web development skills,
            engineering concepts, debugging strategies, and writing clean code.
            I continue to learn each day by teaching!
            <br />
            <br />
            When I am not coding, I am usually resisting the urge to pet every
            dog I meet on the street, singing to my plants (#plantmom),
            experimenting with kombucha brewing, meditating to{' '}
            <a target="_blank" href="https://www.sarahblondin.com">
              Sarah Blondin
            </a>
            , or hanging upside down on aerial silks. I approach life with
            passion and gratitude because{' '}
            <code>attitude (!aptitude) === altitude </code>
            <br />
          </p>
        </header>
        <Scroll type="id" element="projects">
          <a href="/portfolio" className="more"></a>
        </Scroll>
      </div>
    </section>

    <section id="projects" className="wrapper alt style2">
      <section className="spotlight">
        <div className="">
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
                <a href="https://drive.google.com/uc?export=download&id=1Yxz-7RgbWPIsDFiJX30aP8yInGIC9Y8vo0ZPXyLtfnU">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    {/* <section id="featured" className="wrapper alt style2">
      <div className="spotlight">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <img src={magik} alt="" className="featured" />
        <p>blah</p>
      </div>
    </section> */}

    <section id="projects" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <Link to="/Projects" style={{ borderBottom: 'none' }}>
            <h2>Projects</h2>
          </Link>
          <p>
            My projects were built during the software engineering immersive
            bootcamp at Fullstack Academy.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-gamepad portfolio1">
            <Link to="/Projects#section1" className="anchor">
              <h3>Kite Games</h3>
              <p>Near, far, wherever we are, play games together with Kite!</p>
            </Link>
          </li>
          <li className="icon solid fa-mobile portfolio2">
            <Link to="/Projects#section2">
              <h3>M.A.G.I.K</h3>
              <p>
                Mindfulness, Affirmation app for Gratitude, Inspiration and
                Kindess
              </p>
            </Link>
          </li>
          <li className="icon solid fa-shopping-cart portfolio3">
            <Link to="/Projects#section3">
              <h3>Graced Pickles</h3>
              <p>Online merchandise store for pickles</p>
            </Link>
          </li>
          <li className="icon solid fa-eye portfolio4">
            <Link to="/Projects#section4">
              <h3>Eye Do Care</h3>
              <p>Chrome extension that sends a reminder for eye care</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
