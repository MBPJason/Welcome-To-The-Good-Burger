const connection = require("./connection");



const orm = {
    selectAll: function(cb) {
      let queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(name,cb) {
      let queryString = "INSERT INTO burgers (burgers_name) VALUE (?)"
  
      connection.query(queryString, name, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {burger_name: Good Burger, devoured: true}
    updateOne: function(id, cb) {
      let queryString = "UPDATE burgers SET devoured=true WHERE id = ?";
  
      console.log(queryString);
      connection.query(queryString, id, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  };
  
  // Export the orm object for the model (burgers.js).
  module.exports = orm;