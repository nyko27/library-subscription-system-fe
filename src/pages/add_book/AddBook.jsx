import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from "react-router-dom";
import { addBook } from '../../utils/api/book_api';
import { objToJson } from '../../utils/functions';
import ErrorWindow from '../../components/error_window/ErrorWindow';
import { genres } from '../../utils/constants';
import "./AddBook.css";


export default function AddBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit(e) {
        e.preventDefault();

        const newBook = objToJson({ title, author, genre });
        const response = await addBook(newBook);

        if (response.status === 200) {
            return <Navigate to='/' />
        } else {
            handleShow();
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
                    <h2 className="form-title">Add a new book</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                type="text"
                                placeholder="Enter surname" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Genre</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setGenre(e.target.value)}>
                                {genres.map((genre) => (
                                    <option value={genre}>{genre}</option>
                                ))}
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
            <ErrorWindow show={show} handleClose={handleClose}>
            </ErrorWindow>
        </>
    );
}

