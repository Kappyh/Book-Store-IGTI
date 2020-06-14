
import express from 'express';

import { BookController } from './controllers/BookController';

const routes = express.Router();
const bookController = new BookController();

routes.get('/books', bookController.index);

routes.post('/books', bookController.create);

routes.post('/books/:id', bookController.update);

routes.delete('/books/:id', bookController.delete);


export default routes;