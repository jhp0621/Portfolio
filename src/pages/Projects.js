import React from 'react';
import Layout from '../components/Layout';
import kite from '../assets/img/kite2.jpg';
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
              <h6>Full Stack Developer | April 2020</h6>
              <span className="image left">
                <img src={kite} alt="" />
              </span>
              <p>
                Kite is a multiplayer realtime games website built within 2.5
                weeks by a team of 3 developers, using Firebase, React, Express and Node. As social distancing quickly
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
                components and utility functions for games <br/>• setting up user
                authentication & profile<br/>• using Cloudinary and Signature Canvas
                for image processing and <br/>• implementing sound effects for games,
                chats, and notifications.
              </p>{' '}
              <p>
                <ul className="icons">
                  <li>
                    <a
                      href="https://github.com/AJL-Cap/Kite/"
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.kite.games/"
                      style={{ borderBottom: 'none' }}
                    >
                      <i class="fas fa-link fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/ECHcCAnJn0E"
                      style={{ borderBottom: 'none' }}
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  </li>
                </ul>
              </p>
              <hr />
            </div>
            <div id="section2">
              <h3>M.A.G.I.K </h3>
              <h6>Sole Developer | April 2020</h6>
              <span className="image left">
                <img src={magik} alt="" />
              </span>
              <p>blah blah</p>
            </div>
            <div id="section3">
              <h3>Graced Pickles</h3>
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
