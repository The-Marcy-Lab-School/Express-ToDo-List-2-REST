/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, description: 'rowValue1', completed: false},
    {id: 2, description: 'rowValue2', completed: false},
    {id: 3, description: 'rowValue3', completed: false}
  ]);
};
