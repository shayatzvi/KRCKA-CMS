import React from 'react';

const EstablishmentsTable = ({ establishments }) => {
  if (!establishments || establishments.length === 0) {
    return <p>No establishments found.</p>;
  }

  return (
    <div className="table-container">
      <h2>Establishments</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Company</th>
            <th>Kosher Status</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
          {establishments.map((establishment, index) => (
            <tr key={index}>
              <td>{establishment.name}</td>
              <td>{establishment.location}</td>
              <td>{establishment.company}</td>
              <td>{establishment.kosher_status}</td>
              <td>
                {establishment.certificate && (
                  <a href={establishment.certificate} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstablishmentsTable;
