import React from 'react';

const ProductsTable = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="table-container">
      <h2>Products</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Kosher Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.kosher_status}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
