import React from 'react';
import Scroll from '../components/Scroll';
import profile from '../assets/images/jipark.jpg';

export default function About() {
  return (
    <section id="about" className="wrapper style1 special">
      <div className="inner">
        <img src={profile} className="avatar" />
        <br />
        <br />
        <header className="major">
          <h2>
            Hello world! I am Ji. I love coding.
            <br />
          </h2>
          <p>
            I am a <strong>full stack developer</strong> with a background in
            psychology and a passion for continuous learning. I thrive on
            solving complex problems and I enjoy working vigorously until I find
            creative and efficient solutions.
          </p>
          <p>
            After completing{' '}
            <a target="_blank" href="https://fullstackacademy.com/">
              Fullstack Academy
            </a>
            's software engineering immersive program in Spring 2020, I accepted
            their internship and mentored over 30 students in web development
            skills as a Teaching Fellow. Recently, I joined the incredible team
            at{' '}
            <a target="_blank" href="https://launchpadlab.com/">
              LaunchPad Lab
            </a>{' '}
            as a Software Developer and I could not be more excited and
            grateful!
          </p>
          <p>
            When I am not coding, I am usually petting every dog I meet on the
            street, singing to my plants (#plantmom), experimenting with
            kombucha brewing, meditating to{' '}
            <a target="_blank" href="https://www.sarahblondin.com">
              Sarah Blondin
            </a>
            , or hanging upside down on aerial silks. I approach life with
            passion and gratitude because I firmly believe
            <code>attitude && !aptitude === altitude </code>
            <br />
          </p>
        </header>
        <Scroll type="id" element="skills">
          <a href="#skills" className="more"></a>
        </Scroll>
      </div>
    </section>
  );
}
