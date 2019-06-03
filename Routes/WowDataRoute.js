const { Router } = require('express');
const router = Router();
const itemHistory = require('../Data/wowData');

const getItemData = (req, res) => {
    res.json(itemHistory);
}

router.get('/', getItemData);

module.exports = router;