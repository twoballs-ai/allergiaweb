import React from "react"
import { Route, Routes } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Container } from "react-bootstrap";


function Main(props) {
    return (
        <Container>



            <Outlet />

        </Container>

    );
}

export default Main
