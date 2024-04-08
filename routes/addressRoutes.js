const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/AddressController');
router.get('/', AddressController.getAddressesByPhoneNumber);
module.exports = router;
