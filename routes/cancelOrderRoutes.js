// app/routes/cancelOrderRoutes.js

const express = require('express');
const router = express.Router();
const CancelOrderController = require('../controllers/CancelOrderController');

router.post('/', CancelOrderController.cancelOrder);

module.exports = router;
