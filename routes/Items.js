const { Router } = require("express");
const router = Router();
const db = require("../models/db");

const itemList = (req, res) => {
  let realm = req.params.realmid;

  let sql = `
  SELECT ihd.item, MAX(ihd.when),
  r.id, r.name, isc.name_Enus, i.name_enus
  FROM tblItemHistoryDaily ihd
  INNER JOIN tblRealm r
    ON ihd.house = r.house
  INNER JOIN tblDBCItem i
    ON i.id = ihd.item
  INNER JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
    AND r.id = ${realm}
    AND isc.subclass = i.subclass
    GROUP BY ihd.item
    ORDER BY ihd.when DESC`;

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

const highestPricedItem = (req, res) => {
  let realm = req.params.realmid;

  let sql = `
  SELECT ihd.item, i.name_enus,
    ihd.priceavg, r.id, r.name,
    isc.name_Enus
  FROM tblItemHistoryDaily ihd
  INNER JOIN tblRealm r
    ON ihd.house = r.house
  INNER JOIN tblDBCItem i
    ON i.id = ihd.item
  INNER JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
  AND r.id = ${realm}
  AND isc.subclass = i.subclass
  GROUP BY ihd.item
  ORDER BY ihd.priceavg DESC LIMIT 10;`;

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

const singleItem = (req, res) => {
  let realm = req.params.realmid;
  let itemID = req.params.itemid;

  let sql = `
  SELECT ihd.item, ihd.when, ihd.pricemin, 
  ihd.priceavg, ihd.pricemax, ihd.pricestart, 
  ihd.priceend, ihd.quantityavg, ihd.quantitymax, 
  ihd.quantitymin, r.id, r.name, isc.name_Enus, i.name_enus
  FROM tblItemHistoryDaily ihd
  INNER JOIN tblRealm r
    ON ihd.house = r.house
  INNER JOIN tblDBCItem i
    ON i.id = ihd.item
  INNER JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
    AND r.id = ${realm}
    AND isc.subclass = i.subclass
    AND ihd.item = ${itemID}
    ORDER BY ihd.when DESC LIMIT 7;`;

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

const topItems = (req, res) => {
  let realm = req.params.realmid;

  let sql = `
  SELECT ihd.item, i.name_enus,
    ihd.quantityavg, r.id,
    r.name, isc.name_Enus
  FROM tblItemHistoryDaily ihd
  INNER JOIN tblRealm r
    ON ihd.house = r.house
  INNER JOIN tblDBCItem i
    ON i.id = ihd.item
  INNER JOIN tblDBCItemSubClass isc
    ON isc.class = i.class
  WHERE r.locale = "en_US" 
  AND r.id = ${realm}
  AND isc.subclass = i.subclass
  GROUP BY ihd.item
  ORDER BY ihd.quantityavg DESC LIMIT 10;`;

  query = db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

router.get("/:realmid", itemList);
router.get("/top/:realmid", topItems);
router.get("/price/:realmid", highestPricedItem);
router.get("/itemhistory/:realmid/:itemid", singleItem);

module.exports = router;
