import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import { addRent } from '../../utils/api/rent_api';
import { getBookById } from '../../utils/api/book_api';
import { checkFormsFilling, objToJson } from '../../utils/functions';
import ErrorWindow from '../../components/error_window/ErrorWindow';
import "./RentBook.css";


export default function RentBook() {
    const { id } = useParams();

    const [bookTitle, setBookTitle] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [expectedRentEndDate, setExpectedRentEndDate] = useState('');
    const [paymentType, setPaymentType] = useState('card');

    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (messageForUser) => {
        setShow(true);
        setMessage(messageForUser);
    };

    useEffect(() => {
        (async () => {
            const bookForRent = await getBookById(id);
            setBookTitle(bookForRent.title);
        })();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const formsData = { phoneNumber, expectedRentEndDate, paymentType };
        if (!(checkFormsFilling(formsData))) {
            handleShow("Oops, something went wrong...");
        } else {
            const bookRent = objToJson(formsData);
            const response = await addRent(bookRent);

            if (response.status === 201) {
                handleShow(`You successfully rented ${bookTitle} book!`);
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
                    <h2 className="form-title">Rent the book</h2>
                    <h2 className="form-title">"{`${bookTitle}`}"</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="number"
                                placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Expected end date of rent</Form.Label>
                            <Form.Control
                                value={expectedRentEndDate}
                                onChange={(e) => setExpectedRentEndDate(e.target.value)}
                                type="date"
                                placeholder="Enter expected end date of rent" />
                        </Form.Group>

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