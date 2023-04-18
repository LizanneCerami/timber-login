import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleForm = e => {
      const newValue = e.target.value.trim();
    }
    
  return (
    <>
      <Form>
        <Form.Group className= "mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={handleForm} />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className= "mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange= {handleForm}
          />
        </Form.Group>

        <Form.Group>
          <Button
          variant="success"
          size="lg" 
          type="submit">Login</Button>
        </Form.Group>
      </Form>
    </>
  )
}