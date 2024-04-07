const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const addressRoutes = require('./routes/addressRoutes');
const updateAddressRoutes = require('./routes/updateAddressRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const odeerP=require('./routes/OrdersP');
// const customerRoutes = require('./routes/customerRoutes');
const cancelOrderRoutes = require('./routes/cancelOrderRoutes');
const Shopify = require('shopify-api-node');
const dotenv = require('dotenv'); 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


const shopify = new Shopify({
  shopName:process.env.shopName, 
  apiKey:process.env.apiKey, 
  password:process.env.password, 
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/app/api/addresses', addressRoutes);
app.use('/app/api/address/update', updateAddressRoutes);
app.use('/app/api/orders', ordersRoutes);
app.use('/app/api/order', orderRoutes);
app.use('/app/api/order/cancel', cancelOrderRoutes);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
