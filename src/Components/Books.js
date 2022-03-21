import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Books(){
    const [books, setBooks] = useState([]);
    const [isBusy, setBusy] = useState(true)
    async function getBooks(){
        return fetch('http://localhost:8080/books/',{
            method:'GET'
        })
        .then(data=>data.json());
    }
    useEffect(() => {
        getBooks()
        .then(data=>{
            console.log(data.books);
            setBooks(data.books);
            setBusy(false);
        })
    }, []);
    if(!isBusy){
        return(
            <div>
                <h1>Top Books</h1>
                <Row>{Books.map(book => {
                    console.log(book.image);
                   <img src={book.image} alt={book.title}></img>
    })}
    </Row>
            </div>
        )
    }
    else{
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default Books;