import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header-logo">
        <img src="TrollFace.png" className="troll-face" alt="trollface img" />
        <h2>Meme Generator</h2>
      </div>
      <div>
        <h4>React - Project </h4>
      </div>
    </nav>
  );
}
