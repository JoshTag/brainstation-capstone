const { Router } = require("express");
const router = Router();
const db = require("../models/db");

const itemList = (req, res) => {

  let sql = `
  SELECT i.id, i.name_enus, isc.name_Enus
  FROM tblDBCItem i
  JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
    AND isc.subclass = i.subclass`

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
}

const singleItem = (req, res) => {

  let realmID = req.params.realmid
  let itemID = req.params.itemid

  let sql = `
  SELECT ihd.item, ihd.when, ihd.pricemin, 
  ihd.priceavg, ihd.pricemax, ihd.pricestart, 
  ihd.priceend, ihd.quantityavg, ihd.quantitymax, 
  r.id, r.name, isc.name_Enus, i.name_enus
  FROM tblItemHistoryDaily ihd
  JOIN tblRealm r
    ON ihd.house = r.house
  JOIN tblDBCItem i
    ON i.id = ihd.item
  JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
    AND r.id = ${realmID}
    AND isc.subclass = i.subclass
    AND ihd.item = ${itemID}
    ORDER BY ihd.when DESC LIMIT 7`;

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

router.get("/", itemList);
router.get("/:realmid/:itemid", singleItem);

module.exports = router;
