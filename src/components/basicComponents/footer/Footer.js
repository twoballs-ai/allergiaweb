import React from "react"
import { Route, Routes } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';


function Footer(props) {
    return (

        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Дневник аллергика</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
        <p>2022</p>
      </Navbar>

    )
}

export default Footer
