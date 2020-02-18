const faker = require("faker")

exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('users').insert([
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 1},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 2},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 3},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 4},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 5},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 6},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 7},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 8},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 9},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 10},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 11},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 12},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 13},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 14},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 15},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 16},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 17},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 18},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 19},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 20},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 1},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 2},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 3},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 4},
        {email: faker.internet.email(), password: '', firstName: faker.name.firstName(), lastName: faker.name.lastName(), companyId: 5}
      ]);
    
    }