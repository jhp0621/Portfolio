import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import CTA from '../components/CTA';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Scroll from '../components/Scroll';
import About from '../components/About';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <br />
      </div>
      <div className="buttons">
        <Link to="/Resume" className="button resume">
          Resume
        </Link>{' '}
        <div>&nbsp;</div>
        <Link to="/Projects" className="button projects">
          Projects
        </Link>
      </div>
      <Scroll type="id" element="about">
        <a href="#about" className="more"></a>
      </Scroll>
    </section>
    <About />
    <Skills />
    <Projects />
    <CTA />
  </Layout>
);

export default IndexPage;
