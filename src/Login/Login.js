import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Login.css';
import NavBar from '../Bar';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
        .catch(() => alert('username or password re incorrect'))
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    setToken(token);
    
  }

  return(
  <div className="login-wrapper">
  <div className="wrapper">
  <NavBar/>
  </div>
  <h1>Veuillez vous connecter</h1>    
  <Form className="form1" onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Username</Form.Label>
  <input type="text" onChange={e => setUserName(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <input type="password" onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
 
  <Button className='btn' variant="primary" type="submit">
    Submit
  </Button>
  </Form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};