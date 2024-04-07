// app/controllers/CancelOrderController.js

const Order = require('../models/Order');

exports.cancelOrder = async (req, res) => {
  const { order_number } = req.body;

  try {
    console.log('Order Number:', order_number); // Log the order number received in the request
    const cancelledOrder = await Order.findOneAndUpdate({ order_number }, { status: 'Cancelled' }, { new: true });
    console.log('Cancelled Order:', cancelledOrder); // Log the result of the findOneAndUpdate operation
    res.json(cancelledOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
