import React, { useState, useEffect } from 'react';
import { getBooks } from '../../utils/api/book_api';
import CardItem from '../../components/card/CardItem';
import "./Home.css";

export default function Home() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        (async () => {
            console.log("start");
            console.log(process.env.REACT_APP_API_URL);
            console.log(books);
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


