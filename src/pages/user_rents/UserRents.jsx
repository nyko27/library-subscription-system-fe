import React, { useState } from 'react';
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link, } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { getUserRents, getUserByPhoneNumber } from '../../utils/api/user_api';
import "./UserRents.css";

const СompletedRentHendler = (currentRent) => (
    !(currentRent.rent_end_date)
        ?
        <Link to={`/rent-return/${currentRent.id}`}>
            <Button variant="outline-success" className="return-button">
                Return
            </Button>
        </Link >
        : <h4>Book's already returned</h4>
);

export default function UserRents(props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rents, setRents] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        const user = await getUserByPhoneNumber(phoneNumber);
        const rentsReposnse = await getUserRents(user.id);
        setRents(rentsReposnse.data);
    }

    return (
        <div>
            <div className='wrapper-form'>
                < div className="button-wrapper" >
                    <Link to={"/"}>
                        <Button className="button-add" variant="outline-dark">
                            Go back
                        </Button>
                    </Link>
                </div >
                <div className="form-wrapper">
                    <h2 className="form-title">Books rented by user</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="number"
                                placeholder="Enter phone number" />
                        </Form.Group>


                        <Button
                            onClick={async (e) => { await handleSubmit(e) }}
                            variant="outline-dark"
                            type="submit"
                            className="submit-button">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

            {rents.map((rent) => (
                <Card className="rent-item">
                    <Card.Body className="rent-body">
                        <Row>
                            <Col>
                                <Card.Title className="rent-book">
                                    Book: {rent.library_item.book.title}
                                </Card.Title>
                            </Col>

                            <Col style={{ display: "flex" }}>
                                <Card.Text className="rent-user">User: {`${rent.library_user.surname} ${rent.library_user.name}`}</Card.Text>
                            </Col>

                            <Col style={{ display: "flex" }}>
                                {СompletedRentHendler(rent)}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
