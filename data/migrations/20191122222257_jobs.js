
exports.up = function(knex) {
    return knex.schema.createTable("jobs", jobs => {
        jobs.increments('jobId');
        jobs.integer('companyId').notNullable();
        jobs.string('primaryCategory', 128).notNullable(); //not to be confused with categories
        jobs.decimal('salary').notNullable();
        jobs.string('location', 128).notNullable();
        jobs.text('description').notNullable();
        jobs.text('responsibilities');
        jobs.text('requirements'); 
        jobs.string('applyURL', 999)
        jobs.string('applyEmail', 128);
        jobs.string('notes', 255); 
        jobs.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('jobs');
};
