import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardItem.css";


function CardItem(book) {
    return <Card className="card">
        <Card.Img className="card-img" src="https://thumbs.dreamstime.com/b/open-book-19523116.jpg" variant="top" />
        <Card.Body>

            <Card.Title>{book.title} </Card.Title>

            <Card.Text>Author: {book.author}</Card.Text>
            <Card.Text>Genre: {book.genre}</Card.Text>
            <Card.Text>Piedge price: {book.pledge_price}</Card.Text>
            <Card.Text>Quantity: {book.quantity}</Card.Text>

            <div className="buttons-container">
                <Link to={`/books/${book.id}`}>
                    <Button className="card-button" variant="outline-dark">
                        View more
                    </Button>
                </Link>

                <Link to={"/#link to form of rent creation"}>
                    <Button className="card-button" variant="outline-success">
                        Rent
                    </Button>
                </Link>
            </div>
        </Card.Body>
    </Card>;
}

export default CardItem;

