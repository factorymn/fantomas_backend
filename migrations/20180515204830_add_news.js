
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('news', function (t) {
    t.increments('id').primary();
    t.string('title').notNullable();
    t.integer('author_id');
    t.integer('category_id');
    t.string('text');
    t.string('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('news')
};
