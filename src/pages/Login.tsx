import { Button, Col, Form, Row } from 'react-bootstrap';
const Login = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login