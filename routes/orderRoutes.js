// app/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
router.get('/', OrderController.getOrderDetails);
module.exports = router;
