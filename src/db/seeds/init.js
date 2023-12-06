// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries (you can just use knex and delete everything)
    await knex('example_resources').del();
    await knex('example_resources').insert([
      {id: 1, title: 'hello', priority: 4, is_done: true},
      {id: 2, title: 'efdwqefeqwefqw', priority: 200, is_done: true}
    ]);
  };