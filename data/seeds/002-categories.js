
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      //Categories should be named "skills"
      return knex('categories').insert([
        {category: 'Javascript'},
        {category: 'React'}, 
        {category: 'Vue'}, 
        {category: "MySQL"}, 
        {category: 'Postgres'},
        {category: 'Angular'},
        {category: 'Node'},
        {category: 'SQL'},
        {category: 'Java'},
        {category: 'Ruby on Rails'},
        {category: 'PHP'},
        {category: 'Laravel'},
        {category: 'HTML5'},
        {category: 'CSS3'},
        {category: 'Restful API'},
       
      ]);
   
};
