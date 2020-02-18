const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('list').insert([
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Web Development', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Mobile App Development', frequency: 'Daily'},  
        {email: faker.internet.email(), category: 'Mobile App Development', frequency: 'Daily'},  
        {email: faker.internet.email(), category: 'Mobile App Development', frequency: 'Daily'},  
        {email: faker.internet.email(), category: 'Mobile App Development', frequency: 'Weekly'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'}, 
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'},
        {email: faker.internet.email(), category: 'Marketing', frequency: 'Daily'}, 
  


        



      ]);
    
};
