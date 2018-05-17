
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', function (t) {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('avatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
