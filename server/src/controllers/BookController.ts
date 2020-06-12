import { Request, Response } from "express";
import knex from '../database/connection';

export class BookController {

    async index(request: Request, response: Response) {

        const books = await knex('books').select('*');

        return response.json(books);
    }

    async create(request: Request, response: Response) {
        const {
            title,
            author,
            publisher,
            field,
        } = request.body;

        const trx = await knex.transaction();

        const book = {
            title,
            author,
            publisher,
            field
        };


        await trx('books').insert(book);

        await trx.commit();

        return response.json({ book })
    }

    async update(request: Request, response: Response) {
        const {
            title,
            author,
            publisher,
            field,
        } = request.body;

        const { id } = request.params;

        const trx = await knex.transaction();

        const book = {
            title,
            author,
            publisher,
            field
        };

        await trx('books').where('id', id).update({
            title: title,
            author: author,
            publisher: publisher,
            field: field,
        });

        await trx.commit();

        return response.json({ book })
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        const trx = await knex.transaction();

        await trx('books').where('id', id).del();

        await trx.commit();

        return response.json({ message: 'Deletado com sucesso!' })
    }



}