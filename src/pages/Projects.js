import React from 'react';
import Layout from '../components/Layout';
import kite from '../assets/img/kite.png';
import magik from '../assets/img/magik.png';

const IndexPage = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Projects</h2>
          <p>.. Work In Progress ..</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <div id="section1">
              <h3>Kite Games</h3>
              <h6>Full Stack Developer | April '20</h6>
              <span className="image left">
                <img src={kite} alt="" />
                 <br />

                <ul className="icons">
                  <li>
                    <a target="_blank"
                      href="https://github.com/AJL-Cap/Kite/"
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank"
                      href="http://www.kite.games/"
                      style={{ borderBottom: 'none' }}
                    >
                      <i class="fas fa-link fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank"
                      href="https://youtu.be/ECHcCAnJn0E"
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  </li>
                </ul>
              </span>
              <p>
                Kite is a multiplayer realtime games website built within 2.5
                weeks by a team of three developers, using Firebase, React, Express and Node. As social distancing quickly
                became the norm, we were inspired to create a virtual space
                where friends can enjoy each other's company without
                having to be in the same room.
              </p>
              <p>
                Similar to Jackbox.Tv, Kite users can host or join a
                game through a shared code and play classic party games such as
                'Fess up' (Never Have I Ever), 'Drawing a Blank'
                (Pictionary), and 'Rope Dude' (Hangman). They can use the chat
                to communicate (#gg) and send direct invites to other players.
              </p>
              <p>
                My contributions for the project include: <br/>• building a variety of
                components and utility functions for games, <br/>• setting up user
                authentication, OAuth & profile, <br/>• using Cloudinary and Signature Canvas
                for image processing, and <br/>• implementing sound effects for games,
                chats, and notifications.
              </p>
              <hr />
            </div>
            <div id="section2">
              <h3>M.A.G.I.K </h3>
              <h6>Sole Developer | April '20</h6>
              <span className="image left">
                <img src={magik} alt="" />
                <br />

                <ul className="icons">
                  <li>
                    <a target="_blank"
                      href="https://github.com/jhp0621/M.A.G.I.K"
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank"
                      href=""
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  </li>
                </ul>
              </span>
              <p>M.A.G.I.K is an iOS, Android mobile app I created during a 4-day hackathon using React Native, Expo.io, and Google Cloud Speech-to-Text & Text-to-Speech APIs. The name stands for <strong>M</strong>indfulness, <strong>A</strong>ffirmations app for users to practice <strong>G</strong>ratitude, feel <strong>I</strong>nspired, and be <strong>K</strong>ind to themselves. </p>
              <p>I am big fan of meditation and I use <a target="_blank" href="https://insighttimer.com/">Insight Timer</a> daily. If there is one feature I could add to the app, it would be allowing users to customize affirmations they can meditate to. This is why I built M.A.G.I.K! On M.A.G.I.K, users will record their own affirmations, choose the voice preference for gender, pitch and speed, and finally, meditate to their personal mantra spoken by the AI voice of their choice (or their own voice), on repeat, combined with the sound of soothing music. </p>
              <p>Try it out for yourself! Be as specific as you can and visualize yourself achieving your goals. These are my affirmations of the day: "Today I am going to stay motivated, focused and productive. I am going to get at least 15k steps in and make substantial progress on this portfolio website."</p>
            </div>
            <hr />
            <div id="section3">
              <h3>Graced Pickles</h3>
              <h6>Full Stack Developer | March '20</h6>
              <p>blah blah</p>
            </div>
            <div id="section4">
              <h3>Eye Do Care</h3>
              <p>blah blah</p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default IndexPage;
