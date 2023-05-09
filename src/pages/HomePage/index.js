import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
function HomePage(props) {
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

            <Card style={{ width: '18rem' }} className="m-2">
                
                <Col>{allergensCard.carriers.map((image) => ( <Image variant="top"  className="float-right" src={image.image} roundedCircle 
                style={{width: 100, height: 100, borderRadius: 100/ 2}} />))}
               </Col>
                <Card.Body>

                    <Card.Title>Название: {allergensCard.name}</Card.Title>
                    <Card.Text>
                        <h3>Компоненты:</h3>
                        {allergensCard.carriers.map((allergen) => (<p>{allergen.name}</p>))}
                    
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

        )))
    }


    return (

        <Row>
            <h1>Карточки аллергии:</h1>
            <p>Карточки аллергии могут содержать один аллерген или несколько.</p>
            <Cards />

        </Row>




    );
}

export default HomePage
