
exports.up = function(knex) {
    return knex.schema.createTable("jobs", jobs => {
        jobs.increments('jobId');
        jobs.string('companyName').notNullable();
        jobs.string('companyHQ').notNullable();
        jobs.string('position', 128).notNullable()
        jobs.string('category', 128).notNullable(); //not to be confused with categories
        jobs.string('salary').notNullable();
        jobs.string('location', 128).notNullable();
        jobs.text('description').notNullable();
        jobs.string('applyURL', 999)
        jobs.string('applyEmail', 128);
        jobs.string('notes', 255); 
        jobs.boolean('isDelete').defaultTo(false);
        jobs.integer('userId').notNullable(); //FORIEGN KEY
        jobs.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('jobs');
};
