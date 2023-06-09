import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import StepperAllergen from "../../components/stepper/stepper";
function HomePage(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [allergensCards, setAllergensCards] = useState([])
    const baseURL = "http://backend.ronzo.ru/";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg2MTI3MjEwLCJqdGkiOiJhMWE4YzU4MTM5ZWU0ZGNjOTE2YTZlY2EzM2FiNDRjNiIsInVzZXJfaWQiOjF9.w1KF271za6hzN_2y0HR6vdIx55QYPCRJatpg7LxLPQo"
    React.useEffect(() => {
        axios.get(baseURL, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
            console.log(res.data)
            console.log('fsfs')
            setAllergensCards(res.data);

            //       const loggedInUser = localStorage.getItem("authenticated");
            // if (loggedInUser) {
            // setauthenticated(loggedInUser);
            // }
        });
    }, []);

    if (!allergensCards) return null;


    const Cards = () => {
        
        return (allergensCards.map(allergensCard => (

            <Card style={{ width: '18rem' }} className="m-2 shadow">
                <Card.Body>

                    <Card.Title>Название: {allergensCard.name}</Card.Title>
                    <Card.Text>
                        <h3>Компоненты:</h3>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                {allergensCard.carriers.map((allergen) => (<ListGroup.Item><Image variant="top"  className="float-right" src={allergen.image} roundedCircle 
                style={{width: 40, height: 40, borderRadius: 50/2}} />{allergen.name}</ListGroup.Item>))}                
                </ListGroup>
                <h4>Аллергены:</h4>
                <ListGroup className="list-group-flush mt-2">
                {allergensCard.carriers.map((allergen) => (<ListGroup.Item>{allergen.allergen.name}</ListGroup.Item>))}                
                </ListGroup>
                <Card.Body>
                
                    <Card.Link href="#">Подробнее</Card.Link>
                    
                </Card.Body>
            </Card>

        )))
    }


    return (

        <Row>
                  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новую карточку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <StepperAllergen />
        </Modal.Body>

      </Modal>
            <h1>Карточки аллергии: <Button variant="primary" onClick={handleShow}>Добавить новую карточку</Button>{' '}</h1>
            <p>Карточки аллергии могут содержать один аллерген или несколько.</p>
            <Cards />

        </Row>




    );
}

export default HomePage
