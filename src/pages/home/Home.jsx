import React, { useState, useEffect } from 'react';
import { getBooks } from '../../utils/api/book_api';
import CardItem from '../../components/card/CardItem';
import "./Home.css";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            setBooks(await getBooks());

        })();
    }, []);

    return (
        <div className="list-wrapper">
            {books.map((book) => (
                CardItem(book)
            ))}
        </div>
    );
}


