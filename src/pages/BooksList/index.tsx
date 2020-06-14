import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import { IBook } from '../../models/Ibook';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const BooksList = () => {

    const [books, setBooks] = useState<Array<IBook>>([]);
    const history = useHistory();

    useEffect(() => {
        api.get('books').then(response => {
            setBooks(response.data);
        })
    }, []);

    function removeBook(id: number | undefined) {
        api.delete(`/books/${id}`).then(response => {
            setBooks(response.data);
            Swal.fire('Sucesso', 'Livro removido!', 'success');
        })
    };

    function editBook(id: number | undefined) {
        history.push(`/edit/book/${id}`);
    }

    return (
        <Row className="align-content">
            <Col xs={8}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Editora</th>
                            <th>Área</th>
                            <th className="column-action">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.field}</td>
                                    <td>
                                        <Button size="sm" variant="danger" onClick={() => removeBook(book.id)} >Excluir</Button>
                                        <Button size="sm" variant="warning" onClick={() => editBook(book.id)}>Editar</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default BooksList;