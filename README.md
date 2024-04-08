# Node.js Shopify API Integration

## Introduction
This project demonstrates the integration of Shopify APIs with a Node.js backend using Express and the Shopify API client library. It provides functionalities for managing orders, customers, and addresses through RESTful API endpoints.

## Project Type
Backend

## Deployed App
Backend: [https://hoomanlabs-1.onrender.com/](https://hoomanlabs-1.onrender.com/)

## Directory Structure

HoomansLabs/
├─ controllers/
│  ├─ AddressController.js
│  ├─ CancleOrderController.js
│  ├─ OrderController.js
│  ├─ OrdersControllers.js
│  ├─ UpdateAddressController.js
├─ middleware/
│  ├─ errorHandler.js
├─ models/
│  ├─ Address.js
│  ├─ Order.js
│  ├─ Customers.js
├─ routes/
│  ├─ addressRoutes.js
│  ├─ cancleOrderRoutes.js
│  ├─ orderRoutes.js
│  ├─ ordersRoutes.js
│  ├─ updateAddressRoutes.js
├─ .env
├─ index.js
├─ README.md




## Features
- Retrieve list of saved addresses
- Update customer address
- Get order list
- Get order details
- Cancel order

## Design Decisions or Assumptions
- Following RESTful API design principles
- Error handling using middleware

## Installation & Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/shaku2202/HoomanLabs


2. **Install dependencies:  npm i node**


3. **Set up Shopify API credentials:**

- Obtain your Shopify API credentials (API key, API password, and shop name).
- Update `index.js` with your Shopify API credentials:

  ```javascript
  const shopify = new Shopify({
    shopName: 'your-shop-name.myshopify.com', // Replace with your Shopify store name
    apiKey: 'your-api-key', // Replace with your Shopify API key
    password: 'your-api-password', // Replace with your Shopify API password
  });
  ```

4. **Start the server:**



## APIs Used
- Shopify API

## API Endpoints

- **GET `/app/api/addresses`:** Retrieves list of saved addresses.
- **PUT `/app/api/address/update`:** Updates customer address.
- **GET `/app/api/orders`:** Gets order list.
- **GET `/app/api/order`:** Gets order details.
- **POST `/app/api/order/cancel`:** Cancels order.


## Dependencies

- express: Web framework for Node.js.
- body-parser: Middleware for parsing request bodies.
- shopify-api-node: Shopify API client library for Node.js.







