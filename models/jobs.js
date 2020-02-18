const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

function add(job) {
  return db("jobs")
    .insert(job, ["*"])
    .then(u => find({ jobId: u[0].jobId }));
}

function find(filters) {
  // if filters were passed in, search by filter. otherwise return all

  // note that neither return use the .first() method -- it's on a use-by-use basis if that is required or not
  if (filters) {
    return db("jobs")
      .select("jobId",
      "companyName", 
      "companyHQ", 
       "position",
        "category",
          "salary",
           "location",
            "description", 
             "applyURL",
             "applyEmail",
             "isDelete",
              "notes")
      .where(filters);
  }
  return db("jobs")
  .select("jobId",
  "companyName", 
  "companyHQ", 
   "position",
    "category",
      "salary",
       "location",
        "description", 
         "applyURL",
         "applyEmail",
         "isDelete",
          "notes")
}

function update(filter, changes) {
  // only allow one update at a time, so uses .first()
  return db("jobs")
    .update(changes, "*")
    .where(filter)
    .then(u => find({ jobId: u[0].jobId }))
    
}

function remove(filter) {
  // only returns the number of deleted entries
  return db("jobs")
    .where(filter)
    .del();
}
