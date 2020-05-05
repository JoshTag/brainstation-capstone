const { Router } = require("express");
const router = Router();
const db = require("../models/db");

const realmList = (req, res) => {
  let sql = `SELECT id, name, population FROM tblRealm WHERE locale = "en_US";`;
  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response)
  });
};

router.get("/", realmList);

module.exports = router;
