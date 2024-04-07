// app/controllers/AddressController.js

const Address = require('../models/Address');

exports.getAddressesByPhoneNumber = async (req, res) => {
  const { phone_number } = req.query;

  try {
    const customerAddresses = await Address.find({ phone_number }).populate('customerId');
    res.json(customerAddresses);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
