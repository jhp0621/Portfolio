import React from 'react';
import Layout from '../components/Layout';
import kite from '../assets/img/kite.png';
import kitegif from '../assets/img/kite.gif';
import magik from '../assets/img/magik.jpg';
import magikgif from '../assets/img/magik.gif';
import pickle from '../assets/img/gpickles.png';
import gpgif from '../assets/img/gpickles.gif';
import eye from '../assets/img/edc.jpg';
import eyegif from '../assets/img/edc.gif';

const IndexPage = () => {
  return (
    <Layout fullMenu>
      <article id="main" className="projects">
        <header>
          <h2>Projects</h2>
          <i>
            <sup>.. Work In Progress ..</sup>
          </i>
        </header>
        <section id="section1" className="wrapper style5">
          <div id="projects" className="inner">
            <div className="row">
              <h3>Kite Games&nbsp;&nbsp;</h3>
              <img src={kite} height="40em" />
            </div>
            <h6>Full Stack Developer | April '20</h6>
            <span className="image right kite">
              <img src={kitegif} alt="" className="gif" />
              <br />
              <ul className="icons">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/AJL-Cap/Kite/"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://www.kite.games/"
                    style={{ borderBottom: 'none' }}
                  >
                    <i class="fas fa-link fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
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
              weeks by a team of three developers, using Firebase, React,
              Express, Node, and Bootstrap. As social distancing quickly became
              the norm, we were inspired to create a virtual space where friends
              can enjoy each other's company without having to be in the same
              room.
            </p>
            <p>
              Similar to Jackbox.Tv, Kite users can host or join a game through
              a shared code and play classic party games such as 'Fess up'
              (Never Have I Ever), 'Drawing a Blank' (Pictionary), and 'Rope
              Dude' (Hangman). They can use the chat to communicate (#gg) and
              send direct invites to other players.
            </p>
            <p>
              My contributions for the project include: <br />• building a
              variety of components and utility functions for games, <br />•
              setting up user authentication, OAuth & profile, <br />• using
              Cloudinary and Signature Canvas for image processing, and <br />•
              implementing sound effects for games, chats, and notifications.
            </p>
            <div id="section2"></div>
            <hr />

            <div className="row">
              <h3>M.A.G.I.K&nbsp;&nbsp;</h3>
              <img src={magik} height="40em" />
            </div>
            <h6>Sole Developer | April '20</h6>
            <span className="image right magik">
              <img src={magikgif} alt="" className="gif" />
              <br />
              <ul className="icons">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/jhp0621/M.A.G.I.K"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/kHfzCNxTKsU"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                </li>
              </ul>
            </span>
            <p>
              M.A.G.I.K is an iOS, Android mobile app I created during a 4-day
              hackathon using React Native, Expo.io, and Google Cloud
              Speech-to-Text & Text-to-Speech APIs. The name stands for{' '}
              <strong>M</strong>indfulness, <strong>A</strong>ffirmations app
              that helps you practice <strong>G</strong>ratitude, feel{' '}
              <strong>I</strong>nspired, and be <strong>K</strong>ind to
              yourself.{' '}
            </p>
            <p>
              I am a big fan of meditation and I use{' '}
              <a target="_blank" href="https://insighttimer.com/">
                Insight Timer
              </a>{' '}
              daily. If there is one feature I could add to the app, it would be
              allowing users to customize affirmations they meditate to. This is
              why I built M.A.G.I.K! On M.A.G.I.K, users will record their own
              affirmations, choose the voice preference for gender, pitch, and
              speed, and finally, meditate to their personal mantra spoken by
              the AI voice of their choice (or their own voice), on repeat,
              combined with the sound of soothing music.{' '}
            </p>
            <p>
              I won the People's Choice Award for this project by receiving the
              highest number of votes from my cohort. I am very pleased with how
              it turned out and plan to add more features. Try it out for
              yourself! My affirmations of the day include: "I'm making
              substantial progress on my portfolio website!"
            </p>
            <div id="section3"></div>
            <hr />

            <div className="row gp">
              <h3>Graced Pickles&nbsp;&nbsp;</h3>
              <img src={pickle} alt="" height="40em" />
            </div>
            <h6>Full Stack Developer | March '20</h6>
            <span className="image right gp">
              <img src={gpgif} alt="" className="gif" />
              <br />
              <ul className="icons">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/FSA-2001-CHI-Dill/Graced-Pickles"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://gracedpickles.com/"
                    style={{ borderBottom: 'none' }}
                  >
                    <i class="fas fa-link fa-2x" />
                  </a>
                </li>
              </ul>
            </span>
            <p>
              Graced Pickles is a fully functional mock e-commerce website built
              in a 7-day sprint by a team of three developers, using React,
              Redux, Node, Express, Sequelize, and Bootstrap.{' '}
            </p>
            <p>
              We built the application from scratch using all the technologies
              we learned. We started out by setting up our project board for
              assigning and tracking tasks and designing the database schema.
              This was my first group project as a developer and it taught me
              how to effectively communicate with my team, divide the workload
              fairly, and resolve conflicts when they arise.
            </p>
            <p>
              My contributions for the project include: <br />• setting up
              relational database models, <br />• creating most back-end routes,
              including ones that ensure smooth cart experience on the user end
              (from guest to logged-in user), <br />• building front-end
              components and structuring our Redux store, and <br />•
              implementing Stripe for checkout and payment processing. <br />
              &nbsp;
            </p>
            <div id="section4"></div>
            <hr />

            <div className="row">
              <h3>Eye Do Care&nbsp;&nbsp;</h3>
              <img src={eye} alt="" height="40em" />
            </div>

            <h6>Sole Developer | March '20</h6>
            <span className="image right edc">
              <img src={eyegif} alt="" className="gif" />
              <br />
              <ul className="icons gif">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/jhp0621/Eye-Do-Care"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
              </ul>
            </span>
            <p>
              This is a basic Chrome extension that sends a recurring reminder
              to use the 20-20-20 rule for preventing digital eye strain. The
              idea is for every 20 minutes, you take a 20-second break by
              focusing your eyes on something at least 20 feet away.{' '}
            </p>
            <p>
              I was inspired to create this after noticing how tired my eyes
              became since I had begun the coding bootcamp. Unlike most of the
              reminder extensions I have seen, I wanted one that would{' '}
              <i>force</i> me to let my eyes rest, instead of me clearing up the
              notification and proceeding to stare at the computer screen. My
              solution was to display a 20-second timer as well as{' '}
              <a href="https://tenor.com/view/lookaway-bridesmaids-melissamccarthy-diarrhea-strong-gif-5295050">
                this hilarious gif from Bridesmaids
              </a>{' '}
              as part of a modal overlay on the current tab the user is on,
              thereby temporarily blocking the access to the page.
            </p>
            <p>
              I was able to establish a seamless communication between popup,
              background, and content scripts to display the modal and set
              repeating alarms based on the user's preference. I actually use
              this extension daily! And my eyes are thankful for it ʕ•́ᴥ•̀ʔっ♡{' '}
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default IndexPage;
