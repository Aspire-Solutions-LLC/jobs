const faker = require("faker");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('jobs').insert([
        {userId: 1, position: 'Front-End Engineer', category : 'Web Development', salary: 93000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 2, position: 'iOS Developer', category : 'Mobile App Development', salary: 78000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 3,position: 'AWuserId: ,S Engineer', category : 'Dev Ops', salary: 43000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 4,position: 'AWuserId: ,S Engineer', category : 'Dev Ops', salary: 43000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 5,position: 'AWuserId: ,S Engineer', category : 'Dev Ops', salary: 43000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 6,position: 'VP Marketing', category : 'Marketing', salary: 69000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 7, position: 'Customer Support Rep', category : 'Customer Support', salary: 119000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 8, position: 'Android Developer', category : 'Mobile App Development', salary: 90000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 9, position: 'Web Developer', category : 'Softeware Development', salary: 87000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 10, position: 'Backend NodeJS/MwSQL Developer', category : 'Web Development', salary: 74000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 11, position: 'Director of Marketing', category : 'Marketing', salary: 60000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 12, position: 'Customer Support Rep', category : 'Customer Support', salary: 102000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 13, position: 'Front-end React/Redux Developer', category : 'Web Development', salary: 105000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 14, position: 'iOS Developer', category : 'Mobile App Development', salary: 59000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 15, position: 'Customer Support Rep', category : 'Customer Support', salary: 45000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 16, position: 'Web Designer', category : 'Design', salary: 85000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 17, position: 'Graphic Artist', category : 'Design', salary: 89000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 18, position: 'VP Marketing', category : 'Marketing', salary: 71000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 19, position: 'Front-End Engineer', category : 'Web Development', salary: 100000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 20, position: 'Front-End Engineer', category : 'Web Development', salary: 90000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 21, position: 'Front-End Engineer', category : 'Web Development', salary: 89000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 22, position: 'Front-End Engineer', category : 'Web Development', salary: 52000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 23, position: 'Front-End Engineer', category : 'Web Development', salary: 82000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 24, position: 'Front-End Engineer', category : 'Web Development', salary: 642000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 1, position: 'Front-End Engineer', category : 'Web Development', salary: 942000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()}, 
        {userId: 2, position: 'Front-End Engineer', category : 'Web Development', salary: 392000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 3, position: 'iOS App Developer', category : 'Mobile App Development', salary: 49000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 1, position: 'Dev Ops Engineer', category : 'Dev Ops', salary: 79000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 2, position: 'VP Marketing', category : 'Marketing', salary: 82000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 10, position: 'Customer Support', category : 'Customer Support', salary: 36000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 11, position: 'Customer Support Rep', category : 'Customer Support', salary: 56000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 12, position: 'Customer Support Rep', category : 'Web Development', salary: 75000, location: 'US Only', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 13, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 85000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 14, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 102000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 15, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 132000, location: 'US Only', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 1, position: 'Fullstack Javscript Developer', category : 'Marketing', salary: 102169, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 2, position: 'Front-End Engineer', category : 'Web Development', salary: 95000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 3, position: 'Front-End Engineer', category : 'Web Development', salary: 112000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 4, position: 'Front-End Engineer', category : 'Web Development', salary: 119000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 5, position: 'Front-End Engineer', category : 'Web Development', salary: 87000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 6, position: 'Front-End Engineer', category : 'Web Development', salary: 56000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 1, position: 'Front-End Engineer', category : 'Software Development', salary: 102000, location: 'US Only', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 2, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 114000, location: 'EU Only', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 3, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 69000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 4, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 155000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 5, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 54000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()},
        {userId: 6, position: 'Fullstack Javscript Developer', category : 'Web Development', salary: 68000, location: 'Worldwide', description: faker.lorem.paragraph(), applyURL:'http://www.cnn.com', applyEmail: '', notes: 'PO 949583', companyName: faker.company.companyName(), companyHQ: faker.address.city()}
        
      ]);
    
};
