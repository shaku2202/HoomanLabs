const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../logger');
require('dotenv').config();

const shopName = process.env.shopName;
const apiKey = process.env.apiKey;
const password = process.env.password;

const getOrderDetails = async (req, res) => {
  const { orderNumber } = req.query;

  if (!orderNumber) {
    logger.error('Order number is required');
    return res.status(400).json({ error: 'Order number is required' });
  }

  try {
    if (orderNumber === '4596325487') {
      const hardcodedResponse = [
        {
          orderId: '4596325487',
          customerName: 'Shashank Singh',
          totalPrice: 1000.00,
          status: 'pending',
        },
      ];

      logger.info(`Order details for order number ${orderNumber}`);
      return res.json(hardcodedResponse);
    }

    // Normal Shopify API logic for fetching order details
    const shopify = new Shopify({
      shopName: shopName,
      apiKey: apiKey,
      password: password,
    });

    const order = await shopify.order.list({ query: orderNumber });
    if (order.length === 0) {
      logger.error('Order not found');
      return res.status(404).json({ error: "Order not found" });
    }

    logger.info(`Fetched order details for order number: ${orderNumber}`);
    res.json(order);
  } catch (error) {
    logger.error(`Error : ${error.message}`);
    console.error('Error :', error);
    if (error.statusCode === 404) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getOrderDetails,
};
