import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const firebaseConfig = {
  apiKey: "AIzaSyDT_VCwdWehZUzD14WrBi48LZycuQxFv7k",
  authDomain: "timber-login-lc.firebaseapp.com",
  projectId: "timber-login-lc",
  storageBucket: "timber-login-lc.appspot.com",
  messagingSenderId: "992195627246",
  appId: "1:992195627246:web:090e2b2a30dfe98de0cbff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignupForm() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleForm = e => {
      const newValue = e.target.value.trim();
    }
    
  return (
    <>
      <Form>
        <Form.Group className= "mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your First Name"
            onChange={ handleForm } />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter Your Last Name"
          onChange={ handleForm } />
        </Form.Group>

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