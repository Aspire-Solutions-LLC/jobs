
exports.up = function(knex) {
  return knex.schema.createTable("companies", companies => {
      companies.increments('companyId');
      companies.string('companyName', 128).notNullable();
      companies.string('address', 255); //must include city, state
      companies.string('country', 2).notNullable();
      companies.string('zip', 20);  //only required if in US
      companies.string('email', 128).notNullable();
      companies.binary('logo');
      companies.string('notes', 255);
      companies.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("companies")
};
