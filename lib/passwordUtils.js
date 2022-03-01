const crypto = require("crypto");
const bcrypt = require("bcrypt");
const connection = require("../config/database");
// TODO
function genPassword(password, username) {
  bcrypt.hash(password, 12, function (err, hash) {
    connection.query(
      "INSERT INTO users(username,hash) VALUES('" +
        username +
        "','" +
        hash +
        "')"
    );
  });
}

module.exports.genPassword = genPassword;
