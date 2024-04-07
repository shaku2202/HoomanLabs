// app/routes/updateAddressRoutes.js

const express = require('express');
const router = express.Router();
const UpdateAddressController = require('../controllers/UpdateAddressController');

router.put('/', UpdateAddressController.updateAddress);

module.exports = router;
