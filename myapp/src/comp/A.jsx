import React, { useState, useEffect } from 'react';

const A = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch('http://localhost:3007/data')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default A;
