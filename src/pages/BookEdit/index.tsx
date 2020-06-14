import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

const BookEdit = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        field: ''
    });

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        api.get(`/books/${id}`).then(response => {
            setFormData(response.data[0]);
            console.log(response.data[0]);
        })
    }, [id]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function saveBook(event: FormEvent) {
        event.preventDefault();
        const { title, author, publisher, field } = formData;
        const data = {
            title,
            author,
            publisher,
            field
        };
        await api.post(`books/${id}`, data);
        Swal.fire('Sucesso', 'Livro alterado com sucesso');
        history.push('/');
    }

    return (
        <Row className="align-content">
            <Col xs={5}>
                <Card>
                    <Card.Body>
                        <Card.Title>Livro</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Cadastro de livros</Card.Subtitle>
                        <Form onSubmit={saveBook}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" name="title" value={formData.title} placeholder="Insira o título" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control type="text" name="author" value={formData.author} placeholder="Insira o autor" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Editora</Form.Label>
                                <Form.Control type="text" name="publisher" value={formData.publisher} placeholder="Insira a editora" onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Área</Form.Label>
                                <Form.Control type="text" name="field" value={formData.field} placeholder="Insira a área" onChange={handleInputChange} />
                            </Form.Group>
                            <div className="btn-container">
                                <Button variant="primary" value={formData.title} type="submit">
                                    Cadastrar
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default BookEdit;