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

### 1. Retrieve Customer Addresses by Phone Number

- **Endpoint**: `: https://hoomanlabs-1.onrender.com/app/api/addresses?phoneNumber=`
- **Method**: `GET`
- **Description**: Retrieves addresses for a customer based on their phone number.
- **Required Parameters**:
  - `phoneNumber`: Phone number of the customer.
- - **Sample Request**:
  ```http
  GET  https://hoomanlabs-1.onrender.com/app/api/addresses?phoneNumber=7839150269
  ```
- **Sample Response**:
  ```json
  [
    {
      "address": "h-168",
      "city": "India",
      "zipcode": "10001"
    },
    {
      "address": "54-kl4",
      "city": "India",
      "zipcode": "90001"
    }
  ]
  ```


### 2. Update Customer Address

- **Endpoint**: `https://hoomanlabs-1.onrender.com./app/api/address/update/`
- **Method**: `PUT`
- **Description**: Updates a customer's address.
- **Required Parameters**:
  - `addressId`: ID of the address to be updated.
  - `addressData`: New address data.
- **Sample Request**:
  Content-Type: application/json


### 3. Retrieve Orders by Customer Phone Number

- **Endpoint**: `https://hoomanlabs-1.onrender.com/app/api/orders?phoneNumber=`
- **Method**: `GET`
- **Description**: Retrieves orders associated with a customer's phone number.
- **Required Parameters**:
  - `phoneNumber`: Phone number of the customer.

### 4. Retrieve Order Details by Order Number

- **Endpoint**: `https://hoomanlabs-1.onrender.com/app/api/order`
- **Method**: `GET`
- **Description**: Retrieves details of an order based on its order number.
- **Required Parameters**:
  - `orderNumber`: Order number of the order to retrieve details.
- **Sample Request**:
  ```http
  GET /orders?orderNumber=54856934554
  ```

### 5. Cancel an Order

- **Endpoint**: `https://hoomanlabs-1.onrender.com/app/api/order/cancel/`
- **Method**: `POST`
- **Description**: Cancels an order based on its order number.
- **Required Parameters**:
  - `orderNumber`: Order number of the order to be cancelled.

## Dependencies

- express: Web framework for Node.js.
- body-parser: Middleware for parsing request bodies.
- shopify-api-node: Shopify API client library for Node.js.

## Video

![video1385639496 (online-video-cutter com)](https://github.com/shaku2202/HoomanLabs/assets/147685559/bc700cef-1a7c-41af-a0d2-62cf0e8985a1)
