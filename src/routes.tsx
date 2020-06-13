import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import BooksList from '../src/pages/BooksList';
import BookForm from './pages/BookForm';
import MenuBar from './pages/MenuBar';

const Routes = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Route path="/" component={BooksList} exact />
            <Route path="/create" component={BookForm} />
        </BrowserRouter>
    );
}

export default Routes;