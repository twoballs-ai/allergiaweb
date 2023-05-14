import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
  
        <Navbar bg="dark" variant='dark' expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Дневник аллергика</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Профиль" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Авторизация</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Регистрация                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Панель управления
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Выход
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>

                </Navbar.Collapse>
              </Container>
            </Navbar>
 
            
    );
}
