// app/models/Address.js

const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  street: String,
  city: String,
  state: String,
  zip: String,
  isDefault: Boolean,
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;
