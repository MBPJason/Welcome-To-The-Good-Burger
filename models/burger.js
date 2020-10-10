const connection = require("../../../gt-atl-fsf-ft-08-2020-u-c/13-MVC/01-Activities/13-PartyDatabase/Unsolved/config/connection");
const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },

  create: function (name, cb) {
    orm.insertOne(name, cb, function (res) {
      cb(res);
    });
  },

  update: function (id, cb) {
    orm.updateOne(id, cb, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;