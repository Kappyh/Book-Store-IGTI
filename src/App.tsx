import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Routes from './routes';

function App() {
  return (
    <>
      <Container fluid>
        <Routes/>
      </Container>
    </>
  );
}

export default App;
