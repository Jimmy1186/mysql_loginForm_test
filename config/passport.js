const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const bcrypt = require("bcrypt");
passport.use(
  new LocalStrategy(function (username, password, done) {
    connection
      .query("select * from users where username = '" + username + "'")
      .then((user) => {
        if (!user) {
          return done(null, false);
        }

        // Function defined at bottom of app.js
        bcrypt.compare(password, user[0][0].hash, (err, result) => {
          if (!result) {
            console.log("valid fali");
            return done(null, false);
          } else {
            console.log("valid succ");
            return done(null, user[0][0]);
          }
        });
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});
passport.deserializeUser(function (user, done) {
  console.log(user);
  connection.query(
    "select * from users where user_id = '" + user.user_id + "'"
  ),
    then((err, rows) => {
      done(null, rows);
    });
});
