import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './style.css';

const MenuBar = () => {
    return (
        <Row className="menu-bar">
            <Col xs={6}>
                <Link to="/">
                    <h1 className="title">Cadastro de Livros</h1>
                </Link>
            </Col>
            <Col xs={6} className="btn-container">
                <Link to="/create">
                    <Button className="btn-add" variant="outline-light">Adicionar Livro</Button>
                </Link>
            </Col>
        </Row>
    );
}

export default MenuBar;