import React from 'react';
import './App.css';
import MenuBar from './pages/MenuBar';
import Container from 'react-bootstrap/Container';
import Routes from './routes';

function App() {
  return (
    <>
      <Container fluid>
        <MenuBar />
        <Routes/>
      </Container>
    </>
  );
}

export default App;
