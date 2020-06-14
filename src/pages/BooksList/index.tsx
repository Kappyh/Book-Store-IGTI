import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/api'

import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import { IBook } from '../../models/Ibook';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const BooksList = () => {

    const [books, setBooks] = useState<Array<IBook>>([]);

    useEffect(() => {
        api.get('books').then(response => {
            setBooks(response.data);
        })
    }, []);

    function removeBook(id: number) {
        api.delete(`/books/${id}`).then(response => {
            Swal.fire('Sucesso', response.data.message, 'success');
        })
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
                                        <Button size="sm" variant="danger">Excluir</Button>
                                        <Button size="sm" variant="warning">Editar</Button>
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