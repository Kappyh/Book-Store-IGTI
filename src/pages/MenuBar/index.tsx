import React from 'react';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MenuBar = () => {
    return (
        <Row className="menu-bar">
            <Col xs={6}>
                <h1 className="title">Cadastro de Livros</h1>
            </Col>
            <Col xs={6} className="btn-container">
                <Button className="btn-add" variant="outline-light">Adicionar Livro</Button>
            </Col>
        </Row>
    );
}

export default MenuBar;