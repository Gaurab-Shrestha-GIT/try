const db = require("../db/db");
const homeRoute = (req, res) => {
  db.query("SELECT * FROM user_table", (err, result) => {
    if (err) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

module.exports = { homeRoute };
