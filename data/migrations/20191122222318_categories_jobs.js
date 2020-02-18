
exports.up = function(knex) {
    return knex.schema.createTable('categories_jobs', categories_jobs => {
        categories_jobs.increments();
        categories_jobs.integer('categoryId').notNullable();
        categories_jobs.integer('jobId').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories_jobs')
};
