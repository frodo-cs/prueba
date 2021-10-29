import Book from '../types/Book'
import BookService from '../services/BookService'
import { useEffect, useState } from 'react';
import PersonItem from './PersonItem'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
interface BookParams{
    id: string
}

/*
*
* Componente para vizualizar algunos de los metadatos del epub
* Recibe el id del documento por medio de Params
*
*/

const BookItem = () => {
    const [book, setBook] = useState<Book>();
    const { id } = useParams<BookParams>();
    
    const getBook = () => {
        BookService.get(id)
        .then(response => {
            setBook(response.data);
        })
        .catch(e => console.log(e));
    };  

    useEffect(() => {
        getBook();
    }, [])

    return (
        <Container>
            <h2>{book?.title}</h2>
            <hr/>
            <Row>
                <Col xs={2}>
                    <b>Url</b>
                </Col>
                <Col xs={8}>
                    <a href={`https://www.gutenberg.org/ebooks/${book?.id}`} target="_blank">Project Gutenberg Link</a>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <b>Authors</b>
                </Col>
                <Col xs={8}>
                    {book?.authors.map((a, index) => <PersonItem person={a} key={index}/>)}                   
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <b>Subjects</b>
                </Col>
                <Col xs={8}>
                    {book?.subjects.map(a => <p>{a}</p>)}
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <b>Languages</b>
                </Col>
                <Col xs={8}>
                    {book?.languages.map(a => <p>{a}</p>)}                
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <b>Translators</b>
                </Col>
                <Col xs={8}>               
                    {book?.translators.map((a, index) => <PersonItem person={a} key={index}/>)}     
                </Col>
            </Row>
        </Container>
    )
} 

export default BookItem;