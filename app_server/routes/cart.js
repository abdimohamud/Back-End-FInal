const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add item to user's cart
// ownerID, itemID
router.post('/addItem', cartController.addItem);

module.exports = router;
