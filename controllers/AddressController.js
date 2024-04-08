const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../logger'); 
require('dotenv').config();

const shopName = process.env.shopName;
const apiKey = process.env.apiKey;
const password = process.env.password;

const getAddressesByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.query;

  if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
    logger.error('Phone number is required or invalid');
    return res.status(400).json({ error: 'Phone number is required or not valid' });
  }

  try {
    const shopify = new Shopify({
      shopName: shopName,
      apiKey: apiKey,
      password: password,
    });

    const searchResult = await shopify.customer.search({ query: phoneNumber });
    if (searchResult.length === 0) {
      logger.info('Customer not found');
      return res.status(404).json({ error: 'Customer not found' });
    }

    const customerId = searchResult[0].id;
    const addresses = await shopify.customerAddress.list(customerId);

    logger.info(`Data for customer with phone number ${phoneNumber}`);
    res.json(addresses);
  } catch (error) {
    logger.error(`Error occurred in fetching customer addresses: ${error.message}`);
    if (error.statusCode === 404) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAddressesByPhoneNumber,
};