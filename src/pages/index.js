import React from 'react';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';

const HomePage = ({ data }) => {
  const establishments = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.collection === 'establishments');
  const products = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.collection === 'products');

  return (
    <div>
      <h1>Establishments</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Company</th>
            <th>Kosher Status</th>
          </tr>
        </thead>
        <tbody>
          {establishments.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.frontmatter.name}</td>
              <td>{node.frontmatter.location}</td>
              <td>{node.frontmatter.company}</td>
              <td>{node.frontmatter.kosher_status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kosher Status</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.frontmatter.name}</td>
              <td>{node.frontmatter.kosher_status}</td>
              <td>{node.frontmatter.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            collection
            name
            location
            company
            kosher_status
            brand
          }
        }
      }
    }
  }
`;

export default HomePage;
