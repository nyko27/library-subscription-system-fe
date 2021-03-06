import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { addUser } from '../../utils/api/user_api';
import { checkFormsFilling, objToJson } from '../../utils/functions';
import "./AddReader.css";
import ErrorWindow from '../../components/error_window/ErrorWindow';

export default function AddReader() {
    const [name, setName] = useState('');
    const [surname, setSurame] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (messageForUser) => {
        setShow(true);
        setMessage(messageForUser);
    };


    async function handleSubmit(e) {
        e.preventDefault();

        const formsData = { name, surname, phoneNumber, address, "reader_category_id": 1 };
        if (!(checkFormsFilling(formsData))) {
            handleShow("Oops, something went wrong...");
        } else {
            const newReader = objToJson(formsData);
            const response = await addUser(newReader);

            if (response.status === 201) {
                handleShow("Reader was added to library!");
            } else {
                handleShow("Oops, something went wrong...");
            }
        }
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="button-wrapper">
                    <Link to={"/"}>
                        <Button className="button-add" variant="outline-dark">
                            Go back
                        </Button>
                    </Link>
                </div>
                <div className="form-wrapper">
                    <h2 className="form-title">Add a new reader</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                value={surname}
                                onChange={(e) => setSurame(e.target.value)}
                                type="text"
                                placeholder="Enter surname" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="number"
                                placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                placeholder="Enter address" />
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
            <ErrorWindow show={show} handleClose={handleClose} message={message}>
            </ErrorWindow>
        </>
    );
}

