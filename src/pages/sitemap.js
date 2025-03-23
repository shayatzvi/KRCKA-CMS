import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  const [content, setContent] = useState({
    establishments: [],
    products: [],
    pages: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching content for the sitemap
    // In a real app, you would fetch this from your CMS API
    setTimeout(() => {
      setContent({
        establishments: [
          { name: 'Example Restaurant', slug: 'example-restaurant' },
          { name: 'Sample Bakery', slug: 'sample-bakery' }
        ],
        products: [
          { name: 'Matzo', slug: 'matzo' },
          { name: 'Challah Bread', slug: 'challah-bread' }
        ],
        pages: [
          { title: 'About Us', slug: 'about-us' },
          { title: 'Contact', slug: 'contact' },
          { title: 'FAQ', slug: 'faq' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Loading sitemap...</div>;
  }

  return (
    <div className="sitemap-page">
      <div className="container">
        <h1>Site Map</h1>
        
        <section className="sitemap-section">
          <h2>Main Pages</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            {content.pages.map((page, index) => (
              <li key={index}>
                <Link to={`/${page.slug}`}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="sitemap-section">
          <h2>Establishments</h2>
          <ul>
            {content.establishments.map((item, index) => (
              <li key={index}>
                <Link to={`/establishments/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="sitemap-section">
          <h2>Products</h2>
          <ul>
            {content.products.map((item, index) => (
              <li key={index}>
                <Link to={`/products/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SiteMap;
