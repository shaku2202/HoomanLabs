const express = require('express');
const router = express.Router();
const Shopify = require('shopify-api-node');
const logger = require('../logger'); 
require('dotenv').config();

const shopName=process.env.shopName;
const apiKey=process.env.apiKey;
const password=process.env.password;

const cancelOrder= async (req, res) => {
  const { orderNumber } = req.body;

  if (!orderNumber) {
    logger.error('Order number is required');
    return res.status(400).json({ error: 'Order number is required' });
  }

  try {
    const shopify = new Shopify({
      shopName: shopName,
      apiKey: apiKey,
      password: password,
    });

    const order = await shopify.order.list({ query: orderNumber });

    if (order.length===0) {
      logger.error('Order not found');
      res.status(404).json({eror:`Order ${orderNumber} not found`});
      throw new Error('Order not found');
    }
    const cancelledOrder = await shopify.order.cancel(order[0].id);
    logger.info(`Order ${orderNumber} has been cancelled`);
    res.status(200).json({msg:`Order ${orderNumber} has been cancelled`,cancelledOrder});
  } catch (error) {
    logger.error(`Error : ${error.message}`);
    console.error('Error :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  cancelOrder
};