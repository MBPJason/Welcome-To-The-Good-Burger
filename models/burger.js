
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