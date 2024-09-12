/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('todos', (table) => 
  {
    table.increments('id', {primaryKey: true});
    table.string('description', 255).notNullable();
    table.boolean('completed').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('todos')
};
