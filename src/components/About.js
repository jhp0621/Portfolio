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
            psychology and mental health. I thrive on the challenge of solving
            complex problems and enjoy working vigorously until I find creative and efficient
            solutions. I am currently a Teaching Fellow at{' '}
            <a target="_blank" href="https://fullstackacademy.com/">
              Fullstack Academy of Code
            </a>{' '}
            where I mentor over 30 students in web development skills and manage
            multiple projects with varying tech stacks. I continue to learn each
            day by teaching!
           </p><p>
            When I am not coding, I am usually petting every dog I meet on the
            street, singing to my plants (#plantmom), experimenting with
            kombucha brewing, meditating to{' '}
            <a target="_blank" href="https://www.sarahblondin.com">
              Sarah Blondin
            </a>
            , or hanging upside down on aerial silks. I approach life with
            passion and gratitude because I firmly believe
            <code>attitude && !aptitude == altitude </code>
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
