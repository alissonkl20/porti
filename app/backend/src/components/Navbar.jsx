
import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/project">Works</Link></li>
        <li><Link to="/stack">Stacks</Link></li>
        <li><Link to="/contatos">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
