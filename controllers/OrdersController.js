// app/controllers/OrdersController.js

const Order = require('../models/Order');

exports.getOrdersByPhoneNumber = async (req, res) => {
  const { phone_number } = req.query;

  try {
    const customerOrders = await Order.find({ phone_number }).populate('customerId');
    res.json(customerOrders);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
