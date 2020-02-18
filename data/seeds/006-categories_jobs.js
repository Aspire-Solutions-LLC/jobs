
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('categories_jobs').insert([
        {categoryId: 1, jobId: 1},
        {categoryId: 2, jobId: 1},
        {categoryId: 3, jobId: 2},
        {categoryId: 4, jobId: 2},
        {categoryId: 5, jobId: 1},
        {categoryId: 6, jobId: 2},
        {categoryId: 7, jobId: 3},
        {categoryId: 8, jobId: 3},
        {categoryId: 9, jobId: 4},
        {categoryId: 10, jobId: 5},
        {categoryId: 11, jobId: 6},
        {categoryId: 12, jobId: 6},
        {categoryId: 13, jobId: 7},
        {categoryId: 14, jobId: 7},
        {categoryId: 15, jobId: 8},
        {categoryId: 1, jobId: 9},
        {categoryId: 2, jobId: 10},
        {categoryId: 3, jobId: 11},
        {categoryId: 4, jobId: 12},
        {categoryId: 5, jobId: 13},
        {categoryId: 6, jobId: 14},
        {categoryId: 7, jobId: 15},
        {categoryId: 8, jobId: 16},
        {categoryId: 9, jobId: 17},
        {categoryId: 10, jobId: 18},
        {categoryId: 11, jobId: 19},
        {categoryId: 12, jobId: 20},
      ]);
    
};
