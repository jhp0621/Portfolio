import React from 'react'
import { Link } from 'gatsby';

export default function Projects () {
  return (
    <section id="projects" className="wrapper style3 special">
    <div className="inner">
    <header className="major">
      <Link to="/Projects" style={{ borderBottom: 'none' }}>
        <h2 style={{ borderBottom: 'none' }}>Projects</h2>
      </Link>
      <p>
        These projects were built during the later phase of my coding
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
  )
}
