// app/models/Customer.js

const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone_number: String,
  // other customer fields
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
