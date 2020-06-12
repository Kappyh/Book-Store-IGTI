
import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('books').insert([
        { title: 'Harry Potter e o Prisioneiro de Azkaban', author: 'J.K. Rowling', publisher: 'Rocco', field: 'Fantasia' },
        { title: 'O poder do hábito', author: 'Charles Duhigg', publisher: 'Objetiva', field: 'Auto-ajuda' },
        { title: 'Percy Jackson e o Mar de Monstros', author: 'Rick Riordan', publisher: 'Intriseca', field: 'Fantasia' },
        { title: 'Desenvolvimento de aplicativos mobile com React', author: 'Diego Martins de Pinho, Bruna Escudelario', publisher: 'Casa do Código', field: 'Programação' }
    ])
}