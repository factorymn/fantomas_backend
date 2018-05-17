
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cat', function (t) {
    t.increments('id').primary();
    t.string('title').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cat')
};
