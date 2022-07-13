import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav className="my-nav">
      <Link to="/" className="my-logo">BookStore CMS</Link>
      <div className="link-container">
        <Link className="my-link" to="/">BOOKS</Link>
        <Link className="my-link" to="/categories">CATEGORIES</Link>
      </div>
      <Link to="/" className="my-user"><div className="user-container"><FaUser /></div></Link>
    </nav>
  </header>
);

export default Header;
