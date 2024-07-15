import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const HelpSupport = () => (
  <Container>
    <h2>Help Support</h2>
    <Form>
      <Form.Group>
        <Form.Label>Chat with Support</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  </Container>
);

export default HelpSupport;
