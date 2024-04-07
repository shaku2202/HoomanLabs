// app/controllers/UpdateAddressController.js

const Address = require('../models/Address');

exports.updateAddress = async (req, res) => {
  const { address_id, address_data } = req.body;

  try {
    const updatedAddress = await Address.findByIdAndUpdate(address_id, address_data, { new: true });
    res.json(updatedAddress);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
