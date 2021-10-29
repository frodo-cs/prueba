import Book from '../types/Book';
import BookService from '../services/BookService';
import { useEffect, useState } from 'react';
import { Button, Container, Row, Table, Col} from "react-bootstrap";
import BookListItem from './BookListItem';

const BookList = () => {
    const [loadedBooks, setLoadedBooks] = useState<Array<Book>>([]);
    const [books, setBooks] = useState<Array<Book>>([]);
    const [pageNumber, setPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<boolean>(false);
    const [removedBooks] = useState<Array<string>>([]);

    const loadPage = () => {
        BookService.getPage(pageNumber)
        .then(response => {       
            setLoadedBooks(response.data.results)  
            setLastPage(!response.data.next)
        })
        .catch(e => console.log(e));
    }

    useEffect(() =>  {
        loadPage();
    }, [])

    useEffect(() => {
        var b = loadedBooks.filter(book => !removedBooks.includes(book.id.toString()));
        setBooks(b);
    }, [loadedBooks, removedBooks])

    useEffect(() => {     
        loadPage();
    }, [pageNumber])

    const removeItem = (e: React.MouseEvent<HTMLElement>) => {
        var button = e.target as HTMLButtonElement;
        const b = books.filter(book => button.value != book.id.toString());
        removedBooks.push(button.value);
        setBooks(b);
    }

    return ( 
    <Container style={{ marginBottom:'2vh' }}>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Book title</th>
                <th style={{ width: '4vw' }}></th>
            </tr>
        </thead>
        <tbody>
            {books.map((b, index) => <BookListItem book={b} deleteHandler={removeItem} key={index}/>)}
        </tbody>
        </Table>
        <Row>
            <Col style={{display:'flex', justifyContent:'left'}}>
                <Button disabled={ pageNumber <= 1 } variant="dark" onClick={() => setPage(pageNumber - 1)}>Prev</Button>
            </Col>
            <Col className="text-center">{ pageNumber }</Col>
            <Col style={{display:'flex', justifyContent:'right'}}>
                <Button disabled={ lastPage } variant="dark" onClick={() => setPage(pageNumber + 1)}>Next</Button>
            </Col>
        </Row>            
    </Container>)
}

export default BookList;