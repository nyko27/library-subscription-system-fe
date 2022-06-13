import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardItem.css";


export default function CardItem(book) {
    return <Card className="card">
        <Card.Img className="card-img" src="https://thumbs.dreamstime.com/b/open-book-19523116.jpg" variant="top" />
        <Card.Body>

            <Card.Title>{book.title} </Card.Title>

            <Card.Text>Author: {book.author}</Card.Text>
            <Card.Text>Genre: {book.genre}</Card.Text>
            <Card.Text>Pledge price: {book.library_item.pledge_price}</Card.Text>
            <Card.Text>Quantity: {book.library_item.quantity}</Card.Text>

            <Link to={`/rent-book/${book.id}`}>
                <Button className="card-button" variant="outline-success">
                    Rent
                </Button>
            </Link>
        </Card.Body>
    </Card>;
}


