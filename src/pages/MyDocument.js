import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

const MyDocument = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/grievances/')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <h2>My Documents</h2>
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
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.grievance_text}</td>
              <td>{doc.grievance_audio}</td>
              <td>{doc.status}</td>
              <td>{doc.created_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyDocument;
