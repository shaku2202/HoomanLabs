# Node.js Shopify API Integration

This project demonstrates how to integrate Shopify APIs with a Node.js application using Express and the Shopify API client library.

## Getting Started

1. **Clone the repository:https://github.com/shaku2202/HoomanLabs**


2. **Install dependencies:npm i node**


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


## API Endpoints

- GET `/app/api/addresses`: Retrieve list of addresses.
- PUT `/app/api/address/update`: Update a customer address.
- GET `/app/api/orders`: Get list of orders.
- GET `/app/api/order`: Get order details.
- POST `/app/api/order/cancel`: Cancel an order.

## Project Structure

- `index.js`: Main entry point of the application.
- `routes/`: Contains route handlers for different API endpoints.
- `controllers/`: Contains controller functions for handling API requests.
- `models/`: Contains database models (not used in Shopify integration).
- `config/`: Contains configuration files (not used in Shopify integration).

## Dependencies

- express: Web framework for Node.js.
- body-parser: Middleware for parsing request bodies.
- shopify-api-node: Shopify API client library for Node.js.



