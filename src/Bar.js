import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button,NavDropdown,Form,FormControl,Navbar,Nav } from 'react-bootstrap';

function NavBar(){
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/TodoList">TodoList</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/">Taches</Nav.Link>
      <Nav.Link href="/">Déconnexion</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

  )
}
export default NavBar;