const express = require("express");
const mysql = require("mysql");
const fs = require("fs");

const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3301;

const connection = mysql.createConnection({
  host: "devblogdb.mysql.database.azure.com",
  user: "SzGabor1",
  password: "DBSE9dRy",
  database: "blog",
  ssl: {
    ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem"), // replace with the actual path to your ca.crt file
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/api/posts", (req, res) => {
  connection.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error("Error retrieving posts from database:", err);
      res.status(500).send("Error retrieving posts from database");
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
