// app/routes/ordersRoutes.js
const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController');

router.get('/', OrdersController.getOrdersByPhoneNumber);
module.exports = router;
