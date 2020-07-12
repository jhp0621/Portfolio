import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <h6>Inspired by Many ❤</h6>
      <ul className="copyright">
        <li>Ji Hye Park</li>
        <li>
          2020
        </li>
      </ul>
    </footer>
  );
}
