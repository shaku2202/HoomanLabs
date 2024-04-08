// app/routes/getOrdersByPhoneNumber.js
const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../logger');
require('dotenv').config();

const shopName = process.env.shopName;
const apiKey = process.env.apiKey;
const password = process.env.password;

const getOrdersByPhoneNumber= async (req, res) => {
  const { phoneNumber } = req.query;

  if (!phoneNumber || phoneNumber.length !== 10) {
    logger.error('Phone number is required or not a valid phone number');
    return res.status(400).json({ error: 'Phone number is required or not a valid phone number' });
  }

  try {
    const shopify = new Shopify({
      shopName: shopName,
      apiKey: apiKey,
      password: password,
    });

    const searchResult = await shopify.customer.search({ query: phoneNumber });

    if (searchResult.length === 0) {
      logger.error('Customer with the provided phone number not found');
      return res.status(404).json({ error: 'Customer with the provided phone number not found' });
    }

    const customerId = searchResult[0].id;
    const orders = await shopify.order.list({ customer_id: customerId });

    if (orders.length === 0) {
      logger.info(`No orders found for phone number: ${phoneNumber}`);
      return res.status(404).json({ error: 'No orders found' });
    }

    logger.info(`Fetched orders for phone number: ${phoneNumber}`);
    res.json(orders);
  } catch (error) {
    logger.error(`Error occurred in fetching orders: ${error.message}`);
    console.error('Error occurred in fetching orders:', error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = {
  getOrdersByPhoneNumber
};
