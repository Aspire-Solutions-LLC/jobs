
const faker = require('faker'); 

const createCompany = () => ({
    companyName: faker.company.companyName(),
    email: faker.internet.email(), 
    address: faker.address.streetAddress() + " " + faker.address.secondaryAddress + " " + faker.address.city(), 
    country: 'US', 
    logo: faker.image.business(),
    notes: faker.lorem.sentence()
    

})

exports.seed = async function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      const fakeCompanies = [];
      const count = 20;
      for(let i=0; i<count;i++){
        fakeCompanies.push(createCompany());
      }
      await knex('companies')
      .insert(fakeCompanies);
   
};
 