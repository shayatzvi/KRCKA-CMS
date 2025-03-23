import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">
          <Link to="/">KRCKA</Link>
        </h1>
        <nav className="site-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sitemap">Site Map</Link></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
