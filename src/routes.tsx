import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import BooksList from '../src/pages/BooksList';
import BookForm from './pages/BookForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={BooksList} exact />
            <Route path="/create" component={BookForm} />
        </BrowserRouter>
    );
}

export default Routes;