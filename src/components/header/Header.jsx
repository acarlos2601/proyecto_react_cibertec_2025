import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Header = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to={'/'} >Mi Proyecto React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to={'/'} >Home</Nav.Link>
            <Nav.Link as={NavLink} to={'/configuracion'} >Configuración</Nav.Link>
            <Nav.Link as={NavLink} to={'/login'} >Login</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to={'/productos'} >Listar Productos</NavDropdown.Item>
              <NavDropdown.Item >
                Crear Producto
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Buscar producto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/usuarios" >
              Usuarios
            </Nav.Link>
          </Nav>
          <Button variant="outline-success">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

