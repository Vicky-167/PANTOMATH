import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    mobile_number: '',
    address: '',
    id_proof_type: '',
    id_proof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, id_proof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    axios.post('http://localhost:8000/api/users/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" name="mobile_number" value={formData.mobile_number} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>ID Proof Type</Form.Label>
          <Form.Control as="select" name="id_proof_type" value={formData.id_proof_type} onChange={handleChange}>
            <option>Aadhaar</option>
            <option>Passport</option>
            <option>License</option>
            <option>Voter ID</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>ID Proof</Form.Label>
          <Form.Control type="file" name="id_proof" onChange={handleFileChange} />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
