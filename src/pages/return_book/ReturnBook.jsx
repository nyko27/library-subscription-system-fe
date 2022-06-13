import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import { rentReturn } from '../../utils/api/rent_api';
import { objToJson } from '../../utils/functions';
import ErrorWindow from '../../components/error_window/ErrorWindow';
import "./ReturnBook.css";

export default function ReturnBook(props) {
    const { id } = useParams();

    const [paymentType, setPaymentType] = useState('card');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (messageForUser) => {
        setShow(true);
        setMessage(messageForUser);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const formsData = { paymentType };

        const bookReturn = objToJson(formsData);
        const response = await rentReturn(id, bookReturn);

        if (response.status === 200) {
            handleShow(`Book was returned! Rent price is ${response.data.rent_price}`);
        } else {
            handleShow("Oops, something went wrong...");
        }
    }


    return (
        <>
            <div className="page-wrapper">
                <div className="button-wrapper">
                    <Link to={"/user-rents"}>
                        <Button className="button-add" variant="outline-dark">
                            Back to rents
                        </Button>
                    </Link>
                </div>
                <div className="form-wrapper">
                    <h2 className="form-title">Return the book</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Payment type</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setPaymentType(e.target.value)}>
                                <option value='card'>Card</option>
                                <option value='bank_account'>Bank account</option>
                            </Form.Select>
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
