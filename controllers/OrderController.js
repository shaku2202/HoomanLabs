// app/controllers/OrderController.js

const Order = require('../models/Order');

exports.getOrderDetails = async (req, res) => {
  const { order_number } = req.params;

  try {
    const orderDetails = await Order.findOne({ order_number }).populate('products');
    res.json(orderDetails);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
