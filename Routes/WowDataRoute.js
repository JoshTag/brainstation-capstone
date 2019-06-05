const { Router } = require('express');
const router = Router();
const itemHistory = require('../Data/WoWItemHistory');

const getHistory = (req, res) => {
    res.json(itemHistory);
}

const getItemData = (req, res) => {
    const findItem = itemHistory.find(findItem => 
        findItem.item == req.params.item)
    res.json(findItem);
}

router.get('/', getHistory);
router.get('/:item', getItemData);

module.exports = router;