
exports.up = function(knex) {
    return knex.schema.createTable('list', users => {
        users.increments('listId');
        users.string('email', 128).notNullable();
        users.string('category', 500).notNullable();
        users.string('frequency', 20).notNullable();
        users.timestamps(true,true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  }