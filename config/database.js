const mysql2 = require("mysql2/promise");

// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('Connected to MySQL Server!');
// })
const options = {
  host: "localhost",
  user: "jimmy",
  password: "1234",
  database: "shop",
};

const connection = mysql2.createPool(options);

module.exports = connection;