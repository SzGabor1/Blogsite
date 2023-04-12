const express = require("express");
const router = express.Router();
const db = require("../index").db;
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM `posts` ORDER BY `posts`.`date` ASC",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});
module.exports = router;
