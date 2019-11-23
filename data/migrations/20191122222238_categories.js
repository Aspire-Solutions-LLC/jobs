
exports.up = function(knex) {
  return knex.schema.createTable("categories", categories => {
      categories.increments('categoryId');
      categories.string('category', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists("categories");
};
