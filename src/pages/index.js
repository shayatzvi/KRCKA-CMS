import React, { useState, useEffect } from 'react';
import EstablishmentsTable from '../components/EstablishmentsTable';
import ProductsTable from '../components/ProductsTable';

const HomePage = () => {
  const [establishments, setEstablishments] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from your content API
    // For demonstration purposes, we're using a timeout to simulate data fetching
    const fetchData = async () => {
      try {
        // Simulate API calls
        // In production, replace with actual API calls to your CMS
        setTimeout(() => {
          // Example data
          setEstablishments([
            {
              name: 'Example Restaurant',
              location: 'New York, NY',
              company: 'Example Co.',
              kosher_status: 'Kosher',
              certificate: '/uploads/sample-certificate.jpg'
            },
            {
              name: 'Sample Bakery',
              location: 'Los Angeles, CA',
              company: 'Sample Inc.',
              kosher_status: 'Kosher Dairy',
              certificate: '/uploads/sample-certificate2.jpg'
            }
          ]);
          
          setProducts([
            {
              name: 'Matzo',
              brand: 'Manischewitz',
              kosher_status: 'Kosher Pareve',
              description: 'Traditional unleavened bread'
            },
            {
              name: 'Challah Bread',
              brand: 'Zomick\'s',
              kosher_status: 'Kosher Pareve',
              description: 'Traditional braided bread'
            }
          ]);
          
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  return (
    <div className="home-page">
      <div className="container">
        <h1>Welcome to KRCKA</h1>
        <p>Your trusted source for kosher certification information.</p>
        
        <EstablishmentsTable establishments={establishments} />
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default HomePage;
