

import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Overlay escurecido para mobile */}
      {open && <div className="navbar-overlay" onClick={() => setOpen(false)} />}
      <button
        className={`navbar-toggle${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="navbar-links"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul
        id="navbar-links"
        className={`navbar-links${open ? " open" : ""}`}
        style={{
          transition: "right 0.3s cubic-bezier(.4,2,.6,1)",
        }}
      >
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/project" onClick={handleLinkClick}>Works</Link></li>
        <li><Link to="/stack" onClick={handleLinkClick}>Stacks</Link></li>
        <li><Link to="/contatos" onClick={handleLinkClick}>Contacts</Link></li>
        {/* Botão Sair para fechar o menu mobile */}
        {open && (
          <li style={{marginTop: '2rem', width: '100%'}}>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: '100%',
                background: 'var(--color-primary, #007bff)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 0',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                letterSpacing: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
