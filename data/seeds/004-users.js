const faker = require("faker")

exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('users').insert([
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''},
        {email: faker.internet.email(), password: ''}
      ]);
    
    }