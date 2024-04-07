// app/models/Order.js

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalAmount: Number,
  status: String,
  // other order fields
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
