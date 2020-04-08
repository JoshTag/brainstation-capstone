const { Router } = require("express");
const router = Router();
const db = require("../models/db");

const testing = (req, res) => {
  let resStr
  let sql = `SELECT ihd.item, ihd.when, 
	ihd.pricemin, ihd.priceavg, 
	ihd.pricemax, ihd.pricestart, 
    ihd.priceend, ihd.quantityavg, 
    ihd.quantitymax, r.id, r.name,
    isc.name_enus, i.name_enus, 
  FROM tblItemHistoryDaily ihd
  JOIN tblRealm r
    ON ihd.house = r.house
  JOIN tblDBCItem i
    ON i.id = ihd.item
  JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
  AND ihd.when >= DATE_SUB("2020-04-01", INTERVAL 6 DAY)
  AND r.id = 69
  AND isc.subclass = i.subclass
  AND ihd.item = 163223;`;
  let query = db.query(sql, (err, response) => {
    if (err) throw err;
    resStr = response
    console.log(resStr)
    res.send(response)
  });
};

// router.get("/", getHistory);
// router.get("/:item", getItemData);
router.get("/", testing);

module.exports = router;
