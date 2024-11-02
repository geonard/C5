import React, { useState } from 'react';
import './Navbar.css';  // Ajoutez votre propre style ici pour la personnalisation du CSS
import logo from './assets/logo.webp'; // Ajuste le chemin en fonction de l'emplacement de ton image
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo Dark Vapor" />
        </Link>
      </div>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={isOpen}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'show-menu' : ''}`}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/commandes">Commandes</Link></li>
        <li><Link to="/create-database">Créer la Base de Données</Link></li> {/* Lien vers la création de la base de données */}
        <li><Link to="/insert-data">Insérer les Données</Link></li> {/* Lien vers l'insertion des données */}
        <li><Link to="/backup">Sauvegarde de la Base de Données</Link></li> {/* Lien vers la sauvegarde de la base de données */}
        <li><a href="http://localhost/phpmyadmin" target="_blank" rel="noopener noreferrer">phpMyAdmin</a></li> {/* Lien vers phpMyAdmin */}
      </ul>
    </nav>
  );
};

export default Navbar;
