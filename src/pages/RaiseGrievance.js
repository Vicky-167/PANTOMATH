import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const RaiseGrievance = () => {
  const [formData, setFormData] = useState({
    grievance_text: '',
    grievance_audio: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, grievance_audio: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    axios.post('http://localhost:8000/api/grievances/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      <h2>Raise Grievance</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Grievance Text</Form.Label>
          <Form.Control as="textarea" name="grievance_text" value={formData.grievance_text} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Grievance Audio</Form.Label>
          <Form.Control type="file" name="grievance_audio" onChange={handleFileChange} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default RaiseGrievance;
