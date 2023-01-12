const express = require("express");
const dbConfig = require("./config/db.config.js")
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  module.exports = connection;

app.post('/register',(req, res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    connection.query("INSERT INTO users (username, email, password) VALUES (?,?,?)",[username, email, password],(err, result) =>{
        console.log(err);
    })
})

app.listen(8080, () => {
    console.log("server is running");
});