
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments('userId');
      users.string('email', 128).notNullable();
      users.string('password', 500).notNullable();
      users.string('firstName', 128)
      users.string('lastName', 128)
      users.integer('companyId').notNullable();
      users.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
