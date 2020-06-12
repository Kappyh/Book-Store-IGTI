import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.string('title').notNullable;
    table.string('author').notNullable;
    table.string('publisher').notNullable;
    table.string('field').notNullable;
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('books')
}