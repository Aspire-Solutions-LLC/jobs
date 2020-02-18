const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

function add(user) {
  return db("users")
    .insert(user, ["*"])
    .then(u => find({ userId: u[0].userId }));
}

function find(filters) {
  // if filters were passed in, search by filter. otherwise return all

  // note that neither return use the .first() method -- it's on a use-by-use basis if that is required or not
  if (filters) {
    return db("users")
      .select("email", "userId")
      .where(filters);
  } 
  return db("users").select("userId", "email")
}

function update(filter, changes) {
  // only allow one update at a time, so uses .first()
  return db("users")
    .update(changes, "*")
    .where(filter)
    .then(u => find({ userId: u[0].userId }))
    
}
function remove(filter) {
  // only returns the number of deleted entries
  return db("users")
    .where(filter)
    .del();
}
