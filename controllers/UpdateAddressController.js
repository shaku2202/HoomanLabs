const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../logger'); 
require('dotenv').config();

const shopName = process.env.shopName;
const apiKey = process.env.apiKey;
const password = process.env.password;

const updateAddress = async (req, res) => {
  try {
    console.log(req.body);
    const { addressId, addressData } = req.body;

    if (!addressId || !addressData) {
      logger.error('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }
    addressData.default = true;

    const shopify = new Shopify({
      shopName: shopName, // Use correct variables here
      apiKey: apiKey, // Use correct variables here
      password: password, // Use correct variables here
    });


    const updatedAddress= await shopify.customerAddress.update(addressId, addressData);

    logger.info(`Address updated successfully for addressId: ${addressId}`);
    res.json(updatedAddress);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateAddress,
};
