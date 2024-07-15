import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/login/', { mobile_number: mobileNumber, otp })
      .then(response => {
        if (response.data.is_verified) {
          history.push('/dashboard');
        } else {
          alert('OTP verification failed.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>OTP</Form.Label>
          <Form.Control type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
