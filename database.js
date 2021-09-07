const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mehul@123",
  database: "maverick_book_store",
});
connection.connect();
module.exports = connection;
