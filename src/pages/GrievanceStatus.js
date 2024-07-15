import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

const GrievanceStatus = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/grievances/')
      .then(response => {
        setGrievances(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <h2>Grievance Status</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Grievance Text</th>
            <th>Grievance Audio</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((grievance) => (
            <tr key={grievance.id}>
              <td>{grievance.id}</td>
              <td>{grievance.grievance_text}</td>
              <td>{grievance.grievance_audio}</td>
              <td>{grievance.status}</td>
              <td>{grievance.created_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GrievanceStatus;
